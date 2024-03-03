# projects Related to DOM

## project Link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-jpgcqt?file=index.html)

# solution Code

## project 1 [Color Scheme Changer]

```Javascript
const button = document.querySelectorAll('.button');
console.log(button);
const body = document.querySelector('body');
button.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    body.style.backgroundColor = e.target.id;
  });
});

```

## project 2 [BMI calculator]

```Javascript
const form = document.querySelector('form');
// const height = document.querySelector('#height').value;
// console.log(height);
// this will give you a empty value

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseFloat(document.querySelector('#height').value);
  console.log(height);
  const weight = parseFloat(document.querySelector('#weight').value);
  console.log(weight);
  const result = document.querySelector('#results');
  if (height < 0 || height == '' || isNaN(height)) {
    result.innerHTML = 'Enter a valid Height';
  } else if (weight < 0 || weight == '' || isNaN(weight)) {
    result.innerHTML = 'Enter a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>BMI is : ${bmi}</span>`;
    const ans = document.createElement('span');
    if (bmi <= 18.6) {
      ans.appendChild(document.createTextNode(' You are under weight'));
      result.appendChild(ans);
    } else if (bmi > 18.6 && bmi < 24.9) {
      ans.appendChild(document.createTextNode(' You are normal'));
      result.appendChild(ans);
    } else {
      ans.appendChild(document.createTextNode(' You are over weight'));
      result.appendChild(ans);
    }

    console.log(result);
    console.log(ans);
  }
});

```

## project 3 [Clock]

```Javascript
const clock = document.querySelector('.clock')
console.log(clock)
// console.log(date.toLocaleTimeString());
// setInterval runs the function after every time interval which is specified example: 1000=1sec here
setInterval(function () {
  const date = new Date();
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project4 [Guess The Number]

```Javascript
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
    near.innerHTML = 'You lost😥!';
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
```
