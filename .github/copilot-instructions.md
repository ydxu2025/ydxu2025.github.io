## 快速目标

提供给 AI 编码/编辑代理的最小可用知识，让代理能在此 Jekyll (al-folio) 站点中：快速定位要改的文件、在本地安全构建/预览、并了解部署流程与约定。

## 项目概览（大局）
- 本站为基于 al-folio 的 Jekyll 静态站点。主要配置在 `_config.yml`。
- 内容分层：数据在 `_data/`、页面在 `_pages/`、集合在 `_projects/`、`_news/`、书目在 `_bibliography/`，布局/片段分别在 `_layouts/` 和 `_includes/`。
- 主题/逻辑由 Liquid 模板驱动，Ruby + Jekyll 在构建期生成 HTML；一些运行时/前端工具（purgecss、prettier）用于优化与格式化。

## 关键文件（快速索引）
- 配置：`_config.yml`（站点设置、插件、collections、scholar 配置）
- 依赖：`Gemfile`（Jekyll 与插件）、`package.json`（Prettier/liquid 插件）
- 构建/部署：`.github/workflows/deploy.yml`（CI 自动构建并部署至 GitHub Pages），`bin/deploy`（手动部署脚本）
- 本地/容器化：`Dockerfile`（可用于在容器中构建）
- 内容样例：`_pages/`, `_projects/`, `_news/`, `_bibliography/papers.bib`, `_data/cv.yml` 或 `assets/json/resume.json`

## 本地开发与构建（可复现命令）
注意：CI 使用 Ruby 3.3.5；保证本地 Ruby/bundler 与 CI 相近可减少差异。

安装依赖并在开发模式下预览：
```bash
# 安装 Ruby bundler（若尚未安装）
gem install bundler
bundle install
# 本地预览（开发）
bundle exec jekyll serve --livereload
```

生产构建（与 CI 相同的步骤）：
```bash
export JEKYLL_ENV=production
bundle exec jekyll build
# 可选：清理未使用的 CSS（仓库使用 purgecss）
npx purgecss -c purgecss.config.js
```

如果希望使用仓库提供的容器镜像进行构建（避免本地依赖差异）：
```bash
docker build -t al-folio .
# 运行镜像（镜像内入口脚本会执行构建）
docker run --rm -v "$(pwd)":/srv/jekyll -p 4000:8080 al-folio
```

## 部署流程（自动与手动）
- 自动：Push 到 `main` / `master` 将触发 `.github/workflows/deploy.yml`，CI 会：安装 imagemagick、nbconvert、bundle exec jekyll build、purgecss，并用 `JamesIves/github-pages-deploy-action` 将 `_site` 推到 gh-pages（仅在非 PR 时）。
- 手动：仓库包含 `bin/deploy`，它会在本地构建、替换工作树并强制推送 `gh-pages`。在运行前请确保工作区干净（脚本有检查）。

## 项目约定与常见模式（不要违背）
- CV 页面：优先使用 `assets/json/resume.json`（若存在），否则回退到 `_data/cv.yml`。
- 出版物：由 `_bibliography/papers.bib` + `jekyll-scholar` 管理。若修改 bib 文件，触发站点重建即可。
- Images：使用 `jekyll-imagemagick` 设置生成 webp/responsive，确保系统上有 ImageMagick（CI 与 Dockerfile 已包含安装）
- 插件清单在 `_config.yml` 的 `plugins:` 和 `Gemfile` 中同步维护，新增插件时同时更新两处。
- `_config.yml` 的 `exclude:` 列表控制哪些文件不会被包含到站点，编辑时注意不要把必要文件列入 exclude。

## 编辑/修改示例（AI 可以直接操作）
- 新增项目页面：在 `_projects/` 下复制 `1_project.md` 并修改 front matter（title, permalink, thumbnail）。
- 修改导航或布局：编辑 `_includes/header.liquid` 或 `_layouts/default.liquid`。
- 添加脚注/引用：编辑 `_bibliography/papers.bib` 并在相应文章中引用。

## 约束与注意事项（避免常见错误）
- 在修改 Gemfile 后必须运行 `bundle install`；CI 使用 bundler 缓存，版本差异会导致构建失败。
- `jekyll-jupyter-notebook` 依赖 nbconvert，缺失会导致构建错误；CI 中安装了 `nbconvert`。
- PurgeCSS 会删除未被引用的 CSS，修改前端类名或模板时请在复建后检查样式回归。

## 当需要更多信息时（给 AI 的查询提示）
- 若不确定构建失败原因，查看 CI 日志（Actions -> Deploy），重点检查 imagemagick/nbconvert、bundle install、jekyll build 输出。
- 要修改站点配置，先检查 `_config.yml` 的相应段（例如 scholar、collections、plugins）。

---
如果你希望我把某个部分写得更详细（例如：本地 Docker 使用示例、CI 常见错误修复指南或为编辑提交自动生成 PR 模板），告诉我你想要扩展的章节。 
