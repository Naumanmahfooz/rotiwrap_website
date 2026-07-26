const header = document.querySelector('.site-header');
const progress = document.getElementById('scrollProgress');
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
const langSwitch = document.getElementById('langSwitch');
const translatables = document.querySelectorAll('[data-en][data-id]');
let currentLang = 'en';

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${(window.scrollY / height) * 100}%`;
});

menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

langSwitch.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'id' : 'en';
  translatables.forEach(el => el.textContent = el.dataset[currentLang]);
  langSwitch.textContent = currentLang === 'en' ? 'ID' : 'EN';
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'id';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.getElementById('year').textContent = new Date().getFullYear();
