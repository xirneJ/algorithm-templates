import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const courses = JSON.parse(await fs.readFile(path.join(root, 'planning', 'acwing-courses.json'), 'utf8'));
const knownPersonal = JSON.parse(await fs.readFile(path.join(root, 'planning', 'acwing-submissions.json'), 'utf8'));
const outputPath = path.join(root, 'planning', 'acwing-problem-codes.json');
let existing = [];
try { existing = JSON.parse(await fs.readFile(outputPath, 'utf8')); } catch {}

const start = Number(process.argv[2] || 0);
const endArg = Number(process.argv[3] || 325);
const problems = [];
for (const chapter of courses) {
  for (const group of chapter.groups) {
    for (const problem of group.problems) {
      problems.push({ course: chapter.course, chapter: chapter.chapter, group: group.groupName, ...problem });
    }
  }
}
const end = Math.min(endArg, problems.length);
const resultMap = new Map(existing.map((item) => [String(item.problemId), item]));
const personalByCodeId = new Map(knownPersonal.map((item) => [String(item.codeId), item]));

function extractCode(raw) {
  let text = String(raw || '').replace(/\r\n?/g, '\n').trim();
  if (!text) return '';
  text = text.replace(/^\[\/\/\]:.*\n?/, '').trim();
  text = text.replace(/```[\s\S]*?```/g, (block) => /这里填你的代码|注意代码要放在两组三个点之间/.test(block) ? '' : block).trim();
  const fenced = [...text.matchAll(/```(?:cpp|c\+\+|c)?\n([\s\S]*?)```/g)].map((m) => m[1].trim());
  if (fenced.length) { fenced.sort((a, b) => b.length - a.length); text = fenced[0]; }
  return text.replace(/^\[[^\]]*\]:.*$/gm, '').replace(/\n{3,}/g, '\n\n').trim();
}

const pages = await fetch('http://127.0.0.1:9222/json/list').then((r) => r.json());
const page = pages.find((p) => p.type === 'page');
if (!page) throw new Error('No Edge page found on port 9222');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { ws.addEventListener('open', resolve, { once: true }); ws.addEventListener('error', reject, { once: true }); });
let nextId = 1;
const pending = new Map();
ws.addEventListener('message', (event) => {
  const msg = JSON.parse(event.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject, timer } = pending.get(msg.id);
    clearTimeout(timer); pending.delete(msg.id);
    if (msg.error) reject(new Error(msg.error.message)); else resolve(msg.result);
  }
});
function send(method, params = {}, timeout = 15000) {
  const id = nextId++;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(`CDP timeout: ${method}`)); }, timeout);
    pending.set(id, { resolve, reject, timer });
    ws.send(JSON.stringify({ id, method, params }));
  });
}
async function evaluate(expression) {
  const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || 'Page evaluation failed');
  return result.result?.value;
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function navigate(url) {
  await send('Page.navigate', { url });
  for (let i = 0; i < 60; i++) {
    await sleep(200);
    try { if (await evaluate('document.readyState') === 'complete') { await sleep(250); return; } } catch {}
  }
  throw new Error('Page did not finish loading: ' + url);
}
function codeLink(id) { return `https://www.acwing.com/activity/content/code/content/${id}/`; }
function problemLink(id) { return `https://www.acwing.com/activity/content/problem/content/${id}/`; }

for (let i = start; i < end; i++) {
  const problem = problems[i];
  const key = String(problem.problemId);
  const previous = resultMap.get(key);
  if (previous?.code) continue;

  const record = { ...problem, source: 'none', sourceUrl: '', code: '' };
  try {
    if (problem.completed && problem.codeId) {
      const known = personalByCodeId.get(String(problem.codeId));
      if (known?.raw) {
        record.code = extractCode(known.raw);
      } else {
        await navigate(`https://www.acwing.com/activity/content/code/update/${problem.codeId}/`);
        const raw = await evaluate("document.querySelector('#id_content')?.value || ''");
        record.code = extractCode(raw);
      }
      record.source = record.code ? 'self' : 'none';
      record.sourceUrl = codeLink(problem.codeId);
    } else {
      await navigate(problemLink(problem.problemId));
      const yxc = await evaluate(`(() => {
        const links = Array.from(document.querySelectorAll('a[href*="/activity/content/code/content/"]'));
        const match = links.find((a) => /\\byxc\\b/i.test(a.innerText || ''));
        return match ? { href: match.getAttribute('href'), text: (match.innerText || '').trim() } : null;
      })()`);
      if (yxc?.href) {
        await navigate(new URL(yxc.href, 'https://www.acwing.com').href);
        const raw = await evaluate("document.querySelector('.main-martor-content')?.innerText || ''");
        record.code = extractCode(raw);
        record.source = record.code ? 'yxc' : 'none';
        record.sourceUrl = new URL(yxc.href, 'https://www.acwing.com').href;
      }
    }
  } catch (error) {
    record.error = String(error?.message || error);
  }

  resultMap.set(key, record);
  if ((i + 1 - start) % 5 === 0 || i === end - 1) {
    const ordered = problems.map((p) => resultMap.get(String(p.problemId))).filter(Boolean);
    await fs.writeFile(outputPath, JSON.stringify(ordered, null, 2), 'utf8');
    const batch = [...resultMap.values()].slice(start, i + 1);
    console.log(`saved ${i + 1}/${end}; self=${batch.filter((x) => x.source === 'self').length}; yxc=${batch.filter((x) => x.source === 'yxc').length}; none=${batch.filter((x) => x.source === 'none').length}`);
  }
}
ws.close();
console.log(`DONE ${start}-${end}`);