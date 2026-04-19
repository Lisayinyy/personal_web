/* ============================================================
   Lisa Yin — Personal Site Scripts
   ============================================================ */

/* ── Nav scroll state ─────────────────────────────────────── */
(function () {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  function updateNav() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
})();


/* ── Scroll reveal (reveal-section) ──────────────────────── */
(function () {
  const targets = document.querySelectorAll('.reveal-section');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // fire once
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px 0px 0px' }
  );

  targets.forEach((el) => {
    // If already in viewport (e.g., above fold), reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('in-view');
    } else {
      observer.observe(el);
    }
  });
})();


/* ── Journey tabs ─────────────────────────────────────────── */
(function () {
  const tabs   = document.querySelectorAll('.jtab');
  const panels = document.querySelectorAll('.journey-panel');
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.panel;

      // Update tabs
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      // Update panels
      panels.forEach((p) => {
        p.classList.toggle('active', p.id === target);
      });
    });
  });
})();


/* ── Project filter ───────────────────────────────────────── */
(function () {
  const btns  = document.querySelectorAll('.pfbtn');
  const cards = document.querySelectorAll('.pcard');
  if (!btns.length) return;

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;

      // Active state
      btns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      // Show / hide cards
      cards.forEach((card) => {
        const match = cat === 'all' || card.dataset.cat === cat;
        card.classList.toggle('hidden', !match);
      });
    });
  });
})();


/* ── Smooth scroll for in-page anchors ───────────────────── */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();


/* ── Stagger timeline items on panel reveal ──────────────── */
(function () {
  function staggerPanel(panelId) {
    const panel = document.getElementById(panelId);
    if (!panel) return;
    const items = panel.querySelectorAll('.tl-item');
    items.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(16px)';
      item.style.transition = `opacity 400ms cubic-bezier(0.25, 1, 0.5, 1) ${i * 60}ms,
                               transform 400ms cubic-bezier(0.25, 1, 0.5, 1) ${i * 60}ms`;
      // Trigger
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          item.style.opacity = '1';
          item.style.transform = 'none';
        });
      });
    });
  }

  // Stagger on tab click
  document.querySelectorAll('.jtab').forEach((tab) => {
    tab.addEventListener('click', () => {
      staggerPanel(tab.dataset.panel);
    });
  });

  // Stagger initial panel when journey section enters view
  const journeySection = document.getElementById('journey');
  if (journeySection) {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          staggerPanel('edu'); // default active panel
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(journeySection);
  }
})();

/* ── Horizontal Timeline Interaction ──────────────────────── */
(function () {
  const nodes = document.querySelectorAll('.htl-node');
  const details = document.querySelectorAll('.htl-detail');

  if (!nodes.length) return;

  nodes.forEach((node) => {
    node.addEventListener('click', () => {
      const targetId = node.getAttribute('data-detail');

      // Update active node
      nodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      // Show corresponding detail card
      details.forEach(d => d.classList.remove('active'));
      const target = document.getElementById(targetId);
      if (target) target.classList.add('active');
    });
  });

  // Set first node as active by default
  if (nodes[0]) nodes[0].classList.add('active');
})();

/* ── Hero photo flip card: tap-to-flip on touch devices ──── */
(function () {
  const card = document.querySelector('.hero-photo-col');
  if (!card) return;
  card.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
})();
