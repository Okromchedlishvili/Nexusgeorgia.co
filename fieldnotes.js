const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('mobile-active');
        menuToggle.classList.toggle('open');
    });
}

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const shareContainers = document.querySelectorAll(".share-container");
    shareContainers.forEach(container => {
        const modal = container.closest(".modal-content");
        if (!modal) return;
        const titleElement = document.querySelector(".field-article-head") || document.querySelector("h1");
        const noteTitle = encodeURIComponent(titleElement?.innerText || "Nexus Georgia Field Note");
        const currentUrl = encodeURIComponent(window.location.href);
        const linkedinBtn = container.querySelector(".share-btn.linkedin");
        const twitterBtn = container.querySelector(".share-btn.twitter");
        const facebookBtn = container.querySelector(".share-btn.facebook");

        if (linkedinBtn) {
            linkedinBtn.setAttribute("href", `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`);
        }
        if (twitterBtn) {
            twitterBtn.setAttribute("href", `https://twitter.com/intent/tweet?text=${noteTitle}&url=${currentUrl}`);
        }
        if (facebookBtn) {
            facebookBtn.setAttribute("href", `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`);
        }
    });
});