const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("mouseover", moveNo);

function moveNo() {
  const x = Math.random() * 200;
  const y = Math.random() * 120;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

function goToQuestions() {
  showScreen(2);
}

function check(q, correct) {
  if (!correct) {
    alert("😅 Intenta otra vez");
    return;
  }
  document.getElementById(`q${q + 1}`)?.classList.remove("hidden");
}

function finish(correct) {
  if (!correct) {
    alert("❌ Esa no es");
    return;
  }
  showScreen(3);
}

function showScreen(n) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(`screen${n}`).classList.add("active");
}
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.querySelector(".hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 400);