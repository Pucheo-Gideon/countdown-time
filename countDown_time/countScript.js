const secondsEl = document.getElementById("seconds");
const minutesEl = document.getElementById("minutes");
const hoursEl = document.getElementById("hours");
const dayOfTheMonthEl = document.getElementById("day");
const restartTimer = document.getElementById("restart");
const Pause = document.getElementById("pause");
// const start = document.getElementById("start")


// Set target date
let target = new Date("September 30, 2023 00:00:00");

let clearTime;

function updateTime() {

  // Get today's Date
  let today = new Date();

  //   get the time for the current time and target time
  let currentTime = today.getTime();
  let targetTime = target.getTime();

  //   Find the distance between the target date and the current time
  let distance = targetTime - currentTime;

  // Get Days
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Get Hours
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  // Get Minutes
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  // Get Seconds
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // console.log(days, hours, minutes, seconds)

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (days < 10) {
    days = "0" + days;
  }
  //   Append Time
  dayOfTheMonthEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;

  if (distance < 0) {
    clearInterval(clearTime);
    dayOfTheMonthEl.textContent = "00:";
    hoursEl.textContent = "00:";
    minutesEl.textContent = "00:";
    secondsEl.textContent = "00:";
  }
}

start.addEventListener("click", ()=>{
    clearTime = setInterval(updateTime, 1000);
})

// restartTimer.addEventListener("click", function () {
//   clearInterval(clearTime);
//   target = new Date("September 30, 2023 00:00:00");
//   updateTime();
// });

Pause.addEventListener("click", function () {
  clearInterval(clearTime);
  target = new Date("September 30, 2023 00:00:00");
  clearInterval(clearTime);
});
