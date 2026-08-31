const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

function setMenu(open) {
  menuToggle.setAttribute('aria-expanded', String(open));
  mainNav.classList.toggle('open', open);
  header.classList.toggle('menu-open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 20);
}

menuToggle.addEventListener('click', () => {
  setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenu(false);
    menuToggle.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) setMenu(false);
});

window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

document.getElementById('year').textContent = new Date().getFullYear();
