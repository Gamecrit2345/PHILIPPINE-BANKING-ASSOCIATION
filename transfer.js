let user = JSON.parse(localStorage.getItem("user"));

function generateRef() {
  return "PBA-" + Date.now().toString().slice(-8);
}

function send() {
  let amount = parseFloat(document.getElementById("amount").value);
  let bank = document.getElementById("bank").value;

  if (!amount || amount <= 0) {
    alert("Invalid amount");
    return;
  }

  if (amount > user.balance) {
    alert("Insufficient balance");
    return;
  }

  user.balance -= amount;
  localStorage.setItem("user", JSON.stringify(user));

  let now = new Date();

  let tx = {
    type: "Transfer",
    to: bank,
    amount: amount,
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString(),
    ref: generateRef()
  };

  let txs = JSON.parse(localStorage.getItem("tx")) || [];
  txs.push(tx);
  localStorage.setItem("tx", JSON.stringify(txs));

  showReceipt(tx);
}

function showReceipt(tx) {
  let box = document.getElementById("receipt");
  box.classList.remove("hidden");

  box.innerHTML = `
    <h3>Transaction Receipt</h3>
    <p><b>Type:</b> Transfer</p>
    <p><b>To:</b> ${tx.to}</p>
    <p><b>Amount:</b> ₱${tx.amount}</p>
    <p><b>Date:</b> ${tx.date}</p>
    <p><b>Time:</b> ${tx.time}</p>
    <p><b>Reference:</b> ${tx.ref}</p>
    <p><b>Status:</b> SUCCESS</p>
  `;
}
