# Gemini Floating Reply 💬

<p align="center">
  <img src="icons/icon128.png" width="80" alt="icon"/>
</p>

<p align="center">
  <a href="#中文说明">中文</a> · <a href="#english">English</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
  <img src="https://img.shields.io/badge/platform-Chrome-yellow" />
  <img src="https://img.shields.io/badge/manifest-v3-orange" />
</p>

---

## 中文说明

### ✨ 功能介绍

Claude 和 ChatGPT 都支持点击回复进行引用，而 Gemini 没有这个功能。

**Gemini Floating Reply** 为 Gemini 补全了这个缺失：在 Gemini 的任意 AI 回复中**划选文字**，松开鼠标后会出现一个浮动按钮，点击即可将选中内容以引用格式自动填入输入框，方便继续追问。

### 🎬 使用方式

```
1. 在 Gemini 回复中，用鼠标划选你感兴趣的内容
2. 松开鼠标 → 浮动按钮「Reply (问问Gemini)」自动出现
3. 点击按钮 → 选中内容以 "> 引用" 格式填入输入框
4. 直接输入你的追问，发送即可 ✨
```

### 📦 安装方法

#### 方式一：下载 Release zip（推荐）

1. 前往 [Releases](../../release) 页面，下载 `gemini-floating-reply.zip` 并**解压**
2. 打开 Chrome，地址栏输入 `chrome://extensions/`
3. 右上角开启「**开发者模式**」
4. 点击「**加载已解压的扩展程序**」，选择解压后的文件夹
5. 打开 [gemini.google.com](https://gemini.google.com) 即可使用

#### 方式二：克隆源码

```bash
git clone https://github.com/viz001653-pixel/gemini-floating-reply.git
```

然后按上方第 2 步起操作，选择克隆后的文件夹。

### 🗂 文件结构

```
gemini-floating-reply/
├── manifest.json       # 扩展配置（Manifest V3）
├── content.js          # 核心注入脚本：划选监听 + 浮动按钮 + 输入框填充
├── style.css           # 浮动按钮样式
├── popup.html          # 点击扩展图标时的弹窗说明
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

### 🛠 本地开发

```bash
git clone https://github.com/viz001653-pixel/gemini-floating-reply.git
cd gemini-floating-reply
# 在 Chrome 开发者模式加载文件夹，修改文件后点「刷新」即可生效
```

### 📋 TODO

- [ ] 支持键盘快捷键触发引用
- [ ] 支持 Firefox（WebExtension）
- [ ] 发布至 Chrome Web Store

---

## English

### ✨ What it does

Claude and ChatGPT both support quote-replying to messages. Gemini doesn't — until now.

**Gemini Floating Reply** fills that gap: **select any text** in a Gemini response, release the mouse, and a floating button appears. Click it to instantly insert the selected text as a `> quote` into the input box, so you can ask a follow-up without copy-pasting.

### 🎬 How to use

```
1. Select any text in a Gemini response
2. Release the mouse → a floating "Reply (问问Gemini)" button appears
3. Click the button → selected text is inserted as "> quote" into the input
4. Type your follow-up and send ✨
```

### 📦 Installation

#### Option 1: Download from Releases (recommended)

1. Go to the [Releases](../../release) page, download `gemini-floating-reply.zip`, and **extract** it
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (top-right toggle)
4. Click **"Load unpacked"** and select the extracted folder
5. Visit [gemini.google.com](https://gemini.google.com) and start using it

#### Option 2: Clone the repo

```bash
git clone https://github.com/viz001653-pixel/gemini-floating-reply.git
```

Then follow from step 2 above, selecting the cloned folder.

### 🗂 File structure

```
gemini-floating-reply/
├── manifest.json       # Extension config (Manifest V3)
├── content.js          # Core script: selection listener + floating button + input injection
├── style.css           # Floating button styles
├── popup.html          # Popup shown when clicking the extension icon
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

### 🛠 Local development

```bash
git clone https://github.com/viz001653-pixel/gemini-floating-reply.git
cd gemini-floating-reply
# Load the folder in Chrome developer mode; hit "Refresh" after editing files
```

### 📋 TODO

- [ ] Keyboard shortcut to trigger quote
- [ ] Firefox support (WebExtension)
- [ ] Publish to Chrome Web Store

---

## 📄 License

MIT © 2025
