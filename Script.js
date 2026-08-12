// =========================================
// JAMIC ENGINEERING PORTFOLIO
// JavaScript
// =========================================


// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Close menu when clicking a navigation link

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// =========================================
// TERMINAL ANIMATION
// =========================================

const terminalText = document.getElementById("terminalText");

const messages = [
    "Initializing system...",
    "Loading engineering modules...",
    "Arduino detected.",
    "Sensors online.",
    "Project environment ready.",
    "Building the future..."
];

let messageIndex = 0;

function changeTerminalMessage() {

    terminalText.style.opacity = "0";

    setTimeout(() => {

        messageIndex++;

        if (messageIndex >= messages.length) {
            messageIndex = 0;
        }

        terminalText.textContent = messages[messageIndex];

        terminalText.style.opacity = "1";

    }, 400);
}

setInterval(changeTerminalMessage, 2500);


// =========================================
// CURRENT YEAR
// =========================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================================
// SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(
    ".section-heading, .project-card, .skill-category, .goal-card, .contact-box"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// =========================================
// ACTIVE NAVIGATION
// =========================================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.style.color = "white";
        }

    });

});