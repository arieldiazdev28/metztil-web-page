const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const closeBtn = document.getElementById('close-btn');

// Abrir menú
menuToggle.addEventListener('click', () => {
  nav.classList.add('active');
});

// Cerrar menú al hacer clic en "X"
closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
});

// Cerrar menú al hacer clic en un link
document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});
