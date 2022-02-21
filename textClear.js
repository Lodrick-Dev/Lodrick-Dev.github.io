let secondsRemaining = 10

const interval = setInterval(() => {

  // just for presentation
  document.querySelector('p').innerHTML = secondsRemaining

  // time is up
  if (secondsRemaining === 0) {
    clearInterval(interval);
  }
  console.log(secondsRemaining);
  secondsRemaining--;
  console.log(secondsRemaining);
}, 1000);
