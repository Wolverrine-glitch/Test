function showSection(id) {
  const sections = document.querySelectorAll('.intel-section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function checkCode() {
  const input = document.getElementById("accessCode").value;
  const message = document.getElementById("overrideMessage");

  if (input === "PHASE-RESUME-77") {
    message.textContent = "OVERRIDE ACCEPTED";
    message.style.color = "#0ff";

    // Reveal secret nav item
    document.getElementById("secretNav").style.display = "block";
  } else {
    message.textContent = "ACCESS DENIED";
    message.style.color = "#ff4a4a";
  }
}
