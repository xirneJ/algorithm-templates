import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const courses = JSON.parse(read('planning/acwing-courses.json'));
const categories = ['sorting', 'binary-search', 'basics', 'ds', 'string', 'search', 'graph', 'dp', 'math', 'greedy'];
const problemMeta = new Map();
for (const chapter of courses) {
  for (const group of chapter.groups) {
    for (const problem of group.problems) {
      problemMeta.set(String(problem.problemId), { ...problem, course: chapter.course, chapter: chapter.chapter, group: group.groupName });
    }
  }
}
const completedCount = [...problemMeta.values()].filter((problem) => problem.completed).length;
assert.equal(courses.length, 12, 'there should be 12 source chapters');
assert.equal(problemMeta.size, 325, 'there should be 325 source problems');
assert.equal(completedCount, 162, 'there should be 162 successful personal submissions');

const config = read('mkdocs.yml');
assert.doesNotMatch(config, /算法基础课|算法提高课/, 'course-based top-level navigation should be removed');
assert.doesNotMatch(config, /acwing-basic|acwing-advanced/, 'course directories should not be in navigation');

const docs = categories.flatMap((dir) =>
  fs.readdirSync(path.join(root, 'docs', dir))
    .filter((file) => file.endsWith('.md') && file !== 'index.md')
    .map((file) => ({ file: path.join('docs', dir, file), source: read(path.join('docs', dir, file)) })),
);
const all = docs.map((item) => item.source).join('\n');
const groups = [...new Set(courses.flatMap((chapter) => chapter.groups.map((group) => group.groupName)))];
for (const group of groups) assert.ok(all.includes(group), `algorithm pages should contain ${group}`);

const categoryChecks = {
  sorting: ['快速排序', '归并排序', '排序'],
  'binary-search': ['二分'],
  basics: ['高精度', '前缀和与差分', '位运算', '离散化'],
  ds: ['并查集', '线段树', '树状数组', '单调队列'],
  string: ['KMP', 'Trie', 'AC自动机'],
  search: ['DFS', 'BFS', 'A*', 'IDA*'],
  graph: ['Dijkstra', 'Floyd', 'Kruskal', '最近公共祖先'],
  dp: ['背包问题', '线性DP', '数位DP', '斜率优化DP'],
  math: ['质数', '欧拉函数', '快速幂', '博弈论'],
  greedy: ['Huffman树', '排序不等式'],
};
for (const [dir, names] of Object.entries(categoryChecks)) {
  const source = docs.filter((item) => path.dirname(item.file) === path.join('docs', dir)).map((item) => item.source).join('\n');
  for (const name of names) assert.ok(source.includes(name), `${dir} should contain ${name}`);
}

const problemRoot = path.join(root, 'docs', 'problems');
const problemFiles = fs.readdirSync(problemRoot, { recursive: true }).filter((file) => file.endsWith('.md'));
assert.equal(problemFiles.length, 325, 'there should be 325 problem pages');
let selfCount = 0;
let yxcCount = 0;
for (const relative of problemFiles) {
  const source = read(path.join('docs', 'problems', relative));
  const problemId = path.basename(relative, '.md');
  const meta = problemMeta.get(problemId);
  assert.ok(meta, `problem ${problemId} should exist in source data`);
  assert.match(source, /^## 模板$/m, `${problemId} should contain a template section`);
  assert.match(source, /```cpp/, `${problemId} should contain C++ code`);
  assert.match(source, /AcWing 原题/, `${problemId} should link to the original problem`);
  if (meta.completed) {
    assert.match(source, /我的提交/, `${problemId} should use the personal submission`);
    selfCount++;
  } else {
    assert.match(source, /yxc 相关代码/, `${problemId} should use yxc's related code`);
    yxcCount++;
  }
}
assert.equal(selfCount, 162, '162 problems should use personal submissions');
assert.equal(yxcCount, 163, '163 problems should use yxc code');

for (const doc of docs) {
  if (doc.source.includes('## 题目')) assert.match(doc.source, /^## 模板$/m, `${doc.file} should have a template`);
}
console.log(`PASS: ${groups.length} algorithms, 325 problems, ${selfCount} personal codes, ${yxcCount} yxc codes`);