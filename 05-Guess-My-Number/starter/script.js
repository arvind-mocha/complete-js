'use strict';
var random = Math.round(Math.random() * 21);
var score = 20;
var highscore = 0;

$('.check').on('click', function () {
  var input = document.querySelector('.guess').value;

  if (!input) {
    document.querySelector('.message').innerText = 'Nothing as typed';
  } else {
    if (input == random) {
      document.querySelector('.number').innerText = random;
      if (score > highscore) highscore = score;
      document.querySelector('.highscore').innerText = highscore;
      document.querySelector('.message').innerText = 'Correct Answer';
      document.querySelector('body').style.backgroundColor = '#60b347';
    } else if (input > random) {
      document.querySelector('.message').innerText = 'Higher than expected';
      score--;
      document.querySelector('.score').innerText = score;
    } else if (input < random) {
      document.querySelector('.message').innerText = 'Lower than expected';
      score--;
      document.querySelector('.score').innerText = score;
    }
  }
});

$('.again').on('click', () => {
  score = 20;
  document.querySelector('.score').innerText = 20;
  random = Math.round(Math.random() * 21);
  document.querySelector('body').style.backgroundColor = '#111';
  document.querySelector('.number').innerText = '?';
  document.querySelector('.message').innerText = 'Start guessing...';
  document.querySelector('.guess').value = null;
});
