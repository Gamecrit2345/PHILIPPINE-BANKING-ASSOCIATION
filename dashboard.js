let balance = localStorage.getItem("balance");

if(balance === null){
balance = 50000;
localStorage.setItem("balance", balance);
}

balance = Number(balance);

/* BALANCE */

function updateBalance(){
document.getElementById("balance").innerText =
"₱" + balance.toLocaleString() + ".00";
localStorage.setItem("balance", balance);
}

/* ANIMATION */

function animate(oldVal, newVal){

let obj = {val: oldVal};

let interval = setInterval(() => {

if(obj.val < newVal) obj.val++;
else if(obj.val > newVal) obj.val--;

document.getElementById("balance").innerText =
"₱" + obj.val.toLocaleString() + ".00";

if(obj.val === newVal) clearInterval(interval);

}, 10);

}

/* CASH IN */

function cashIn(){

let amount = Number(prompt("Cash In Amount"));

if(amount > 0){

let old = balance;
balance += amount;

animate(old, balance);

addHistory("Cash In", amount, "lime");

}

}

/* SEND MONEY */

function sendMoney(){

let amount = Number(prompt("Send Amount"));

if(amount > 0 && amount <= balance){

let old = balance;
balance -= amount;

animate(old, balance);

addHistory("Send Money", -amount, "red");

}else{

alert("Insufficient Balance");

}

}

/* HISTORY */

function addHistory(type, amount, color){

let row = `
<tr>
<td>Today</td>
<td>${type}</td>
<td style="color:${color}">
${amount > 0 ? "+" : ""}₱${Math.abs(amount).toLocaleString()}
</td>
</tr>`;

document.getElementById("history").innerHTML =
row + document.getElementById("history").innerHTML;

localStorage.setItem("history",
document.getElementById("history").innerHTML);

}

/* DARK MODE */

function toggleDarkMode(){
document.body.classList.toggle("dark");
}

/* AUTO LOGIN CHECK */

window.onload = function(){

let saved = localStorage.getItem("history");

if(saved){
document.getElementById("history").innerHTML = saved;
}

updateBalance();

};

/* SECURITY (basic demo) */

if(!localStorage.getItem("loggedIn")){
// optional future upgrade
localStorage.setItem("loggedIn", "true");
}
