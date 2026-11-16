
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('[data-category]').forEach(card => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
    });
  });
});

document.querySelectorAll('[data-answer]').forEach(button => {
  button.addEventListener('click', () => {
    const correct = button.dataset.answer === 'true';
    document.getElementById('result').textContent =
      correct ? '答對了！做得很好 ♡' : '再試一次！加油 ♡';
  });
});
