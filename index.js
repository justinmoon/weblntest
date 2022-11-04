async function enable() {
  if (typeof window.webln === "undefined") {
    return alert("No WebLN available.");
  }

  try {
    await window.webln.enable();
    celebrate();
  } catch (error) {
    alert("User denied permission or cancelled.");
  }
}

function showResult(result) {
  const resultElement = document.getElementById("result");
  resultElement.innerText = JSON.stringify(result, null, 4);
  resultElement.style.display = "block";
}

function celebrate() {
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({ emojis: ["⚡"] });
}

