let progs = document.querySelectorAll(".our-skills .container .the-progress span");
let skillsSection = document.querySelector(".our-skills");
let skillBarStarted = false;

window.addEventListener("scroll", function () {
    if (!skillBarStarted && isInViewport(skillsSection)) {
        progs.forEach(element => fillProgress(element));
        skillBarStarted = true;
    }
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}

function fillProgress(element) {
    let goalSpan = element.closest(".skill").querySelector("h3 span");
    let goal = parseInt(goalSpan.dataset.goal);
    let width = 0;

    let interval = setInterval(() => {
        if (width >= goal) {
            clearInterval(interval);
        } else {
            width++;
            element.style.width = width + "%";
            goalSpan.textContent = width + "%";
        }
    }, 10);
}
