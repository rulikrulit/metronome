(function() {
  const intervalEl = document.getElementById('interval');
  const countEl = document.getElementById('count');
  const displayEl = document.getElementById('display');
let intervalProcess = null;
  const run = () => {
    let currentCount = 0;
    let interval = parseInt(intervalEl.value) || 500;
    let count = parseInt(countEl.value) || 8;
    if (intervalProcess) {
      clearInterval(intervalProcess);
    }
    intervalProcess = setInterval(() => {
      if (currentCount >= count) {
        currentCount = 1;
      } else {
        currentCount++;
      }
      displayEl.innerHTML = currentCount;
      var audio = new Audio('./hit.wav');
      audio.play();
    }, 60000 / interval);
  };
  run();
  countEl.addEventListener('change', run);
  intervalEl.addEventListener('change', run);
})();