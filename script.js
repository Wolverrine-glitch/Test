function checkPassword() {
    const input = document.getElementById("passwordInput").value.trim();
    const error = document.getElementById("error");

    if (input.toUpperCase() === "OBLIVIAN") { // ✅ WORKING PASSWORD
        document.getElementById("login-screen").classList.add("hidden");
        document.getElementById("terminal").classList.remove("hidden");
    } else {
        error.textContent = "ACCESS DENIED";
    }
}

function showEmails() {
    document.getElementById("emails").classList.remove("hidden");
}
