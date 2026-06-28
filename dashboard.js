let user = JSON.parse(localStorage.getItem("user"));

if (!user) {
  window.location.href = "index.html";
}

document.getElementById("name").innerText = "Welcome, " + user.name;
document.getElementById("acc").innerText = "Account: " + user.account;
document.getElementById("holder").innerText = user.name;
document.getElementById("balance").innerText = "₱" + user.balance.toFixed(2);

/* LOGOUT */
function logout() {
  localStorage.removeItem("user");
  window.location.href = "index.html";
}

/* TRANSACTIONS */
let transactions = JSON.parse(localStorage.getItem("tx")) || [];

function saveTx(type, amount) {
  let now = new Date();

  let tx = {
    type: type,
    amount: amount,
    date: now.toLocaleDateString(),
    time: now.toLocaleTimeString()
  };

  transactions.push(tx);
  localStorage.setItem("tx", JSON.stringify(transactions));

  loadTx();
}

/* LOAD TX */
function loadTx() {
  let list = document.getElementById("txList");
  list.innerHTML = "";

  transactions.slice(-5).reverse().forEach(t => {
    list.innerHTML += `
      <li>${t.type} - ₱${t.amount} <br>
      <small>${t.date} ${t.time}</small></li>
    `;
  });
}

loadTx();

/* CASH IN */
function cashIn() {
  let amt = prompt("Enter amount:");
  if (!amt) return;

  user.balance += parseFloat(amt);
  localStorage.setItem("user", JSON.stringify(user));

  document.getElementById("balance").innerText = "₱" + user.balance.toFixed(2);

  saveTx("Cash In", amt);
}

/* WITHDRAW */
function withdraw() {
  let amt = prompt("Enter amount:");
  if (!amt) return;

  if (amt > user.balance) {
    alert("Insufficient balance");
    return;
  }

  user.balance -= parseFloat(amt);
  localStorage.setItem("user", JSON.stringify(user));

  document.getElementById("balance").innerText = "₱" + user.balance.toFixed(2);

  saveTx("Withdraw", amt);
}

/* TRANSFER (DEMO ONLY) */
function transfer() {
  let amt = prompt("Transfer amount:");
  if (!amt) return;

  let target = prompt("Send to (GCash / Maya / KOOP):");

  if (amt > user.balance) {
    alert("Insufficient balance");
    return;
  }

  user.balance -= parseFloat(amt);
  localStorage.setItem("user", JSON.stringify(user));

  document.getElementById("balance").innerText = "₱" + user.balance.toFixed(2);

  saveTx("Transfer to " + target, amt);
}

/* CHART */
const ctx = document.getElementById('chart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    datasets: [{
      label: "Spending",
      data: [1200, 1900, 3000, 2500, 2200, 1800, 2600],
      borderColor: "#10b981"
    }]
  }
});
