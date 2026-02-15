const toggleMenu = document.querySelector(".mega-menu-link");
const megaMenu = document.querySelector(".mega-menu");
const megaLinks = megaMenu.querySelectorAll("a");

toggleMenu.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    megaMenu.classList.toggle("open-mega-menu");
});

megaMenu.addEventListener("click", function (e) {
    e.stopPropagation();
});

document.addEventListener("click", function () {
    megaMenu.classList.remove("open-mega-menu");
});

window.addEventListener("scroll", function () {
    megaMenu.classList.remove("open-mega-menu");
});

megaLinks.forEach(link => {
    link.addEventListener("click", function () {
        megaMenu.classList.remove("open-mega-menu");
    });
});