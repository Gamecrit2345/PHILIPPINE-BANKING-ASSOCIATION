function login(){

const username=document.getElementById("username").value;

const password=document.getElementById("password").value;

if(username==="demo" && password==="123456"){

window.location="loading.html";

}

else{

alert("Invalid Username or Password");

}

}
