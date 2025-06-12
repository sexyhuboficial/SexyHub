// Seleciona todos os botões de filtro e os cards das modelos
const filterButtons = document.querySelectorAll('.filter-btn');
const modelCards = document.querySelectorAll('.model-card');

// Adiciona evento de clique em cada botão de filtro
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove a classe 'active' de todos os botões
    filterButtons.forEach(b => b.classList.remove('active'));
    // Adiciona 'active' no botão clicado
    btn.classList.add('active');

    const category = btn.getAttribute('data-category');

    // Mostra ou esconde cards com base na categoria selecionada
    modelCards.forEach(card => {
      const categories = card.getAttribute('data-category').split(' ');
      card.style.display = (category === 'all' || categories.includes(category)) ? 'flex' : 'none';
    });
  });
});
