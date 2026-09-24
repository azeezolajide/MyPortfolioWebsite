/**
 * Site-wide chrome: sticky nav + mobile menu, scroll-triggered reveal
 * animation, the scroll-linked playhead scrub bar, and the tools marquee.
 * Include this on every page, after css/styles.css and js/site-data.js.
 */
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildFooter();
  wireMobileMenu();
  wireScrollReveal();
  wirePlayhead();
  buildMarquee();
  markCurrentNavLink();
});

/**
 * Pages one level deep (work/project.html) need a '../' prefix on every
 * root-relative link built from SITE.nav. Static links in the HTML already
 * account for this by hand; only JS-generated links need the helper.
 */
function pathPrefix() {
  return location.pathname.indexOf('/work/') > -1 ? '../' : '';
}

/** Populates the desktop + mobile nav from SITE.nav so it's edited in one place. */
function buildNav() {
  const desktop = document.getElementById('nav-links');
  const mobile = document.getElementById('mobile-menu-links');
  if (!desktop && !mobile) return;

  const prefix = pathPrefix();

  if (desktop) {
    desktop.innerHTML =
      SITE.nav.map((item) => `<a href="${prefix}${item.href}">${item.label}</a>`).join('') +
      `<a href="${prefix}index.html#contact" class="btn btn-accent" style="padding:.5rem 1.25rem">Let’s work</a>`;
  }

  if (mobile) {
    mobile.innerHTML = SITE.nav
      .map(
        (item, i) =>
          `<a class="item" href="${prefix}${item.href}"><em>${String(i + 1).padStart(2, '0')}</em>${item.label}</a>`,
      )
      .join('');
  }

  const wordmark = document.querySelectorAll('[data-wordmark]');
  wordmark.forEach((el) => {
    el.innerHTML = `Vxmedia<span>_</span>edit`;
  });
}

function buildFooter() {
  const prefix = pathPrefix();

  const linksEl = document.getElementById('footer-links');
  if (linksEl) {
    linksEl.innerHTML = SITE.nav
      .map((item) => `<li><a href="${prefix}${item.href}">${item.label}</a></li>`)
      .join('');
  }

  const socialsEl = document.getElementById('footer-socials');
  if (socialsEl) {
    const socials = SITE.contact.socials.filter((s) => !isPlaceholder(s.href));
    socialsEl.innerHTML =
      socials.length > 0
        ? socials
            .map(
              (s) =>
                `<li><a href="${s.href}" target="_blank" rel="noreferrer noopener">${s.label}</a></li>`,
            )
            .join('')
        : `<p class="muted" style="font-size:.875rem;max-width:24ch">Add your links in <code class="cool">js/site-data.js</code>.</p>`;
  }

  document.querySelectorAll('[data-availability]').forEach((el) => {
    el.textContent = SITE.availability;
  });
}

function markCurrentNavLink() {
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#nav-links a').forEach((a) => {
    const target = a.getAttribute('href').split('#')[0] || 'index.html';
    if (target === here) a.setAttribute('aria-current', 'page');
  });
}

function wireMobileMenu() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobile-menu');
  if (!burger || !menu) return;

  const close = () => {
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  };

  burger.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') === 'true';
    if (open) {
      close();
    } else {
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Close menu');
      menu.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  });

  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) close();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

/** Fades/slides elements with .rv (or wipes .rv-wipe) into view once, on first intersection. */
function wireScrollReveal() {
  const targets = document.querySelectorAll('.rv, .rv-wipe');
  if (targets.length === 0) return;

  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach((el) => el.classList.add('in'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '-8% 0px' },
  );

  targets.forEach((el) => io.observe(el));
}

/** Header background on scroll, and the bottom scrub bar / running timecode. */
function wirePlayhead() {
  const header = document.querySelector('.site-header');
  const fill = document.getElementById('playhead-fill');
  const head = document.getElementById('playhead-head');
  const tc = document.getElementById('playhead-tc');

  let frame = 0;
  const update = () => {
    frame = 0;

    if (header) header.classList.toggle('scrolled', window.scrollY > 12);

    if (fill && head && tc) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      fill.style.width = progress * 100 + '%';
      head.style.left = progress * 100 + '%';

      const seconds = progress * 90; // a nominal 90s "sequence" mapped across the page
      const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
      const ss = String(Math.floor(seconds % 60)).padStart(2, '0');
      const ff = String(Math.floor((seconds % 1) * 24)).padStart(2, '0');
      tc.textContent = `00:${mm}:${ss}:${ff}`;
    }
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!frame) frame = requestAnimationFrame(update);
    },
    { passive: true },
  );
  window.addEventListener('resize', update);
  update();
}

function buildMarquee() {
  const track = document.getElementById('tools-track');
  if (!track) return;
  const row = [...SITE.tools, ...SITE.tools];
  track.innerHTML = row.map((t) => `<span>${t}</span>`).join('');
}
