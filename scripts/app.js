const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "Distember",
];

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const timeData = document.querySelectorAll(".deadline h4");

const futureDate = new Date(2021, 8, 29, 16, 46);

const year = futureDate.getFullYear();

const hour = futureDate.getHours();
function setAmPm() {
  if (hour > 12) {
    return `PM`;
  } else if (hour == 0) {
    return `AM`;
  }
  {
    return `AM`;
  }
}

const minute = futureDate.getMinutes();

const month = months[futureDate.getMonth()];

const weekday = weekDays[futureDate.getDay()];

giveaway.innerHTML = `Giveaway Ends On  ${weekday} ${year} ${month} , ${hour}:${minute} ${setAmPm()}`;

// Future time in ms

const futureTime = futureDate.getTime();

function calcRemainingTime() {
  // present time in ms

  const today = new Date().getTime();

  const time_diff = futureTime - today;

  // 1s = 1000ms
  // 1min = 60 * 1000
  // 1hr = 60 * 60 * 1000
  // 1day = 24 * 60 * 60 * 1000

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  //   calculate values

  let Day = Math.floor(time_diff / oneDay);
  let Hour = Math.floor((time_diff % oneDay) / oneHour);
  let Minute = Math.floor((time_diff % oneHour) / oneMinute);
  let Second = Math.floor((time_diff % oneMinute) / oneSecond);

  const values = [Day, Hour, Minute, Second];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  timeData.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (time_diff < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h1 class="expire">Uhh.. Sorry Giveaway is expired</h1>`;
  }
}
let countDown = setInterval(calcRemainingTime, 1000);
calcRemainingTime();
