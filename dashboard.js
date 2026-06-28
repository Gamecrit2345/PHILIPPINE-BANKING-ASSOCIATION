let balance = 50000;

function updateBalance() {

document.getElementById("balance").innerHTML =
"₱" + balance.toLocaleString() + ".00";

}

function cashIn(){

let amount = Number(prompt("Cash In Amount"));

if(amount>0){

balance += amount;

updateBalance();

let row = `
<tr>
<td>Today</td>
<td>Cash In</td>
<td style="color:lime;">+₱${amount.toLocaleString()}</td>
</tr>`;

document.getElementById("history").innerHTML =
row + document.getElementById("history").innerHTML;

}

}

function sendMoney(){

let amount = Number(prompt("Send Amount"));

if(amount>0 && amount<=balance){

balance-=amount;

updateBalance();

let row = `
<tr>
<td>Today</td>
<td>Send Money</td>
<td style="color:red;">-₱${amount.toLocaleString()}</td>
</tr>`;

document.getElementById("history").innerHTML =
row + document.getElementById("history").innerHTML;

}else{

alert("Insufficient Balance");

}

}

updateBalance();
