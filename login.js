let accounts = [];

fetch("data/accounts.json")
  .then(res => res.json())
  .then(data => accounts = data);

function login() {
  let acc = document.getElementById("account").value;
  let pass = document.getElementById("password").value;

  let user = accounts.find(u => u.account === acc && u.password === pass);

  if (!user) {
    document.getElementById("msg").innerText = "Invalid login!";
    return;
  }

  document.getElementById("loading").style.display = "block";

  setTimeout(() => {
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "dashboard.html";
  }, 2500);
}

function togglePass() {
  let p = document.getElementById("password");
  p.type = (p.type === "password") ? "text" : "password";
}
