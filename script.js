// Confetti
import confetti from "https://cdn.skypack.dev/canvas-confetti";

// Keyboard Counter
let counter = 0;
const hitElement = document.querySelector(".counter-stamp");
document.body.onkeyup = function (e) {
  if ((e.keyCode == 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) {
    addHit();
  }
};

const addHit = function () {
  counter++;
  renderCount();
};

const renderCount = function () {
  hitElement.innerHTML = counter;

  if (counter % 100 === 0) {
    confetti({
      particleCount: 750,
      spread: 700,
      gravity: 0.5,
      ticks: 500,
    });
  }
};

const kpsElement = document.querySelector(".kps");
let startTime = new Date().getTime();

setInterval(() => {
  const currentTime = new Date().getTime();
  const elapsedTimeInSeconds = (currentTime - startTime) / 1000;

  kpsElement.innerHTML = ((counter / elapsedTimeInSeconds) * 1).toFixed(1);
}, 1000);

setInterval(() => {
  startTime = new Date(new Date.getTime() - 30 * 1000).getTime();
}, 60000);
