let getUser =  localStorage.getItem("username");
let getPassword =  localStorage.getItem("password");
let btn_login = document.querySelector('.btn-login');
let error = document.getElementById("error");

btn_login.addEventListener("click",function(e){
    e.preventDefault();
    if(username.value =="" || password.value==""){
        alert("please fill Data")
  
    }else{
        if(getUser && getUser.trim() === username.value.trim() && getPassword && getPassword === password.value
        ) {
        setTimeout(() => {
            window.location = "index.html";

          }, 1500);
        } else {
            error.innerHTML="username or password is wrong !!"

        }
    }
  });

  