
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const content = button.closest(".category").querySelector(".content");
            content.style.display = (content.style.display === "none") ? "block" : "none";
        });
    });
});
