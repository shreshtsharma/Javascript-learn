const form = document.querySelector('form');
const num = Math.floor(Math.random() * 100 + 1);
console.log(num);
const totalAttempt = parseInt(document.querySelector('.lastResult').innerHTML);
let rem = document.querySelector('.lastResult');
let attempt = parseInt(rem.innerText);
let prev = document.querySelector('.guesses');
let near = document.querySelector('.lowOrHi');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let input = document.querySelector('.guessField').value;
  if (attempt <= 0) {
    near.innerHTML = `You lost😥! Number was ${num}`;
  } else if (input == '' || input < 1 || input > 100 || isNaN(input)) {
    near.innerHTML = 'Enter a Valid number between 1 and 100';
  } else {
    if (input > num) {
      near.innerHTML = 'Try a number Lesser than this';
    } else if (input < num) {
      near.innerHTML = 'Try a number Greater than this';
    } else {
      near.innerHTML = 'congratulations You Guessed The Number🎉🎊';
    }
    prev.appendChild(document.createTextNode(` ${input}`));
    console.log(prev);
    attempt--;
    rem.innerHTML = `${attempt}`;
  }
});
const restart = document.querySelector('.Restart');
restart.addEventListener('click', function (e) {
  location.reload();
});
