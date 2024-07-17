function newData(event) {
    let time = new Date();
    let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    event.preventDefault();
    let input = document.querySelector("#input-field");
    let newInput = document.querySelector("h1");
    let currentTime = document.querySelector("#time");
    newInput.innerHTML = `${input.value}`;
    currentTime.innerHTML = `${time.getDate[day]}`
}
let form = document.querySelector("#form-field");
form.addEventListener("submit", newData);