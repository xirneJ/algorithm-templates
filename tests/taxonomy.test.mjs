import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const courses = JSON.parse(read('planning/acwing-courses.json'));
const submissions = JSON.parse(read('planning/acwing-submissions.json'));
const groups = courses.flatMap((chapter) => chapter.groups.map((group) => group.groupName));
const uniqueGroups = [...new Set(groups)];
const categories = ['sorting', 'binary-search', 'basics', 'ds', 'string', 'search', 'graph', 'dp', 'math', 'greedy'];

assert.equal(courses.length, 12, 'there should be 12 AcWing chapters');
assert.equal(groups.length, 117, 'there should be 117 algorithm groups');
assert.ok(uniqueGroups.length >= 100, 'most course groups should have distinct names');
assert.equal(submissions.length, 64, 'there should be 64 submissions with code');

const config = read('mkdocs.yml');
assert.doesNotMatch(config, /算法基础课|算法提高课/, 'course-based top-level navigation should be removed');
assert.doesNotMatch(config, /acwing-basic|acwing-advanced/, 'course directories should not be in navigation');

const docs = categories.flatMap((dir) =>
  fs.readdirSync(path.join(root, 'docs', dir))
    .filter((file) => file.endsWith('.md') && file !== 'index.md')
    .map((file) => ({ file: path.join('docs', dir, file), source: read(path.join('docs', dir, file)) })),
);
const all = docs.map((item) => item.source).join('\n');

for (const group of uniqueGroups) {
  assert.ok(all.includes(group), `algorithm category pages should contain ${group}`);
}

const codeIds = [...all.matchAll(/activity\/content\/code\/content\/(\d+)\//g)].map((match) => match[1]);
assert.equal(new Set(codeIds).size, 64, 'there should be 64 unique submission links');

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
  const source = docs.filter((item) => path.dirname(item.file) === path.join('docs', dir)).map((item) => item.source).join('\\n');
  for (const name of names) {
    assert.ok(source.includes(name), `${dir} should contain ${name}`);
  }
}

assert.ok(all.includes('提交记录中暂未找到'), 'blank templates should be explicitly marked');
console.log(`PASS: ${uniqueGroups.length} algorithms classified into ${categories.length} algorithm categories; ${new Set(codeIds).size} submission sources linked`);
