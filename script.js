// Confetti
import confetti from "https://cdn.skypack.dev/canvas-confetti";

// Keyboard Counter
let counter = 0;
let kpm = 0;
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

const kpmElement = document.querySelector(".kpm");
let startTime = new Date().getTime();

setInterval(() => {
  const currentTime = new Date().getTime();
  const elapsedTimeInSeconds = (currentTime - startTime) / 1000;

  kpmElement.innerHTML = ((counter / elapsedTimeInSeconds) * 60).toFixed(1);
}, 250);

setInterval(() => {
  startTime = new Date().getTime();
}, 60000);
