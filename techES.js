// ---- Botão de Curtir ----
let likeCount = 0;
const likeBtn = document.getElementById("likeBtn");
const likeDisplay = document.getElementById("likeCount");

likeBtn.addEventListener("click", () => {
    likeCount++;
    likeDisplay.textContent = likeCount;
});

// ---- Tema Claro/Escuro ----
const toggleBtn = document.getElementById("themeToggle");
const toggleIcon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Troca o ícone automaticamente
    if (document.body.classList.contains("light-mode")) {
        toggleIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        toggleIcon.classList.replace("fa-sun", "fa-moon");
    }
});