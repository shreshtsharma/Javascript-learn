function randomclr() {
    const hex = '0123456789ABCDEF';
    let clr = '#';
    for (let i = 0; i < 6; i++) {
      clr += hex[Math.floor(Math.random() * 16)];
    }
    return clr;
  }
  const start = document.querySelector('#start');
  const stop = document.querySelector('#stop');
  
  let intervalId = null;
  start.addEventListener('click', function () {
    if (!intervalId) {
      intervalId = setInterval(function () {
        document.body.style.backgroundColor = randomclr();
      }, 1000);
    }
  });
  
  stop.addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null;
  });
  