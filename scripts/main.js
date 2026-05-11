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

  // Generic info modal generator
  window.openInfoModal = function (type) {
    let m = document.getElementById('info-modal');
    if (!m) {
      m = document.createElement('div');
      m.id = 'info-modal';
      m.className = 'modal-backdrop';
      m.innerHTML = `
        <div class="modal">
          <button class="modal-close" aria-label="Close" onclick="window.closeModal('info-modal')">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M1 1l12 12m0-12L1 13"/>
            </svg>
          </button>
          <div class="modal-eyebrow" id="im-eyebrow">Information</div>
          <h3 id="im-title">Title</h3>
          <p class="modal-sub" id="im-desc">Description goes here.</p>
          <div style="text-align: right;">
            <button class="btn btn-solid" onclick="window.closeModal('info-modal')">Close</button>
          </div>
        </div>
      `;
      document.body.appendChild(m);
      m.addEventListener('click', e => {
        if (e.target === m) {
          m.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    }

    const contentMap = {
      'press': { eyebrow: 'Media', title: 'Press & Media', desc: 'For press inquiries, contact media@concourse.co. Download our brand kit and recent press releases.' },
      'careers': { eyebrow: 'Careers', title: 'Join Concourse', desc: 'We are currently hiring for engineering and sales roles in our New York and London offices. Send your resume to careers@concourse.co.' },
      'brief': { eyebrow: 'Tools', title: 'Brief Generator', desc: 'Our AI-powered brief generator helps you structure your RFP. This feature is currently in private beta for registered planners.' },
      'api': { eyebrow: 'Developers', title: 'API Documentation', desc: 'Integrate Concourse directly with your PMS or CRM. API access requires an enterprise agreement. Contact your platform engineer for credentials.' },
      'methodology': { eyebrow: 'Data', title: 'Methodology', desc: 'Our insights are derived from first-party closed-lost and benchmarking data across our network of 2,840+ properties, anonymized and aggregated weekly.' },
      'subscribe': { eyebrow: 'Newsletter', title: 'Subscribe to The Brief', desc: 'Get weekly insights on group ADR and lead volume directly in your inbox. Enter your email to join 12,000+ hospitality professionals.' },
      'session': { eyebrow: 'Seminars', title: 'Session Brief', desc: 'Download the full curriculum, speaker bios, and prep materials for this seminar.' },
      'export': { eyebrow: 'Export', title: 'Export PDF', desc: 'Your export is being generated. It will automatically download once it is ready.' },
      'sync': { eyebrow: 'Sync', title: 'Sync PMS', desc: 'Initiating manual sync with your Property Management System. This process may take a few minutes.' },
      'brief_open': { eyebrow: 'Insights', title: 'The Brief', desc: 'Opening the full report. Please wait while we load the latest market data.' }
    };

    const data = contentMap[type] || { eyebrow: 'Information', title: 'More Info', desc: 'Information for this section will be available soon.' };
    document.getElementById('im-eyebrow').textContent = data.eyebrow;
    document.getElementById('im-title').textContent = data.title;
    document.getElementById('im-desc').textContent = data.desc;

    m.classList.add('open');
    document.body.style.overflow = 'hidden';
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
