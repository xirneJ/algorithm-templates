import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const categories = ['sorting', 'binary-search', 'basics', 'ds', 'string', 'search', 'graph', 'dp', 'math', 'greedy'];

const config = read('mkdocs.yml');
assert.match(config, /name:\s*material/, 'theme should use Material for MkDocs');
assert.match(config, /navigation\.tabs/, 'top algorithm category tabs should be enabled');
assert.match(config, /primary:\s*white/, 'primary color should match OI Wiki');
assert.match(config, /accent:\s*indigo/, 'accent color should match OI Wiki');
assert.match(config, /Fira Sans/, 'body font should match OI Wiki');
assert.match(config, /Fira Mono/, 'code font should match OI Wiki');
assert.doesNotMatch(config, /算法基础课|算法提高课/, 'course-based navigation should be removed');

for (const dir of categories) {
  const categoryDir = path.join(root, 'docs', dir);
  assert.ok(fs.existsSync(categoryDir), `docs/${dir} should exist`);
  assert.ok(fs.existsSync(path.join(categoryDir, 'index.md')), `docs/${dir}/index.md should exist`);
}

const algorithmPages = categories.flatMap((dir) =>
  fs.readdirSync(path.join(root, 'docs', dir))
    .filter((file) => file.endsWith('.md') && file !== 'index.md')
    .map((file) => path.join('docs', dir, file)),
);
assert.ok(algorithmPages.length >= 60, `expected at least 60 algorithm pages, found ${algorithmPages.length}`);

const problemRoot = path.join(root, 'docs', 'problems');
assert.ok(fs.existsSync(problemRoot), 'docs/problems should exist');
const problemPages = fs.readdirSync(problemRoot, { recursive: true }).filter((file) => file.endsWith('.md'));
assert.equal(problemPages.length, 325, 'there should be one page for every AcWing problem');

assert.ok(fs.existsSync(path.join(root, 'docs', 'stylesheets', 'extra.css')), 'custom stylesheet should exist');
const css = read('docs/stylesheets/extra.css');
assert.match(css, /#4051b5/i, 'primary blue should match OI Wiki');
assert.match(css, /#526cfe/i, 'accent blue should match OI Wiki');
assert.match(css, /#f5f5f5/i, 'code background should match OI Wiki');

assert.ok(fs.existsSync(path.join(root, 'site', 'index.html')), 'site should be built before running DOM checks');
const html = read('site/index.html');
for (const className of ['md-header', 'md-tabs', 'md-sidebar--primary', 'md-sidebar--secondary', 'md-content', 'md-typeset', 'md-search']) {
  assert.ok(html.includes(className), `built page should contain .${className}`);
}
assert.ok(fs.existsSync(path.join(root, 'site', 'problems', 'ds', '864', 'index.html')), 'a built problem page should exist');

console.log(`PASS: ${categories.length} algorithm categories, ${algorithmPages.length} algorithm pages, ${problemPages.length} problem pages`);