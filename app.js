const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);
const countdownContainer = document.querySelector("#countdown");
const secondsContainer = document.querySelector("#seconds");
const minutesContainer = document.querySelector("#minutes");
const hoursContainer = document.querySelector("#hours");
const daysContainer = document.querySelector("#days");
const spinLoading = document.querySelector("#loading");

const nextYearContainer = document.querySelector("#year");

const datetest = new Date("2020-12-31 23:55:55");

function updateCountdown() {
  const currentYear = new Date();

  // Quantidade de ms para chegar no novo ano
  const difference = newYearTime - currentYear;
  const seconds = Math.floor(difference / 1000) % 60;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const days = Math.floor(difference / 1000 / 60 / 60 / 24);

  secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds;
  minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes;
  hoursContainer.textContent = hours < 10 ? "0" + hours : hours;
  daysContainer.textContent = days < 10 ? "0" + days : days;

  nextYearContainer.textContent = nextYear;
}

setInterval(() => updateCountdown(), 1000);

setTimeout(() => {
  spinLoading.remove();

  countdownContainer.style.display = "flex";
}, 1000);
