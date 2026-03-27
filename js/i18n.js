/* ============================================================
   i18n.js — Lisa Yin Personal Site
   Bilingual: English (default) / 中文
   ============================================================ */

const I18N = {
  en: {
    // ── NAV ──────────────────────────────────────────────────
    'nav.journey':       'AI Journey',
    'nav.vibe-coding':   'Vibe Coding',
    'nav.projects':      'Projects',
    'nav.resume':        'Resume',
    'lang.toggle':       '中文',

    // ── HERO ─────────────────────────────────────────────────
    'hero.headline':     'I ship AI products<br><em>&amp; vibe code</em><br>my own tools.',
    'hero.tagline':      'AI PM who actually builds — from product strategy to vibe coding prototypes with LLMs. Data-driven, design-minded, code-capable.',
    'hero.cta':          'My Story <i class="fa-solid fa-arrow-down"></i>',

    // ── JOURNEY ──────────────────────────────────────────────
    'journey.section-title': 'My Journey with AI',
    'journey.intro':         'What I studied, built, and broke. Walk this timeline — you\'ll get the full picture.',

    'journey.phase1':    'Phase 1<br><span>AI Foundations</span>',
    'journey.phase2':    'Phase 2<br><span>Vibe Coding</span>',
    'journey.phase3':    'Phase 3<br><span>AI PM</span>',

    'journey.d1.date':   '2020 – 2024',
    'journey.d1.title':  'University of Michigan · Data Science',
    'journey.d1.desc':   'Studied ML, Deep Learning, Computer Vision, and SQL. A UX Design minor taught me to think about AI through a user lens.',

    'journey.d2.date':   'Summer 2022',
    'journey.d2.title':  'AI4ALL@BU · AI Research',
    'journey.d2.desc':   'First hands-on AI research project. Realized AI shouldn\'t live only in papers — it needs to become products.',

    'journey.d3.date':   '2024',
    'journey.d3.title':  'First time coding with ChatGPT',
    'journey.d3.desc':   'Used GPT to write code for my senior capstone. Productivity doubled overnight. Fell headfirst into AI-assisted coding.',

    'journey.d4.date':   '2025.2',
    'journey.d4.title':  '🔥 Went All-in on Vibe Coding',
    'journey.d4.desc':   'Karpathy coined "vibe coding." I embraced it with Claude Code + Cursor. Non-engineers can now ship products — and I do.',

    'journey.d5.date':   '2025.4 – 2025.9',
    'journey.d5.title':  'AI Investor · Zhenge → Qiji',
    'journey.d5.desc':   'Reviewed 100+ AI startups. Learned the investment logic behind LLM infra, multimodal, and vertical applications. Gained a sharp sense of what makes a great AI product.',

    'journey.d6.date':   '2025.9',
    'journey.d6.title':  'Joined MiniMax · AI PM',
    'journey.d6.desc':   'Moved from investing to building. Started vibe coding internal tools — Xiaohongshu sentiment monitoring, growth automation. AI PMs don\'t just write PRDs; they build.',

    'journey.d7.date':   'Now · 2026',
    'journey.d7.title':  'Shipping & Building 🚀',
    'journey.d7.desc':   'Vibe coding new tools every week. Documenting AI growth methodology. Goal: help more non-technical people build with AI.',

    // ── VIBE CODING ──────────────────────────────────────────
    'vibe.intro':        'I don\'t just write PRDs — I build prototypes myself using AI-assisted coding. Here\'s what happens when a PM picks up the terminal.',

    'vibe.step1.title':  'Idea → PRD',
    'vibe.step1.desc':   'Start with a user problem. Write a quick PRD with AI to clarify scope, constraints, and success metrics.',
    'vibe.step2.title':  'Prompt → Prototype',
    'vibe.step2.desc':   'Feed the PRD to Claude/MiniMax. Iterate with natural language — describe what you want, review the code, refine.',
    'vibe.step3.title':  'Ship → Measure',
    'vibe.step3.desc':   'Deploy the MVP. Track real user behavior. Use data to decide what stays, what goes, what evolves.',

    'vibe.products-title': 'Products I Built',

    'vibe.card1.tag':    '🔍 Monitoring Tool',
    'vibe.card1.title':  'Xiaohongshu Sentiment Monitor',
    'vibe.card1.desc':   'Auto-search → page scraping → intelligent filtering → comment script generation → Feishu spreadsheet sync. A 3-layer pipeline that gets more human the longer it runs.',

    'vibe.card2.tag':    '🧠 Browser Extension',
    'vibe.card2.title':  'Web Summary Assistant',
    'vibe.card2.desc':   'AI-powered web summariser. One click to distil long articles — saves hours of reading. Chrome Extension + LLM API integration.',

    'vibe.card3.tag':    '🎨 Personal Site',
    'vibe.card3.title':  'This Website',
    'vibe.card3.desc':   'The site you\'re reading right now is vibe coded. Claude + Impeccable design system, zero to deploy — fully AI-assisted.',

    // ── PROJECTS ─────────────────────────────────────────────
    'projects.filter.all':     'All',
    'projects.filter.coding':  'Engineering',
    'projects.filter.design':  'Design',

    'projects.p1.desc':  'Responsive personal site with interactive animations, built in pure HTML/CSS/JS.',
    'projects.p2.desc':  'AI-powered browser extension that summarises pages for faster reading and research.',
    'projects.p3.desc':  'Full mobile UX for a food-waste reduction platform — research, wireframes, interactive prototype.',
    'projects.p4.desc':  'Accessibility audit and redesign for an e-commerce art supply site, making it usable for everyone.',
    'projects.p5.desc':  'Real-time vehicle detection using YOLO for collision prevention in autonomous driving.',
    'projects.p6.desc':  'SVM-based text sentiment classifier with high accuracy across multiple emotional categories.',
    'projects.p7.desc':  'Convolutional Neural Networks for image classification with advanced training techniques.',
    'projects.p8.desc':  'K-Means with K-Means++ initialization, benchmarked against spectral clustering methods.',


    // ── TOOLKIT ──────────────────────────────────────────────
    'toolkit.claude.note':    '· Code generation',
    'toolkit.cursor.note':    '· Code editor',
    'toolkit.openclaw.note':  '· AI assistant',
    'toolkit.impeccable.note':'· Design',
    'toolkit.github.note':    '· Deploy',

    // ── RESOURCES ────────────────────────────────────────────
    'res.title':        '📚 Recommended Resources',
    'res.1.title':      'Karpathy: Vibe Coding',
    'res.1.note':       'The origin of it all. Why non-engineers can now build products.',
    'res.2.title':      'Cursor Quick Start',
    'res.2.note':       'Follow along and you\'ll be up and running with this AI editor.',
    'res.3.title':      'My First Vibe Coding Project',
    'res.3.note':       'A non-technical PM\'s journey from zero to shipped product.',
    'res.4.title':      'Xiaohongshu Sentiment Monitor',
    'res.4.note':       'Full project I built, open-sourced from PRD to production.',
    'res.5.title':      'Prompt Engineering for Code',
    'res.5.note':       'Practical tips to get better code output from AI.',
    'res.6.title':      'Web Summary Extension',
    'res.6.note':       'Chrome extension + LLM API integration in practice.',

    // ── RESUME ───────────────────────────────────────────────
    'resume.title':      'Full Resume',
    'resume.desc':       'Want the complete picture? Download my CV for detailed work experience, education, and skills.',
    'resume.download':   '<i class="fa-solid fa-file-pdf"></i> Download CV',
    'resume.linkedin':   '<i class="fa-brands fa-linkedin"></i> LinkedIn',

    // ── FOOTER ───────────────────────────────────────────────
    'footer.loc':        'Los Angeles, CA',
    'footer.copy':       '© 2025 Lisa Yin',
  },

  zh: {
    // ── NAV ──────────────────────────────────────────────────
    'nav.journey':       'AI 旅程',
    'nav.vibe-coding':   'Vibe Coding',
    'nav.projects':      '项目',
    'nav.resume':        '简历',
    'lang.toggle':       'EN',

    // ── HERO ─────────────────────────────────────────────────
    'hero.headline':     '我做 AI 产品，<br><em>也自己写代码</em><br>造工具。',
    'hero.tagline':      '真正会 build 的 AI PM — 从产品策略到用 LLM vibe code 原型。数据驱动，设计思维，代码能力。',
    'hero.cta':          '我的故事 <i class="fa-solid fa-arrow-down"></i>',

    // ── JOURNEY ──────────────────────────────────────────────
    'journey.section-title': '我的 AI 旅程',
    'journey.intro':         '我学的，做的，踩的坑。跟着这条时间线走一遍，你也能入门 AI。',

    'journey.phase1':    '第一阶段<br><span>AI 基础</span>',
    'journey.phase2':    '第二阶段<br><span>Vibe Coding</span>',
    'journey.phase3':    '第三阶段<br><span>AI PM</span>',

    'journey.d1.date':   '2020 – 2024',
    'journey.d1.title':  '密歇根大学 · 数据科学',
    'journey.d1.desc':   '学了 ML、Deep Learning、Computer Vision、SQL。UX Design 辅修让我开始从用户角度思考 AI 产品。',

    'journey.d2.date':   '2022 夏',
    'journey.d2.title':  'AI4ALL@BU · AI 研究',
    'journey.d2.desc':   '第一次做 AI 研究项目。意识到 AI 不应该只待在论文里，开始想怎么做成产品。',

    'journey.d3.date':   '2024',
    'journey.d3.title':  '第一次用 ChatGPT 写代码',
    'journey.d3.desc':   '做毕设的时候第一次用 GPT 辅助写代码，效率直接翻倍。从此入坑 AI-assisted coding。',

    'journey.d4.date':   '2025.2',
    'journey.d4.title':  '🔥 开始 Vibe Coding',
    'journey.d4.desc':   'Karpathy 提出 vibe coding 概念。开始用 Claude Code + Cursor 全面 AI 辅助编程，非开发背景也能做产品了。',

    'journey.d5.date':   '2025.4 – 2025.9',
    'journey.d5.title':  'AI 投资人 · 真格 → 奇绩',
    'journey.d5.desc':   '看了 100+ AI 创业项目，搞懂了 LLM 基建、多模态、垂直应用的投资逻辑。知道什么是好的 AI 产品。',

    'journey.d6.date':   '2025.9',
    'journey.d6.title':  '加入 MiniMax · AI PM',
    'journey.d6.desc':   '从投资转产品。开始用 vibe coding 做内部工具——小红书舆情监控、增长自动化。AI PM 不只写 PRD，还自己 build。',

    'journey.d7.date':   'Now · 2026',
    'journey.d7.title':  'Shipping & Building 🚀',
    'journey.d7.desc':   '每周 vibe code 新工具，把 AI 产品增长方法论写成笔记分享。目标：让更多非技术背景的人也能用 AI 做产品。',

    // ── VIBE CODING ──────────────────────────────────────────
    'vibe.intro':        '我不只是写 PRD — 我自己用 AI 辅助编程来做原型。当一个 PM 开始敲终端，会发生什么？',

    'vibe.step1.title':  'Idea → PRD',
    'vibe.step1.desc':   '从用户问题出发，用 AI 快速写 PRD，明确范围、约束条件和成功指标。',
    'vibe.step2.title':  'Prompt → Prototype',
    'vibe.step2.desc':   '把 PRD 喂给 Claude/MiniMax，用自然语言迭代——描述你想要的，审查代码，继续打磨。',
    'vibe.step3.title':  'Ship → Measure',
    'vibe.step3.desc':   '上线 MVP，追踪真实用户行为，用数据决定什么留、什么改、什么砍掉。',

    'vibe.products-title': '我做的产品',

    'vibe.card1.tag':    '🔍 监控工具',
    'vibe.card1.title':  '小红书舆论监控',
    'vibe.card1.desc':   '自动搜索 → 详情页抓取 → 智能筛选 → 生成评论话术 → 写入飞书表格。3 层去 AI 味流水线，越用越像真人。',

    'vibe.card2.tag':    '🧠 浏览器插件',
    'vibe.card2.title':  'Web Summary Assistant',
    'vibe.card2.desc':   'AI 驱动的网页摘要工具，一键总结长文，提升阅读效率。Chrome Extension + LLM API 集成。',

    'vibe.card3.tag':    '🎨 个人网站',
    'vibe.card3.title':  'This Website',
    'vibe.card3.desc':   '你正在看的这个网站就是 vibe coded 的。用 Claude + Impeccable 设计规范，从零到部署全程 AI 辅助。',

    // ── PROJECTS ─────────────────────────────────────────────
    'projects.filter.all':     '全部',
    'projects.filter.coding':  '工程',
    'projects.filter.design':  '设计',

    'projects.p1.desc':  '纯 HTML/CSS/JS 构建的响应式个人站，带交互动效。',
    'projects.p2.desc':  'AI 驱动的浏览器扩展，一键摘要网页，加速阅读与调研。',
    'projects.p3.desc':  '食物浪费减少平台的完整移动端 UX——用研、线框图、可交互原型。',
    'projects.p4.desc':  '对艺术用品电商网站进行无障碍审查与改版，让每个人都能顺畅使用。',
    'projects.p5.desc':  '基于 YOLO 的实时车辆检测，用于自动驾驶中的碰撞预警。',
    'projects.p6.desc':  '基于 SVM 的文本情感分类器，在多类情绪标签上准确率优异。',
    'projects.p7.desc':  '卷积神经网络图像分类系统，结合高级训练技巧提升性能。',
    'projects.p8.desc':  'K-Means++ 初始化的聚类算法，与谱聚类方法对比基准测试。',

    
    // ── TOOLKIT ──────────────────────────────────────────────
    'toolkit.claude.note':    '· 写代码',
    'toolkit.cursor.note':    '· 编辑器',
    'toolkit.openclaw.note':  '· AI 助手',
    'toolkit.impeccable.note':'· 设计',
    'toolkit.github.note':    '· 部署',

    // ── RESOURCES ────────────────────────────────────────────
    'res.title':        '📚 推荐资源',
    'res.1.title':      'Karpathy: Vibe Coding',
    'res.1.note':       '一切的起源。非程序员也能 build 的理论基础。',
    'res.2.title':      'Cursor 30分钟入门',
    'res.2.note':       '跟着做就能上手的 AI 编辑器教程。',
    'res.3.title':      'PM 的第一个 vibe coding 项目',
    'res.3.note':       '非技术背景从 0 到 1 的踩坑记录。',
    'res.4.title':      '小红书舆情监控系统',
    'res.4.note':       '我做的完整项目，PRD 到上线全开源。',
    'res.5.title':      'Prompt Engineering for Code',
    'res.5.note':       '让 AI 写出更好代码的实用技巧。',
    'res.6.title':      'Web Summary 浏览器插件',
    'res.6.note':       'Chrome 插件 + LLM API 集成实战。',

    // ── RESUME ───────────────────────────────────────────────
    'resume.title':      '完整简历',
    'resume.desc':       '想了解更多？下载我的 CV，查看详细的工作经历、教育背景和技能。',
    'resume.download':   '<i class="fa-solid fa-file-pdf"></i> 下载 CV',
    'resume.linkedin':   '<i class="fa-brands fa-linkedin"></i> LinkedIn',

    // ── FOOTER ───────────────────────────────────────────────
    'footer.loc':        '洛杉矶，加利福尼亚州',
    'footer.copy':       '© 2025 Lisa Yin',
  }
};

/* ── Core i18n engine ────────────────────────────────────── */
(function () {
  const STORAGE_KEY = 'lisa-lang';
  const DEFAULT_LANG = 'en';

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function applyLang(lang) {
    const dict = I18N[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] === undefined) return;

      // Elements with inner HTML (contain tags)
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = dict[key];
      } else {
        // Plain text — but if the value contains HTML tags, use innerHTML
        if (/<[a-z][\s\S]*>/i.test(dict[key])) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Update <html lang="...">
    document.documentElement.lang = lang;

    // Update slash toggle appearance
    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.querySelectorAll('.lang-option').forEach(opt => {
        if (opt.dataset.lang === lang) {
          opt.classList.add('lang-active');
          opt.classList.remove('lang-inactive');
        } else {
          opt.classList.remove('lang-active');
          opt.classList.add('lang-inactive');
        }
      });
    }
  }

  function toggleLang() {
    const current = getLang();
    const next = current === 'en' ? 'zh' : 'en';
    setLang(next);
    applyLang(next);
  }

  // ── Init: apply language before paint (avoid flash) ──────
  // Using a synchronous call so text is correct on first render
  const initLang = getLang();
  // We defer to DOMContentLoaded to ensure elements exist
  function init() {
    applyLang(initLang);

    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const targetLang = opt.dataset.lang;
          if (targetLang !== getLang()) {
            setLang(targetLang);
            applyLang(targetLang);
          }
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose globally for debugging
  window.i18n = { applyLang, toggleLang, getLang, setLang };
})();
