const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");
const form = document.getElementById("contactForm");
const message = document.getElementById("successMessage");

openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    message.textContent = "Сообщение успешно отправлено!";
    message.style.color = "green";

    form.reset();
});
