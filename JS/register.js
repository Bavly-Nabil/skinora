let username = document.getElementById("first-name");
let last = document.getElementById("last-name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn_register = document.querySelector(".btn-register");

btn_register.addEventListener('click', register);

function register(e){
    e.preventDefault();
  if(username.value ===""|| email.value===""|| password.value===""){
      alert("please fill Data")

  }else{
      localStorage.setItem("username", username.value)
      localStorage.setItem("email", email.value)
      localStorage.setItem("password", password.value)
      setTimeout(() => {
          window.location = "login.html";
      },1500);
     
  }
}