const questions = document.querySelectorAll('.item');

questions.forEach(function (item) {
  item.addEventListener('click', function () {
    const answer = item.querySelector('.faq-answer');
    const question = item.querySelector('.faq-question');
    const arrow = item.querySelector('.icon-arrow');

    answer.classList.toggle('show');
    question.classList.toggle('active');
    arrow.classList.toggle('rotate');
  });
});
