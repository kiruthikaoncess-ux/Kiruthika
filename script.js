// Typing Effect

const text = "Hi, I'm Kiruthika 👩‍💻";

let index = 0;

const typingElement = document.querySelector(".typing");

function typeEffect() {

  if (index < text.length) {

    typingElement.textContent += text.charAt(index);

    index++;

    setTimeout(typeEffect, 100);

  }

}

typeEffect();

// Dark Mode Toggle

const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  toggleBtn.textContent =

    document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";

});