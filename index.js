function toggleButton() {
  const cards = document.querySelectorAll('[data-js=card]');
  const buttons = cards.querySelectorAll('[data-js=button]');
  cards.forEach(card => {
    const button = card.querySelector('[data-js="button"]');
    const link = card.querySelector('[data-js="link"]');
    const arrow = card.querySelector('[data-js="arrow"]');
    buttons.addEventListener('click', () => {
      link.classList.toggle('hidden');
      arrow.classList.toggle('rotate');
      button.classList.toggle('');
    });
  });
}
toggleButton();
