// Переключатель тёмной/светлой темы
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

function setTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-theme');
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

// При загрузке страницы тема сохраняется
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  setTheme(savedTheme === 'dark' ? 'dark' : 'light');
});

themeToggleBtn.addEventListener('click', () => {
  setTheme(body.classList.contains('dark-theme') ? 'light' : 'dark');
});
// Меню для мобильных устройств
const menuBtn = document.querySelector('.header__menu-btn');
const navList = document.querySelector('.site-nav__list');

menuBtn?.addEventListener('click', () => {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', !expanded);
  navList?.classList.toggle('site-nav__list--open');
});

// Плавный скролл по якорям
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Модальное окно с формой обратной связи (contacts.html)
const openFormBtn = document.getElementById('openContactForm');
const contactDialog = document.getElementById('contactDialog');
const closeFormBtn = document.getElementById('closeContactForm');
const contactForm = document.getElementById('contactForm');

if (openFormBtn && contactDialog && closeFormBtn && contactForm) {
  openFormBtn.addEventListener('click', () => contactDialog.showModal());

  closeFormBtn.addEventListener('click', () => contactDialog.close());

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    // Простая валидация
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    // Тут можно подключить реальную отправку
    alert('Спасибо за сообщение!');
    contactDialog.close();
    contactForm.reset();
  });
}
