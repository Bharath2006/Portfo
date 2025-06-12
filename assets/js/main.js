  document.addEventListener('DOMContentLoaded', () => {
    new Typed('.typed-text', {
      strings: ['Microsoft Power Platforms Developer', 'Flutter Expert', 'Database Developer', 'Freelancer'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true
    });

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon   = themeToggle?.querySelector('i');
    const setDark     = enabled => {
      document.body.classList.toggle('dark-mode', enabled);
      if (themeIcon)
        themeIcon.classList.replace(enabled ? 'fa-moon' : 'fa-sun', enabled ? 'fa-sun' : 'fa-moon');
      localStorage.setItem('darkMode', enabled ? 'enabled' : 'disabled');
    };
    if (localStorage.getItem('darkMode') === 'enabled') setDark(true);
    themeToggle?.addEventListener('click', () => setDark(!document.body.classList.contains('dark-mode')));

    const collapseEl = document.getElementById('moreProjects');
    const showMoreBtn = document.getElementById('showMoreBtn');
    const moreCards = document.querySelectorAll('.more-project');

    collapseEl?.addEventListener('shown.bs.collapse', () => {
      showMoreBtn.textContent = 'Show Less';
      moreCards.forEach(c => c.classList.add('animate__fadeInUp'));
      moreCards.forEach(c => c.classList.remove('d-none'));
      moreCards[0]?.scrollIntoView({ behavior: 'smooth' });
    });

    collapseEl?.addEventListener('hidden.bs.collapse', () => {
      showMoreBtn.textContent = 'Show More';
      moreCards.forEach(c => {
        c.classList.remove('animate__fadeInUp');
        c.classList.add('d-none');
      });
    });

    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('back-to-top');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const aosEls = document.querySelectorAll('.animate-on-scroll');

    const onScroll = () => {
      const y = window.scrollY;
      navbar?.classList.toggle('scrolled', y > 50);

      if (backToTop) {
        if (y > 300) {
          backToTop.style.display = 'block';
          backToTop.classList.replace('animate__fadeOut', 'animate__fadeIn');
        } else {
          backToTop.classList.replace('animate__fadeIn', 'animate__fadeOut');
          setTimeout(() => backToTop.style.display = 'none', 500);
        }
      }

      const offset = y + 100;
      sections.forEach(sec => {
        const top = sec.offsetTop, h = sec.offsetHeight, id = sec.id;
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}` && offset >= top && offset < top + h));
      });

      aosEls.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight / 1.2) {
          el.classList.add('animate__animated', 'animate__fadeInUp');
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
        }
      });
    });

    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));
  });
function openPdf() {
    const pdfUrl = 'assets/Resume/BharathResume.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'BharathS_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

