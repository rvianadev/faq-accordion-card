// let arrow1 = document.querySelector('.icon-arrow-1');
// let arrow2 = document.querySelector('.icon-arrow-2');
// let arrow3 = document.querySelector('.icon-arrow-3');
// let arrow4 = document.querySelector('.icon-arrow-4');
// let arrow5 = document.querySelector('.icon-arrow-5');

// arrow1.addEventListener('click', () => {
//   let answer = document.querySelector('.faq-answer-1');
//   let question = document.querySelector('.faq-question-1');

//   answer.style.display === 'block'
//     ? (answer.style.display = 'none')
//     : (answer.style.display = 'block');

//   arrow1.classList.toggle('icon-arrow-up');
//   question.classList.toggle('strong-question');
// });

// arrow2.addEventListener('click', () => {
//   let answer = document.querySelector('.faq-answer-2');
//   let question = document.querySelector('.faq-question-2');

//   answer.style.display === 'block'
//     ? (answer.style.display = 'none')
//     : (answer.style.display = 'block');

//   arrow2.classList.toggle('icon-arrow-up');
//   question.classList.toggle('strong-question');
// });

// arrow3.addEventListener('click', () => {
//   let answer = document.querySelector('.faq-answer-3');
//   let question = document.querySelector('.faq-question-3');

//   answer.style.display === 'block'
//     ? (answer.style.display = 'none')
//     : (answer.style.display = 'block');

//   arrow3.classList.toggle('icon-arrow-up');
//   question.classList.toggle('strong-question');
// });

// arrow4.addEventListener('click', () => {
//   let answer = document.querySelector('.faq-answer-4');
//   let question = document.querySelector('.faq-question-4');

//   answer.style.display === 'block'
//     ? (answer.style.display = 'none')
//     : (answer.style.display = 'block');

//   arrow4.classList.toggle('icon-arrow-up');
//   question.classList.toggle('strong-question');
// });

// arrow5.addEventListener('click', () => {
//   let answer = document.querySelector('.faq-answer-5');
//   let question = document.querySelector('.faq-question-5');

//   answer.style.display === 'block'
//     ? (answer.style.display = 'none')
//     : (answer.style.display = 'block');

//   arrow5.classList.toggle('icon-arrow-up');
//   question.classList.toggle('strong-question');
// });

const questions = document.querySelectorAll('.item');
console.log(questions);


questions.forEach(function (item) {
  item.addEventListener('click', function () {
    const answer = item.querySelector('.faq-answer');
    const question = item.querySelector('.faq-question');
    const arrow = item.querySelector('.icon-arrow');

    answer.classList.toggle('show');
    question.classList.toggle('active');
    arrow.classList.toggle('rotate');

    console.log(answer);
    console.log(question);
    console.log(arrow);

    console.log('Fui clicado');
  });
});
