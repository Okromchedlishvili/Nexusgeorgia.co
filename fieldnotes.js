document.addEventListener("DOMContentLoaded", () => {
    const noteCards = document.querySelectorAll(".note-card");
    const modalOverlay = document.getElementById("note-modal");
    const allCloseBtns = document.querySelectorAll(".close-modal");
    const allModalContents = document.querySelectorAll("#note-modal .modal-content");
    const elementsToBlur = document.querySelectorAll("header, main, footer");

    noteCards.forEach(card => {
        card.addEventListener("click", () => {
            const targetId = card.getAttribute("data-target");
            const targetContentPanel = document.getElementById(targetId);

            if (targetContentPanel) {
                modalOverlay.classList.add("active");
                targetContentPanel.classList.add("active");
                
                document.body.style.overflow = "hidden";
                elementsToBlur.forEach(el => el.classList.add("blur"));
            }
        });
    });

    function closeModal() {
        modalOverlay.classList.remove("active");
        allModalContents.forEach(panel => panel.classList.remove("active"));
        
        document.body.style.overflow = "";
        elementsToBlur.forEach(el => el.classList.remove("blur"));
    }

    allCloseBtns.forEach(btn => {
        btn.addEventListener("click", closeModal);
    });

    window.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeModal();
    });
});