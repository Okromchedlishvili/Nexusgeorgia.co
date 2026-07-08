const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.nav-menu a');

const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navItems.forEach(link => {
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

const modalOverlay = document.getElementById('modalOverlay');
const solutionCards = document.querySelectorAll('.solution-card, .delivery-card');
const closeButtons = document.querySelectorAll('.modal-close');
const allModalContents = document.querySelectorAll('.modal-content-solutions, .modal-content-delivery');

solutionCards.forEach(card => {
    card.addEventListener('click', () => {
        const targetId = card.getAttribute('data-target');
        const targetModal = document.getElementById(targetId);

        if (targetModal) {
            modalOverlay.classList.add('active');
            targetModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

function closeModal() {
    modalOverlay.classList.remove('active');
    allModalContents.forEach(modal => modal.classList.remove('active'));
    document.body.style.overflow = '';
}

closeButtons.forEach(button => {
    button.addEventListener('click', closeModal);
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});