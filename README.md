# Personal Homepage

这是一个轻量的个人学术主页静态项目，包含个人简介、教育经历、论文发表、News 和联系方式模块。项目不依赖构建工具，直接打开 `index.html` 就能预览，也可以部署到 GitHub Pages、Netlify、Cloudflare Pages 或学校服务器。

## 文件结构

```text
personal-homepage/
  index.html
  assets/
    styles.css
    script.js
    profile.jpg
    favicon.svg
```

## 本地预览

直接双击打开：

```text
personal-homepage/index.html
```

如果你希望用本地服务器预览，也可以在 `personal-homepage` 目录运行：

```powershell
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 修改个人信息

主要修改 `index.html`：

- 姓名：搜索 `Yuanshuaikang`
- 中文名：搜索 `袁帅康`
- 邮箱：搜索 `yuanshuaikang2024@163.com`
- 研究方向：修改 `.interest-list` 里面的条目
- 教育经历：修改 `#education` 模块
- 论文：修改 `#publications` 模块
- News：修改 `#news` 模块

头像当前使用 `assets/profile.jpg`。你可以把新的照片放到 `assets/` 目录，比如继续命名为 `profile.jpg`，页面会自动使用新照片。

## 部署成可访问链接

GitHub Pages：

1. 新建一个 GitHub 仓库。
2. 上传 `personal-homepage` 目录里的文件。
3. 在仓库 `Settings -> Pages` 中选择 `Deploy from a branch`。
4. 选择 `main` 分支和根目录，保存后等待生成链接。

Netlify：

1. 登录 Netlify。
2. 将 `personal-homepage` 文件夹拖到 Netlify 的部署页面。
3. 等待部署完成后获得公开链接。

如果部署到学校服务器，把 `index.html` 和 `assets` 目录一起上传到同一个网页目录即可。
