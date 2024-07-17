function newData(event) {
  event.preventDefault();
  let input = document.querySelector("#input-field");
  let newInput = document.querySelector("h1");
  newInput.innerHTML = `${input.value}`;
}
let form = document.querySelector("#form-field");
form.addEventListener("submit", newData);

let time = new Date();
let day = [
  "null",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let currentTime = document.querySelector("#time");
currentTime.innerHTML = `${
  day[time.getDay()]
} ${time.getHours()}:${time.getMinutes()},`;
