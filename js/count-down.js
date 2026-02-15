const eventDate = new Date("Mar 31, 2026 23:59:59").getTime();

const daysEl = document.querySelector(".time .unit:nth-child(1) span:first-child");
const hoursEl = document.querySelector(".time .unit:nth-child(2) span:first-child");
const minutesEl = document.querySelector(".time .unit:nth-child(3) span:first-child");
const secondsEl = document.querySelector(".time .unit:nth-child(4) span:first-child");

const counter = setInterval(() => {

    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
        clearInterval(counter);
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = days.toString().padStart(2, "0");
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");

}, 1000);