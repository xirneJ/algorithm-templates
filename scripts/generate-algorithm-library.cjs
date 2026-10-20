const fs = require('fs');
const path = require('path');

const root = process.cwd();
const courses = JSON.parse(fs.readFileSync(path.join(root, 'planning', 'acwing-courses.json'), 'utf8'));
const submissions = JSON.parse(fs.readFileSync(path.join(root, 'planning', 'acwing-submissions.json'), 'utf8'));
const problemCodesPath = path.join(root, 'planning', 'acwing-problem-codes.json');
const problemCodes = fs.existsSync(problemCodesPath) ? JSON.parse(fs.readFileSync(problemCodesPath, 'utf8')) : [];
const problemCodeMap = new Map(problemCodes.map((item) => [String(item.problemId), item]));

const categoryMeta = {
  sorting: { name: '排序', intro: '快速排序、归并排序与进阶排序问题。' },
  'binary-search': { name: '二分', intro: '整数二分、实数二分与二分答案。' },
  basics: { name: '基础算法', intro: '高精度、前缀和与差分、双指针、位运算、离散化、区间合并与递归。' },
  ds: { name: '数据结构', intro: '链表、栈、队列、并查集、堆、哈希表、树状数组、线段树、平衡树与 ST 表。' },
  string: { name: '字符串', intro: 'KMP、Trie、AC 自动机、字符串哈希与 Manacher。' },
  search: { name: '搜索', intro: 'DFS、BFS、Flood Fill、双向搜索、A*、IDA* 与搜索剪枝。' },
  graph: { name: '图论', intro: '最短路、最小生成树、连通性、最近公共祖先、二分图与欧拉路径。' },
  dp: { name: '动态规划', intro: '背包、线性 DP、区间 DP、树形 DP、状态压缩 DP 与各类优化。' },
  math: { name: '数学', intro: '质数、约数、欧拉函数、快速幂、同余、组合计数、高斯消元与博弈论。' },
  greedy: { name: '贪心', intro: '区间贪心、Huffman 树、排序不等式、绝对值不等式与推公式。' },
};
const categoryOrder = ['sorting', 'binary-search', 'basics', 'ds', 'string', 'search', 'graph', 'dp', 'math', 'greedy'];

const existingTargets = {
  'quick-sort': { category: 'sorting', slug: 'quick-sort', title: '快速排序', file: 'sorting/quick-sort.md' },
  'merge-sort': { category: 'sorting', slug: 'merge-sort', title: '归并排序', file: 'sorting/merge-sort.md' },
  'binary-search': { category: 'binary-search', slug: 'binary-search', title: '整数二分', file: 'binary-search/binary-search.md' },
  'prefix-diff': { category: 'basics', slug: 'prefix-diff', title: '前缀和与差分', file: 'basics/prefix-diff.md' },
  discretization: { category: 'basics', slug: 'discretization', title: '离散化', file: 'basics/discretization.md' },
  dsu: { category: 'ds', slug: 'dsu', title: '并查集', file: 'ds/dsu.md' },
  fenwick: { category: 'ds', slug: 'fenwick', title: '树状数组', file: 'ds/fenwick.md' },
  'segment-tree': { category: 'ds', slug: 'segment-tree', title: '线段树', file: 'ds/segment-tree.md' },
  'st-table': { category: 'ds', slug: 'st-table', title: 'ST 表（RMQ）', file: 'ds/st-table.md' },
  'monotonic-queue': { category: 'ds', slug: 'monotonic-queue', title: '单调队列', file: 'ds/monotonic-queue.md' },
  kmp: { category: 'string', slug: 'kmp', title: 'KMP 字符串匹配', file: 'string/kmp.md' },
  trie: { category: 'string', slug: 'trie', title: 'Trie 字典树', file: 'string/trie.md' },
  'topo-sort': { category: 'graph', slug: 'topo-sort', title: '拓扑排序', file: 'graph/topo-sort.md' },
  dijkstra: { category: 'graph', slug: 'dijkstra', title: '堆优化 Dijkstra', file: 'graph/dijkstra.md' },
  floyd: { category: 'graph', slug: 'floyd', title: 'Floyd 多源最短路', file: 'graph/floyd.md' },
  kruskal: { category: 'graph', slug: 'kruskal', title: 'Kruskal 最小生成树', file: 'graph/kruskal.md' },
  hungarian: { category: 'graph', slug: 'hungarian', title: '匈牙利算法（二分图匹配）', file: 'graph/hungarian.md' },
  'tarjan-scc': { category: 'graph', slug: 'tarjan-scc', title: '强连通分量（Tarjan）', file: 'graph/tarjan-scc.md' },
  lca: { category: 'graph', slug: 'lca', title: '最近公共祖先（LCA）', file: 'graph/lca.md' },
  lis: { category: 'dp', slug: 'lis', title: '最长上升子序列（LIS）', file: 'dp/lis.md' },
  'interval-dp': { category: 'dp', slug: 'interval-dp', title: '区间 DP', file: 'dp/interval-dp.md' },
  'tree-dp': { category: 'dp', slug: 'tree-dp', title: '树形 DP', file: 'dp/tree-dp.md' },
  'fast-power': { category: 'math', slug: 'fast-power', title: '快速幂', file: 'math/fast-power.md' },
  exgcd: { category: 'math', slug: 'exgcd', title: '扩展欧几里得', file: 'math/exgcd.md' },
  'linear-sieve': { category: 'math', slug: 'linear-sieve', title: '线性筛素数', file: 'math/linear-sieve.md' },
  combinations: { category: 'math', slug: 'combinations', title: '组合数', file: 'math/combinations.md' },
};

const standaloneTargets = [
  { key: 'knapsack-01', category: 'dp', slug: 'knapsack-01', title: '01 背包', file: 'dp/knapsack-01.md' },
  { key: 'knapsack-complete', category: 'dp', slug: 'knapsack-complete', title: '完全背包', file: 'dp/knapsack-complete.md' },
  { key: 'adjacency-list', category: 'graph', slug: 'adjacency-list', title: '链式前向星', file: 'graph/adjacency-list.md' },
  { key: 'string-hash', category: 'string', slug: 'string-hash', title: '字符串哈希', file: 'string/string-hash.md' },
  { key: 'manacher', category: 'string', slug: 'manacher', title: 'Manacher 回文串', file: 'string/manacher.md' },
  { key: 'matrix-power', category: 'math', slug: 'matrix-power', title: '矩阵快速幂', file: 'math/matrix-power.md' },
];

const canonical = {
  '快速排序': 'quick-sort', '归并排序': 'merge-sort', '排序': 'sorting', '二分': 'binary-search',
  '前缀和与差分': 'prefix-diff', '离散化': 'discretization', '并查集': 'dsu', '单调队列': 'monotonic-queue',
  '树状数组': 'fenwick', '线段树': 'segment-tree', 'RMQ': 'st-table', 'KMP': 'kmp', 'Trie': 'trie',
  'Dijkstra': 'dijkstra', 'Floyd': 'floyd', 'Floyd算法': 'floyd', 'Kruskal': 'kruskal',
  '匈牙利算法': 'hungarian', '拓扑排序': 'topo-sort', '最近公共祖先': 'lca',
  '有向图的强连通分量': 'tarjan-scc', '快速幂': 'fast-power', '扩展欧几里得算法': 'exgcd',
  '质数': 'linear-sieve', '筛质数': 'linear-sieve', '求组合数': 'combinations',
  '最长上升子序列模型': 'lis', '区间DP': 'interval-dp', '树形DP': 'tree-dp',
  '背包问题': 'knapsack', '背包模型': 'knapsack', '数位统计DP': 'digit-dp', '数位DP': 'digit-dp',
  '状态压缩DP': 'state-compression-dp', '组合计数': 'combinatorics', '矩阵乘法': 'matrix-multiplication',
  '数字三角形模型': 'digit-triangle', '单调队列优化DP': 'monotonic-queue-dp',
  '斜率优化DP': 'slope-optimization-dp', '状态机模型': 'state-machine-dp',
  '线性DP': 'linear-dp', '计数类DP': 'counting-dp', '记忆化搜索': 'memoized-search',
  'AC自动机': 'ac-automaton',
};

const newTitles = {
  sorting: '排序', knapsack: '背包问题', 'digit-dp': '数位 DP', 'state-compression-dp': '状态压缩 DP',
  combinatorics: '组合计数', 'matrix-multiplication': '矩阵乘法', 'digit-triangle': '数字三角形模型',
  'monotonic-queue-dp': '单调队列优化 DP', 'slope-optimization-dp': '斜率优化 DP',
  'state-machine-dp': '状态机 DP', 'linear-dp': '线性 DP', 'counting-dp': '计数类 DP',
  'memoized-search': '记忆化搜索', 'ac-automaton': 'AC 自动机',
};

const newSlugs = {
  sorting: 'sorting-advanced', knapsack: 'knapsack', 'digit-dp': 'digit-dp',
  'state-compression-dp': 'state-compression-dp', combinatorics: 'combinatorics',
  'matrix-multiplication': 'matrix-multiplication', 'digit-triangle': 'digit-triangle',
  'monotonic-queue-dp': 'monotonic-queue-dp', 'slope-optimization-dp': 'slope-optimization-dp',
  'state-machine-dp': 'state-machine-dp', 'linear-dp': 'linear-dp', 'counting-dp': 'counting-dp',
  'memoized-search': 'memoized-search', 'ac-automaton': 'ac-automaton',
};

const overrides = {
  '快速排序': 'sorting', '归并排序': 'sorting', '排序': 'sorting', '二分': 'binary-search',
  'KMP': 'string', 'Trie': 'string', 'AC自动机': 'string',
  'DFS': 'search', 'BFS': 'search', '树与图的深度优先遍历': 'search', '树与图的广度优先遍历': 'search',
  'Flood Fill': 'search', '最短路模型': 'search', '多源BFS': 'search', '最小步数模型': 'search',
  '双端队列广搜': 'search', '双向广搜': 'search', 'A*': 'search', 'DFS之连通性模型': 'search',
  'DFS之搜索顺序': 'search', 'DFS之剪枝与优化': 'search', '迭代加深': 'search', '双向DFS': 'search', 'IDA*': 'search',
  '单链表': 'ds', '双链表': 'ds', '栈': 'ds', '队列': 'ds', '单调栈': 'ds', '堆': 'ds', '哈希表': 'ds',
  '可持久化数据结构': 'ds', '平衡树': 'ds', 'RMQ': 'ds',
  '位运算': 'basics', '高精度': 'basics', '前缀和与差分': 'basics', '双指针算法': 'basics',
  '离散化': 'basics', '区间合并': 'basics', '递推与递归': 'basics',
  '背包问题': 'dp', '背包模型': 'dp', '线性DP': 'dp', '区间DP': 'dp', '计数类DP': 'dp',
  '数位统计DP': 'dp', '数位DP': 'dp', '状态压缩DP': 'dp', '树形DP': 'dp', '记忆化搜索': 'dp',
  '数字三角形模型': 'dp', '最长上升子序列模型': 'dp', '状态机模型': 'dp',
  '单调队列优化DP': 'dp', '斜率优化DP': 'dp',
  '质数': 'math', '筛质数': 'math', '分解质因数': 'math', '约数': 'math', '约数个数': 'math',
  '欧拉函数': 'math', '快速幂': 'math', '扩展欧几里得算法': 'math', '中国剩余定理': 'math',
  '高斯消元': 'math', '求组合数': 'math', '组合计数': 'math', '容斥原理': 'math', '博弈论': 'math',
  '同余': 'math', '矩阵乘法': 'math', '概率与数学期望': 'math',
  '区间问题': 'greedy', 'Huffman树': 'greedy', '排序不等式': 'greedy', '绝对值不等式': 'greedy', '推公式': 'greedy',
};

const cnNumbers = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6 };
function chapterNumber(chapter) {
  const match = chapter.match(/第([一二三四五六])[讲章]/);
  return match ? cnNumbers[match[1]] : 999;
}
function categoryFor(course, chapter, group) {
  if (overrides[group]) return overrides[group];
  if (course === '算法基础课') {
    if (chapter.includes('第一讲')) return 'basics';
    if (chapter.includes('第二讲')) return 'ds';
    if (chapter.includes('第三讲')) return 'graph';
    if (chapter.includes('第四讲')) return 'math';
    if (chapter.includes('第五讲')) return 'dp';
    return 'greedy';
  }
  if (chapter.includes('第一章')) return 'dp';
  if (chapter.includes('第二章')) return 'search';
  if (chapter.includes('第三章')) return 'graph';
  if (chapter.includes('第四章')) return 'ds';
  if (chapter.includes('第五章')) return 'math';
  return 'basics';
}

function yaml(value) { return JSON.stringify(String(value)); }
function writeDoc(file, content) {
  const full = path.join(root, 'docs', file);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content.replace(/\r\n?/g, '\n').replace(/[ \t]+$/gm, '').replace(/\s+$/, '') + '\n', 'utf8');
}
function extractCode(raw) {
  let text = String(raw || '').replace(/\r\n?/g, '\n').trim();
  if (!text) return '';
  text = text.replace(/^\[\/\/\]:.*\n?/, '').trim();
  text = text.replace(/```[\s\S]*?```/g, (block) => /这里填你的代码|注意代码要放在两组三个点之间/.test(block) ? '' : block).trim();
  const fenced = [...text.matchAll(/```(?:cpp|c\+\+|c)?\n([\s\S]*?)```/g)].map((m) => m[1].trim());
  if (fenced.length) { fenced.sort((a, b) => b.length - a.length); text = fenced[0]; }
  return text.replace(/^\[[^\]]*\]:.*$/gm, '').replace(/\n{3,}/g, '\n\n').trim();
}
function groupNames(target) { return [...new Set(target.groups.map((g) => g.name))].join('、'); }
function problemLink(problem) { return `https://www.acwing.com/activity/content/problem/content/${problem.problemId}/`; }
function codeLink(id) { return `https://www.acwing.com/activity/content/code/content/${id}/`; }

const orderedCourses = [...courses].sort((a, b) => {
  const co = { 算法基础课: 0, 算法提高课: 1 };
  if (a.course !== b.course) return co[a.course] - co[b.course];
  return chapterNumber(a.chapter) - chapterNumber(b.chapter);
});

const targets = new Map();
const problemTargetMap = new Map();
const slugCounters = {};
let runningOrder = 0;
for (const chapter of orderedCourses) {
  for (const group of chapter.groups) {
    const key = canonical[group.groupName] || group.groupName;
    const existing = existingTargets[key];
    const category = existing ? existing.category : categoryFor(chapter.course, chapter.chapter, group.groupName);
    if (!targets.has(key)) {
      let slug = existing ? existing.slug : newSlugs[key];
      if (!slug) {
        slugCounters[category] = (slugCounters[category] || 0) + 1;
        slug = `algorithm-${String(slugCounters[category]).padStart(2, '0')}`;
      }
      targets.set(key, {
        key, category, slug, title: existing ? existing.title : (newTitles[key] || group.groupName),
        file: existing ? existing.file : `${category}/${slug}.md`,
        existing: !!existing, order: runningOrder++, groups: [], problems: [], submissions: [],
      });
    }
    const target = targets.get(key);
    target.groups.push({ course: chapter.course, chapter: chapter.chapter, name: group.groupName });
    for (const problem of group.problems) {
      if (!target.problems.some((p) => p.problemId === problem.problemId)) {
        target.problems.push(problem);
        problemTargetMap.set(String(problem.problemId), target);
      }
    }
    const sub = submissions.find((s) => s.course === chapter.course && s.chapter === chapter.chapter && s.group === group.groupName);
    if (sub) target.submissions.push(sub);
  }
}
for (const item of standaloneTargets) {
  if (!targets.has(item.key)) {
    targets.set(item.key, { ...item, existing: true, order: 900 + targets.size, groups: [], problems: [], submissions: [] });
  }
}

function renderProblemTable(problems, category) {
  return ['| 题目 | 状态 |', '| --- | --- |', ...problems.map((p) => `| [${p.title}](../problems/${category}/${p.problemId}.md) | ${p.completed ? '已完成' : '未完成'} |`)].join('\n');
}
function representativeCode(target) {
  const records = target.problems.map((p) => problemCodeMap.get(String(p.problemId))).filter((r) => r?.code);
  return records.find((r) => r.source === 'self') || records.find((r) => r.source === 'yxc') || null;
}
function targetCode(target) { return representativeCode(target)?.code || target.submissions.map((s) => extractCode(s.raw)).find(Boolean) || ''; }
function renderTemplateSection(target) {
  const code = targetCode(target);
  if (!code) return '';
  return ['## 模板', '', '```cpp', code, '```', ''].join('\n');
}
function renderProblemSection(target) {
  return ['## 题目', '', '**算法分组：** ' + groupNames(target), '', renderProblemTable(target.problems, target.category), ''].join('\n');
}
function renderSourceSection(target) {
  const record = representativeCode(target);
  if (!record) return '';
  const label = record.source === 'self' ? '我的提交' : 'yxc 相关代码';
  return ['## 提交来源', '', `- [${record.title}](${record.sourceUrl}) · ${label}`, ''].join('\n');
}
function insertAfterH1(content, section) {
  const lines = content.split('\n');
  const idx = lines.findIndex((line) => line.startsWith('# '));
  if (idx < 0) return content + '\n' + section;
  lines.splice(idx + 1, 0, '', section.trim());
  return lines.join('\n');
}
function stripSubmissionSection(content) {
  return content.replace(/\n?<!-- ALGORITHM_SUBMISSION_START -->[\s\S]*?<!-- ALGORITHM_SUBMISSION_END -->\n?/g, '').trimEnd();
}
function stripOriginalTemplate(content) {
  return content.replace(/\n## 模板\n[\s\S]*?(?=\n## |\s*$)/, '\n').trimEnd();
}

for (const target of targets.values()) {
  const code = targetCode(target);
  if (!target.existing) {
    const lines = [
      '---', 'title: ' + yaml(target.title), 'description: ' + yaml(`算法分类：${categoryMeta[target.category].name}`),
      'tags:', '  - 算法模板', '  - ' + yaml(categoryMeta[target.category].name), '---', '', '# ' + target.title, '',
    ];
    if (code) lines.push(renderTemplateSection(target));
    lines.push(`本页按算法归档，收录 ${target.problems.length} 道相关题目。`, '', '**算法分组：** ' + groupNames(target), '');
    if (!code) lines.push('提交记录中暂未找到该算法的代码，模板暂空。', '');
    lines.push('## 对应题目', '', renderProblemTable(target.problems, target.category), '');
    if (code) lines.push(renderSourceSection(target));
    writeDoc(target.file, lines.join('\n'));
  } else if (target.problems.length) {
    const full = path.join(root, 'docs', target.file);
    let content = fs.existsSync(full) ? fs.readFileSync(full, 'utf8') : '';
    content = stripSubmissionSection(content);
    content = stripOriginalTemplate(content);
    if (code) content = insertAfterH1(content, renderTemplateSection(target));
    const tail = code ? renderSourceSection(target) : '提交记录中暂未找到该算法的代码，模板暂空。\n';
    content += `\n\n<!-- ALGORITHM_SUBMISSION_START -->\n${renderProblemSection(target)}\n${tail}<!-- ALGORITHM_SUBMISSION_END -->\n`;
    writeDoc(target.file, content);
  } else if (target.existing) {
    const full = path.join(root, 'docs', target.file);
    if (fs.existsSync(full)) {
      const content = stripOriginalTemplate(fs.readFileSync(full, 'utf8'));
      writeDoc(target.file, content);
    }
  }
}
for (const record of problemCodes) {
  const target = problemTargetMap.get(String(record.problemId));
  if (!target || !record.code) continue;
  const file = `problems/${target.category}/${record.problemId}.md`;
  const algorithmLink = `../../${target.category}/${path.basename(target.file)}`;
  const sourceLabel = record.source === 'self' ? '我的提交' : 'yxc 相关代码';
  const lines = [
    '---', 'title: ' + yaml(record.title), 'description: ' + yaml(`所属算法：${target.title}`),
    'tags:', '  - 题目', '  - ' + yaml(target.title), '---', '', '# ' + record.title, '',
    '## 模板', '', '```cpp', record.code, '```', '',
    `**所属算法：** [${target.title}](${algorithmLink})  `,
    `**AcWing 原题：** [打开题目](${problemLink(record.problemId)})  `,
    `**代码来源：** [${sourceLabel}](${record.sourceUrl})`,
    ''
  ];
  writeDoc(file, lines.join('\n'));
}

const byCategory = {};
for (const target of targets.values()) (byCategory[target.category] ||= []).push(target);
for (const category of categoryOrder) {
  const items = (byCategory[category] || []).sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'zh-CN'));
  const lines = [
    '---', 'title: ' + yaml(categoryMeta[category].name), 'description: ' + yaml(categoryMeta[category].intro), '---', '',
    '# ' + categoryMeta[category].name, '', categoryMeta[category].intro, '',
    '## 算法目录', '', '| 算法 | 题目数 | 已完成 | 模板 |', '| --- | --- | --- | --- |',
  ];
  for (const target of items) {
    const completed = target.problems.filter((p) => p.completed).length;
    const status = target.problems.length === 0 ? '无提交' : (target.submissions.length ? '已收录' : '暂空');
    lines.push(`| [${target.title}](${path.basename(target.file)}) | ${target.problems.length || '-'} | ${target.problems.length ? `${completed}/${target.problems.length}` : '-'} | ${status} |`);
  }
  writeDoc(`${category}/index.md`, lines.join('\n'));
}

const homeLines = [
  '---', 'title: 算法模板库', 'description: 按算法分类整理的竞赛算法模板与 AcWing 题目提交记录。', '---', '',
  '# 算法模板库', '', '按算法分类整理的竞赛算法模板。左侧选择算法大类，页面内查看相关题目、代码模板与提交来源。', '',
  '## 算法分类', '', '<div class="category-list">',
];
for (const category of categoryOrder) {
  const items = byCategory[category] || [];
  homeLines.push(`  <a href="${category}/"><strong>${categoryMeta[category].name}</strong><span>${categoryMeta[category].intro} 共 ${items.length} 个条目。</span></a>`);
}
homeLines.push('</div>', '', '## 使用方式', '', '- 通过顶部标签切换算法大类。', '- 使用搜索框查找算法、题目或代码。', '- 代码块右上角可直接复制模板。', '- 页面右侧目录可快速跳转到题目和模板部分。', '');
writeDoc('index.md', homeLines.join('\n'));

const nav = ['  - 简介: index.md'];
for (const category of categoryOrder) {
  const items = (byCategory[category] || []).sort((a, b) => a.order - b.order || a.title.localeCompare(b.title, 'zh-CN'));
  nav.push(`  - ${categoryMeta[category].name}:`);
  nav.push(`      - 概览: ${category}/index.md`);
  for (const target of items) nav.push(`      - ${target.title}: ${target.file}`);
}
const configPath = path.join(root, 'mkdocs.yml');
let config = fs.readFileSync(configPath, 'utf8').replace(/\r\n?/g, '\n');
config = config.replace(/nav:\n[\s\S]*$/, 'nav:\n' + nav.join('\n') + '\n');
fs.writeFileSync(configPath, config, 'utf8');

const totalProblems = [...targets.values()].reduce((n, t) => n + t.problems.length, 0);
const withTemplates = [...targets.values()].filter((t) => t.submissions.some((s) => extractCode(s.raw))).length;
console.log(`Generated ${targets.size} algorithm pages in ${categoryOrder.length} categories (${totalProblems} problem links, ${withTemplates} pages with templates)`);
