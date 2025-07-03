/*
  -= script.js =-
*/

// Toggle mobile menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    if(nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    }
  });
});

document.addEventListener('click', (e) => {
  if(nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
  }
});

document.addEventListener('keydown', (e) => {
  if(e.key === "Escape" && nav.classList.contains('open')) {
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', false);
    toggle.focus();
  }
});


// Exemplo de dados do carrossel
const modelos = [
  { img: 'https://i.postimg.cc/2jrxHwCS/modelo1.jpg', nome: 'Bella' },
  { img: 'https://i.postimg.cc/90Vw4V5d/modelo2.jpg', nome: 'Luna' },
  { img: 'https://i.postimg.cc/3xH6LZRX/modelo3.jpg', nome: 'Kira' },
  { img: 'https://i.postimg.cc/7Ln8Ym3W/modelo4.jpg', nome: 'Sofia' }
];

const inner = document.querySelector('.carrossel-inner');
// Clona itens para loop infinito
modelos.concat(modelos).forEach(m => {
  const div = document.createElement('div');
  div.classList.add('modelo-item');
  div.innerHTML = `<img src="${m.img}" alt="${m.nome}"><p>${m.nome}</p>`;
  inner.appendChild(div);
});

// FAQ toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');

    // Fecha outros itens abertos (opcional)
    document.querySelectorAll('.faq-item.active').forEach(activeItem => {
      if(activeItem !== item) {
        activeItem.classList.remove('active');
        activeItem.querySelector('.faq-question').setAttribute('aria-expanded', false);
      }
    });

    // Toggle do item clicado
    const expanded = item.classList.toggle('active');
    button.setAttribute('aria-expanded', expanded);
  });
});
