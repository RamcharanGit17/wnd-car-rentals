// Mobile menu functionality
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("active");
};

// Close navbar when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menu.contains(e.target) && navbar.classList.contains('active')) {
        menu.classList.remove("move");
        navbar.classList.remove("active");
    }
});

// Close navbar when scrolling
window.addEventListener('scroll', () => {
    if (navbar.classList.contains('active')) {
        menu.classList.remove("move");
        navbar.classList.remove("active");
    }
});