
  var u_name = document.singup.u_name;
  var u_name = document.singup.u_name;
  var u_email = document.singup.u_email;
  var u_number = document.singup.u_number;
  var u_password = document.singup.u_password;
  var u_country = document.singup.u_country;
  var u_Keyword= document.singup.u_Keyword;

function validate() {
  
  if(u_name.value){
    u_name.classList.remove("is-invalid");
    u_name.classList.add("is-valid");
    document.getElementById("name-validation").innerText = "";
  
  }else{
    u_name.classList.remove("is-valid");
    u_name.classList.add("is-invalid");
    document.getElementById("name-validation").innerText = "name is requared";
  }


  if(u_username.value){
    u_username.classList.remove("is-invalid");
    u_username.classList.add("is-valid");
    document.getElementById("username-validation").innerText = "";
  
  }else{
    u_username.classList.remove("is-valid");
    u_username.classList.add("is-invalid");
    document.getElementById("username-validation").innerText = "please enter a user name";
  }

  if(u_email.value){
    u_email.classList.remove("is-invalid");
    u_email.classList.add("is-valid");
    document.getElementById("email-validation").innerText = "";
  
  }else{
    u_email.classList.remove("is-valid");
    u_email.classList.add("is-invalid");
    document.getElementById("email-validation").innerText = "enter a valid email";
  }

  if(u_number.value){
    u_number.classList.remove("is-invalid");
    u_number.classList.add("is-valid");
    document.getElementById("number-validation").innerText = "";
  
  }else{
    u_number.classList.remove("is-valid");
    u_number.classList.add("is-invalid");
    document.getElementById("number-validation").innerText = "enter a valid phone number";
  }
 
  
 if(u_password.value){
    u_password.classList.remove("is-invalid");
    u_password.classList.add("is-valid");
    document.getElementById("password-validation").innerText = "";
  
  }else{
    u_password.classList.remove("is-valid");
    u_password.classList.add("is-invalid");
    document.getElementById("password-validation").innerText = "please enter a password";
  }

  if(u_country.value){
    u_country.classList.remove("is-invalid");
    u_country.classList.add("is-valid");
    document.getElementById("country-validation").innerText = "";
  
  }else{
    u_country.classList.remove("is-valid");
    u_country.classList.add("is-invalid");
    document.getElementById("country-validation").innerText = "enter your country";
  }

 
  if(u_keyword.value){
    u_keyword.classList.remove("is-invalid");
    u_keyword.classList.add("is-valid");
    document.getElementById("keyword-validation").innerText = "";
  
  }else{
    u_keyword.classList.remove("is-valid");
    u_keyword.classList.add("is-invalid");
    document.getElementById("keyword-validation").innerText = "enter a keyword";
  }

}

function showAlert(){
    
    alert('Sing Up Seccessful')
}



  