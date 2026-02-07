// BOOT SCREEN FADE OUT (FAILSAFE SAFE)
setTimeout(() => {
  const boot = document.getElementById("boot");
  if (boot) boot.style.display = "none";
}, 2500);

function login() {
  const pass = document.getElementById("password").value;
  if (pass === "PHASE-RESUME") {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("terminal").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "ACCESS DENIED";
  }
}

function openSection(id) {
  document.querySelectorAll(".section").forEach(s =>
    s.classList.add("hidden")
  );
  document.getElementById(id).classList.remove("hidden");
}

function openMail(id) {
  const content = {
    m1: `PHASE RESUMPTION REMAINS SUSPENDED.

Atmospheric ignition thresholds exceeded safe parameters.
Neural dampening protocols incomplete.`,

    m2: `BioTechnica confirms vector viability.

Aerosolized delivery via upper-atmospheric modulation shows promise.
Side effects considered acceptable.`,

    m3: `DRAFT – UNSENT

I don’t think they understand what this becomes.
SKYE doesn’t just deliver systems.`,

    m4: `Recovery team confirms retrieval of heavily modified combat chassis
from Arasaka Tower ruins.

Subject exhibited post-mortem neural activity after exposure
to EIDOLON STRAIN.

Asset designated: OBLIVION FRAME.`
  };

  document.getElementById("mailContent").innerText = content[id];
}
