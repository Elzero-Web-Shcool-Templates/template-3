let nums = document.querySelectorAll(".statistics .container .number");
let section = document.querySelector(".statistics");
let started = false;

window.addEventListener("scroll", function () {
    if (!started && isInViewport(section)) {
        nums.forEach(element => slideNumber(element));
        started = true;
    }
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

function slideNumber(elem) {
    let goal = parseFloat(elem.dataset.goal);
    let current = 0;
    let steps = 50;
    let duration = 300;
    let increment = goal / steps;
    let intervalTime = duration / steps;

    let count = setInterval(() => {
        current += increment;

        if (current >= goal) {
            elem.textContent = formatNumber(goal);
            clearInterval(count);
        } else {
            elem.textContent = formatNumber(current);
        }

    }, intervalTime);
}

function getDecimalPlaces(num) {
    const str = num.toString();
    if (str.includes('.')) {
        return Math.min(str.split('.')[1].length, 3);
    }
    return 0;
}

function formatNumber(num) {
    return new Intl.NumberFormat("en", {
        notation: "compact",
        maximumFractionDigits: 2
    }).format(num);
}