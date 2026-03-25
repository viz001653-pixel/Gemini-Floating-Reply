/* ── Gemini Floating Repy (Content Script) ── */

(function() {
  'use strict';

  const EXT_ID = 'gqr-floating-btn-container';
  const BTN_CLASS = 'gqr-floating-reply-btn';
  const ICON_QUOTE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H3c-1.25 0-2 .75-2 2v8c0 1.25.75 2 2 2h3s1 4-2 6zM14 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-5c-1.25 0-2 .75-2 2v8c0 1.25.75 2 2 2h3s1 4-2 6z"></path></svg>';

  let floatingBtn = null; 

  /* ── 核心功能：插入文本到输入框 ── */
  async function fillInput(rawText) {
    if (!rawText) return;
    const cleanText = rawText.trim();
    if (!cleanText) return;

    const inputBox = 
      document.querySelector('rich-textarea [contenteditable="true"]') || 
      document.querySelector('div[contenteditable="true"][role="textbox"]') || 
      document.querySelector('.ql-editor[contenteditable="true"]') ||
      document.querySelector('[contenteditable="true"]');

    if (!inputBox) {
      console.error("找不到 Gemini 输入框");
      return;
    }

    inputBox.focus();
    await new Promise(r => setTimeout(r, 100));

    let previewText = cleanText;
    if (previewText.length > 150) {
      previewText = previewText.substring(0, 150) + '...';
    }

    const quotedText = previewText.split('\n').map(line => `> ${line}`).join('\n');
    const finalText = `${quotedText}\n\n`; 

    const success = document.execCommand('insertText', false, finalText);

    if (!success) {
      console.warn("原生插入失败，尝试直接触发事件");

      inputBox.innerText = finalText + inputBox.innerText;
      inputBox.dispatchEvent(new Event('input', { bubbles: true, cancelable: true }));
    }
  }

  /* ── 初始化：在 Body 创建唯一的浮动按钮结构 ── */
  function createFloatingBtnStructure() {
    if (document.getElementById(EXT_ID)) return;

    const container = document.createElement('div');
    container.id = EXT_ID;
    container.style.display = 'none'; 

    const btn = document.createElement('button');
    btn.className = BTN_CLASS;
    btn.innerHTML = `${ICON_QUOTE}<span>Reply (问问Gemini)</span>`;
    
    btn.addEventListener('mousedown', (e) => {
      e.preventDefault(); 
      e.stopPropagation();
    });

    btn.addEventListener('click', () => {
      const selectedText = window.getSelection().toString();
      fillInput(selectedText);
      hideButton();
    });

    container.appendChild(btn);
    document.body.appendChild(container);
    floatingBtn = container;
  }

  /* ── 计算位置并显示按钮 ── */
  function handleTextSelection() {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    const anchorNode = selection.anchorNode;
    if (
      !selectedText || 
      (anchorNode && anchorNode.nodeType === Node.ELEMENT_NODE && anchorNode.closest('rich-textarea'))
    ) {
      hideButton();
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();

    if (!floatingBtn) return;

    floatingBtn.style.display = 'block';

    const btnWidth = floatingBtn.offsetWidth;
    const btnHeight = floatingBtn.offsetHeight;
    
    let left = rect.left + window.scrollX + (rect.width / 2) - (btnWidth / 2);
    let top = rect.bottom + window.scrollY + 8; 

    if (left < 10) left = 10;
    if (left + btnWidth > window.innerWidth - 10) {
        left = window.innerWidth - btnWidth - 10;
    }

    floatingBtn.style.left = `${left}px`;
    floatingBtn.style.top = `${top}px`;
  }

  /* ── 隐藏按钮 ── */
  function hideButton() {
    if (floatingBtn) {
      floatingBtn.style.display = 'none';
    }
  }

  /* ── 启动与事件绑定 ── */
  function init() {
    createFloatingBtnStructure();

    document.addEventListener('mouseup', () => {
      setTimeout(handleTextSelection, 10);
    });

    document.addEventListener('mousedown', (e) => {
      if (!e.target.closest(`.${BTN_CLASS}`)) {
        hideButton();
      }
    });

    window.addEventListener('resize', hideButton);
    window.addEventListener('scroll', hideButton, { passive: true });
  }

  if (document.readyState === 'complete') {
    init();
  } else {
    window.addEventListener('load', init);
  }

})();