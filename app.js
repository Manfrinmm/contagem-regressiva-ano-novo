const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);
const countdownContainer = document.querySelector("#countdown");
const secondsContainer = document.querySelector("#seconds");
const minutesContainer = document.querySelector("#minutes");
const hoursContainer = document.querySelector("#hours");
const daysContainer = document.querySelector("#days");
const spinLoading = document.querySelector("#loading");

const nextYearContainer = document.querySelector("#year");

nextYearContainer.textContent = nextYear;

function getTimeUnit(unit) {
  return unit < 10 ? "0" + unit : unit;
}

function insertCountdownValues({ seconds, minutes, hours, days }) {
  secondsContainer.textContent = getTimeUnit(seconds);
  minutesContainer.textContent = getTimeUnit(minutes);
  hoursContainer.textContent = getTimeUnit(hours);
  daysContainer.textContent = getTimeUnit(days);
}

function updateCountdown() {
  const currentYear = new Date();

  // Quantidade de ms para chegar no novo ano
  const difference = newYearTime - currentYear;
  const seconds = Math.floor(difference / 1000) % 60;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const days = Math.floor(difference / 1000 / 60 / 60 / 24);

  insertCountdownValues({ seconds, minutes, hours, days });
}

function handleCountdownDisplay() {
  spinLoading.remove();

  countdownContainer.style.display = "flex";
}

setTimeout(handleCountdownDisplay, 1000);

setInterval(() => updateCountdown(), 1000);
