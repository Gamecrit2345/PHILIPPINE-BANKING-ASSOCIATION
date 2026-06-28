function login(){

const user=document.getElementById("username").value;

const pass=document.getElementById("password").value;

if(user==="demo" && pass==="123456"){

location.href="dashboard.html";

}else{

alert("Incorrect Username or Password");

}

}
