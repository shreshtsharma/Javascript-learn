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
