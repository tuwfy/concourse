// Concourse — shared site scripts

(function () {
  'use strict';

  // ---------- Nav: scroll state + hide-on-scroll-down ----------
  const nav = document.querySelector('nav.top');
  if (nav) {
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      nav.classList.toggle('scrolled', y > 20);
      if (y > lastY && y > 200) nav.classList.add('hidden');
      else nav.classList.remove('hidden');
      lastY = y;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  // ---------- Toast ----------
  window.toast = function (msg, ms = 3200) {
    let el = document.querySelector('.toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    requestAnimationFrame(() => el.classList.add('show'));
    clearTimeout(el._timer);
    el._timer = setTimeout(() => el.classList.remove('show'), ms);
  };

  // ---------- Modal helpers ----------
  window.openModal = function (id) {
    const m = document.getElementById(id);
    if (m) {
      m.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };
  window.closeModal = function (id) {
    const m = document.getElementById(id);
    if (m) {
      m.classList.remove('open');
      document.body.style.overflow = '';
    }
  };
  document.querySelectorAll('.modal-backdrop').forEach(b => {
    b.addEventListener('click', e => {
      if (e.target === b) {
        b.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  });

  // ---------- Forms: generic intercept ----------
  document.querySelectorAll('form[data-intercept]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"], button.btn-solid, button.btn-primary');
      if (submitBtn) {
        const original = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="spinner"></span>&nbsp;Sending';
        submitBtn.disabled = true;
        setTimeout(() => {
          submitBtn.innerHTML = original;
          submitBtn.disabled = false;
          form.reset();
          const message = form.dataset.success || 'Submitted · We\'ll be in touch shortly';
          window.toast(message);
          if (form.dataset.closeModal) {
            window.closeModal(form.dataset.closeModal);
          }
        }, 900);
      }
    });
  });

  // ---------- Active nav link (auto-tag) ----------
  // If the page didn't manually mark a `.current` link, derive from URL.
  if (!document.querySelector('.nav-links a.current')) {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (href === path) a.classList.add('current');
      if (path === '' && href === 'index.html') a.classList.add('current');
    });
  }
})();
