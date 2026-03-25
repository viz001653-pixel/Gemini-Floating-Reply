# Gemini Floating Reply 💬

**为 Google Gemini 添加划词引用功能** — 像使用 Claude / ChatGPT 一样，选中文字后一键引用到输入框。

[English](./README.md) | **简体中文**

---

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Platform](https://img.shields.io/badge/platform-Chrome-yellow)
![Works On](https://img.shields.io/badge/works%20on-gemini.google.com-4285F4)

---

## ✨ 功能演示

1. 用鼠标**划选** Gemini 任意回复中的文字
2. 松开鼠标后，选区附近自动浮现 **Reply 按钮**
3. 点击按钮，选中内容以 `> 引用` 格式**自动填入输入框**
4. 光标定位在引用后方，直接继续输入你的问题即可

---

## 📦 安装

### 方式一：下载 zip（推荐，无需 Git）

1. 前往 [Releases](../../releases/latest) 页面，下载 `gemini-floating-reply.zip` 并解压
2. 打开 Chrome，进入 `chrome://extensions/`
3. 右上角开启「**开发者模式**」
4. 点击「**加载已解压的扩展程序**」，选择解压后的文件夹
5. 打开 [gemini.google.com](https://gemini.google.com) 即可使用

### 方式二：克隆源码

```bash
git clone https://github.com/YOUR_USERNAME/gemini-floating-reply.git
```

之后按方式一第 2 步起操作，选择克隆下来的文件夹。

---

## 🗂 文件结构

```
gemini-floating-reply/
├── manifest.json       # 扩展配置 (Manifest V3)
├── content.js          # 核心注入脚本：划词检测 & 引用填入
├── style.css           # 浮动按钮样式
├── popup.html          # 点击插件图标时的状态弹窗
└── icons/              # 扩展图标
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

---

## 🛠 本地开发

```bash
git clone https://github.com/YOUR_USERNAME/gemini-floating-reply.git
cd gemini-floating-reply
# 在 Chrome 开发者模式中加载该文件夹
# 修改 content.js / style.css 后，在扩展管理页点击刷新即可生效
```

---

## 📋 TODO

- [ ] 支持键盘快捷键触发引用
- [ ] 支持 Firefox（WebExtension API）
- [ ] 发布至 Chrome Web Store

---

## 📄 License

[MIT](./LICENSE) © 2025
