let stage = 0;

// Boot → Login
document.addEventListener("keydown", () => {
  if (stage === 0) {
    showScreen("login");
    stage = 1;
  }
});

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function attemptLogin() {
  const pw = document.getElementById("password").value;
  const msg = document.getElementById("loginMsg");

  if (pw === "EIDOLON") {
    showScreen("menu");
  } else {
    msg.textContent = "ACCESS DENIED – MEMORY INTEGRITY FAILURE";
  }
}

function openEmails() {
  document.getElementById("emails").classList.remove("hidden");
}
