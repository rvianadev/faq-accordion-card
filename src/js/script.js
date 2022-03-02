var arrow = document.querySelector('.icon-arrow-rotated');

arrow.addEventListener('click', function () {
  var div = document.querySelector('.faq-answer');

  if (div.style.display === 'none') {
    div.style.display = 'block';
  } else {
    div.style.display = 'none';
  }
});
