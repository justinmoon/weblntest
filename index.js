async function enable() {
  if (typeof window.webln === "undefined") {
    return alert("No WebLN available.");
  }

  try {
    await window.webln.enable();
    alert("enabled")
  } catch (error) {
    // alert("User denied permission or cancelled.");
    alert(error.toString());
    console.log("error", error);
  }
}

function showResult(result) {
  const resultElement = document.getElementById("result");
  resultElement.innerText = JSON.stringify(result, null, 4);
  resultElement.style.display = "block";
}

async function makeInvoice() {
  if (typeof window.webln === "undefined") {
    return alert("No WebLN available.");
  }

  try {
    await window.webln.enable();
    const result = await window.webln.makeInvoice({
      amount: 21
    });
    showResult(result);    
  } catch (error) {
    console.log(error);
    alert("An error occurred during the makeInvoice() call.");
  }
}

async function sendPayment() {
  if (typeof window.webln === "undefined") {
    return alert("No WebLN available.");
  }

  try {
    await window.webln.enable();
    const invoice = prompt("Please provide an invoice (lnbc...)");
    const result = await window.webln.sendPayment(invoice);
    showResult(result);
  } catch (error) {
    alert("An error occurred during the payment.");
  }
}

