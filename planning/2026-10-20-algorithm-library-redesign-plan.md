# 算法模板库 OI Wiki 风格重构实施计划

> **执行方式：** 当前会话内联执行。每个任务完成后运行对应验证命令。

**目标：** 用 MkDocs Material 重建 32 个算法模板页面，布局和 CSS 接近 OI Wiki DP 页面。

**架构：** Markdown 内容位于 `docs/`，Material 主题配置位于 `mkdocs.yml`，少量 OI Wiki 风格覆盖位于 `docs/stylesheets/extra.css`。

**技术栈：** MkDocs 1.6.1、Material for MkDocs 9.6.15、Python 3.12、Node.js 测试脚本。

**设计文档：** `planning/2026-10-20-algorithm-library-redesign-design.md`

## 全局约束

- 默认浅色主题，顶部导航为白色。
- 使用 Fira Sans 与 Fira Mono。
- 主色 `#4051b5`，强调色 `#526cfe`，代码背景 `#f5f5f5`。
- 保留 32 个算法模板，页面结构必须包含 `## 模板` 与复杂度表。
- 站点构建必须通过 `mkdocs build --strict`。

---

### Task 1: 依赖与站点配置

**Files:**
- Create: `.venv/`
- Create: `mkdocs.yml`
- Test: `tests/site.test.mjs`

- [x] 创建虚拟环境并安装 `mkdocs==1.6.1`、`mkdocs-material==9.6.15`。
- [x] 编写 Material 配置：中文、Fira 字体、白色主色、indigo 强调色、导航 tabs、搜索、代码复制。
- [x] 运行 `node tests/site.test.mjs`，确认下一步失败点变为缺少内容页面，而不是缺少配置。

### Task 2: 迁移 32 个算法页面

**Files:**
- Create: `docs/{basics,ds,graph,dp,math,string}/*.md`
- Create: `docs/index.md`
- Create: `scripts/migrate-content.cjs`

- [x] 从 `js/algorithms.js` 读取分类和算法数据。
- [x] 生成每个算法的 H1、摘要、思路、模板、复杂度表、易错点。
- [x] 生成各分类索引页与首页。
- [x] 运行 `node tests/site.test.mjs`，确认 32 页断言通过。

### Task 3: OI Wiki 风格覆盖

**Files:**
- Create: `docs/stylesheets/extra.css`
- Create: `docs/javascripts/extra.js` if needed

- [x] 设置主色、强调色、代码底色和深色主题变量。
- [x] 保持 Material 默认三栏几何与字体，不重写布局。
- [x] 为首页分类入口补充克制的样式。
- [x] 运行构建与测试。

### Task 4: 构建与浏览器验证

**Files:**
- Build output: `site/`

- [x] 运行 `mkdocs build --strict`。
- [x] 运行 `node tests/site.test.mjs`。
- [x] 启动本地服务器，用浏览器检查桌面端与移动端布局。
- [x] 对比参考站几何尺寸，记录结果。

### Task 5: 收尾文档

**Files:**
- Modify: `README.md`
- Modify: `PROGRESS.md`

- [x] 更新 README 为 MkDocs 使用说明。
- [x] 更新 PROGRESS 为重构后的架构与验证结果。