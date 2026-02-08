function goToLogin() {
  document.getElementById("boot").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "CALYX") {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("terminal").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "ACCESS DENIED";
  }
}

function openEmails() {
  document.getElementById("emails").classList.toggle("hidden");
}
