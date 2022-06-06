setInterval(setClock, 1000);

let hourHand = document.querySelector("[data-hour-hand]");
let minuteHand = document.querySelector("[data-minute-hand]");
let secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  let date = new Date();
  let secondsRatio = date.getSeconds() / 60;
  let minutesRatio = (secondsRatio + date.getMinutes()) / 60;
  let hoursRatio = (secondsRatio + date.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(hand, rotationRatio) {
  hand.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
