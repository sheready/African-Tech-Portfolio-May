(function() {
    'use strict'; //undeclared variables cannot be used
    window.addEventListener('load', function() { //level 1 start
      var form = document.getElementById('frmContact'); //receive the Contact form with id frmContact
          form.addEventListener('submit', function(event) { //level 2 start
          if (form.checkValidity() === false) { //execute lines of code within the if, if the form fails validation
            event.preventDefault();//inbuilt fn
            event.stopPropagation();//inbuilt fn
            setValidationResponse();// a custom fn
          } else { //execute lines of code in the else block, if the form passes validation
            form.classList.add('was-validated');//add a class was-validated if the form passes validation
            var userName = document.getElementById("userName").value; //initialize userName with the Name entered on the form
            var userEmail = document.getElementById("userEmail").value;
            var subject = document.getElementById("subject").value;
            var content = document.getElementById("message").value;
            alert("Here is what we got from you, "+userName+ "  \n Subject:"+subject+"\n Email:"+userEmail+ "\n Message:"+content);
            alert("Thank you "+userName+" your message has been sent."); //Give personalized Feedback
          }
        }, false); //level 2 end
    }, false); //level 1 end
  })(); //end of function 
  
  function setValidationResponse() {
      var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;//Regular expression to validate email addresses
      var userName = document.getElementById("userName").value;
      var userEmail = document.getElementById("userEmail").value;
      var subject = document.getElementById("subject").value;
      var content = document.getElementById("message").value;
      
      if (userName == "") {
          markAsInvalid("userName", "required");
      } else {
          markAsValid("userName");
      }
      
      if (userEmail == "") {
          markAsInvalid("userEmail", "required");
      } else if(!emailRegex.test(userEmail)) {
          markAsInvalid("userEmail", "invalid email");
      } else {
          markAsValid("userEmail");
      }
      
      if (subject == "") {
          markAsInvalid("subject", "required");
      } else {
          markAsValid("subject");
      }
      
      if (content == "") {
          markAsInvalid("content", "required");
      } else {
          markAsValid("content");
      }
  }
  
  function markAsValid(id) {
      document.getElementById(id+"-info").style.display = "none";
  }
  
  function markAsInvalid(id, feedback) {
      document.getElementById(id+"-info").style.display = "inline";
      document.getElementById(id+"-info").innerText = feedback;
  }