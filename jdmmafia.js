document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  var isValid = true;

  var Fname = document.getElementById("Fname").value;
  var Lname = document.getElementById("Lname").value;
  var email = document.getElementById("email").value;
  var Password = document.getElementById("Password").value;
  var Message = document.getElementById("keyword").value;


  document.getElementById("Fname_error").textContent = "";
  document.getElementById("Lname_error").textContent = "";
  document.getElementById("email_error").textContent = "";
  document.getElementById("Password_error").textContent = "";
  document.getElementById("keyword_error").textContent = "";

  if (Fname.trim() === "") {
      isValid = false;
      document.getElementById("Fname_error").textContent = "First name is required";
  }

  if (Lname.trim() === "") {
      isValid = false;
      document.getElementById("Lname_error").textContent = "Last name is required";
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email.trim() === "") {
      isValid = false;
      document.getElementById("email_error").textContent = "Email is required";
  } else if (!emailPattern.test(email)) {
      isValid = false;
      document.getElementById("email_error").textContent = "Invalid email format";
  }

  if (Password.trim() === "") {
      isValid = false;
      document.getElementById("Password_error").textContent = "Password is required";
  }

  if (Message.trim() === "") {
      isValid = false;
      document.getElementById("keyword_error").textContent = "Keyword is required";
  }

  if (isValid) {
      alert("Form submitted successfully!");

  }
});