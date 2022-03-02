function showAnswer() {
  var div = document.querySelector('.faq-answer');

  div.style.display === 'block'
    ? (div.style.display = 'none')
    : (div.style.display = 'block');

  arrow.classList.toggle('icon-arrow-up');
  question.classList.toggle('strong-question');

  console.log('Fui clicado!');
}

var arrow = document.querySelector('.icon-arrow');
var question = document.querySelector('span');

arrow.addEventListener('click', showAnswer);
