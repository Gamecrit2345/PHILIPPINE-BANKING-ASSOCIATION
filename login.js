function login(){

const username=document.getElementById("username").value;

const password=document.getElementById("password").value;

if(username==="100000573092" && password==="765432"){

window.location="loading.html";

}

else{

alert("Invalid Username or Password");

}

}
