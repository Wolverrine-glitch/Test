setTimeout(() => {
  document.getElementById("boot").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
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
  document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function openMail(id) {
  const content = {
    m1: `PHASE RESUMPTION REMAINS SUSPENDED.

Atmospheric ignition thresholds exceeded safe parameters.
Neural dampening protocols incomplete.

Project SKYE to remain compartmentalized until further notice.`,

    m2: `BioTechnica confirms vector viability.

Aerosolized delivery via upper-atmospheric modulation shows promise.
Side effects considered acceptable under Black Statute review.`,

    m3: `DRAFT – UNSENT

I don’t think they understand what this becomes once it scales.
SKYE doesn’t just deliver systems.

It erases responsibility.`,

    m4: `Recovery team confirms retrieval of heavily modified combat chassis
from Arasaka Tower ruins following mercenary assault.

Subject exhibited post-mortem neural activity after exposure to V-STRAND.

Black Division has designated the asset:

“NEMESIS PROTOCOL”

Asset placed in cryo-hold as contingency weapon.
Further testing pending executive approval.`
  };

  document.getElementById("mailContent").innerText = content[id];
}
