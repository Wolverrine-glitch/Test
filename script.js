let step = 0;

document.addEventListener("keydown", () => {
  if (step === 0) {
    show("login");
    step = 1;
  }
});

function show(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function attemptLogin() {
  const pw = document.getElementById("password").value;
  const msg = document.getElementById("loginMsg");

  if (pw === "EIDOLON") {
    show("menu");
  } else {
    msg.textContent = "ACCESS DENIED – MEMORY INTEGRITY FAILURE";
  }
}

function openEmails() {
  document.getElementById("emails").classList.remove("hidden");
}