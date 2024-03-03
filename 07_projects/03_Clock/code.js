const clock = document.querySelector('.clock')
console.log(clock)
// console.log(date.toLocaleTimeString());
// setInterval runs the function after every time interval which is specified example: 1000=1sec here
setInterval(function () {
  const date = new Date();
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
