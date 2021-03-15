
$(function() {

        
  $("#email_error_message").hide();
  $("#password_error_message").hide();
  var error_email = false;
  var error_password = false;
  $("#form_email").focusout(function() {
    check_email();
 });
 $("#form_password").focusout(function() {
    check_password();
 });
 
 function check_email() {
  var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var email = $("#form_email").val();
  if (pattern.test(email) && email !== '') {
     $("#email_error_message").hide();
     $("#form_email").css("border-bottom","2px solid #34F458");
  } else {
     $("#email_error_message").html("Invalid Email");
     $("#email_error_message").show();
     $("#form_email").css("border-bottom","2px solid #F90A0A");
     error_email = true;
  }
}
 function check_password() {
  var password_length = $("#form_password").val().length;
  if (password_length < 6) {
     $("#password_error_message").html("Atleast 6 Characters");
     $("#password_error_message").show();
     $("#form_password").css("border-bottom","2px solid #F90A0A");
     error_password = true;
  } else {
     $("#password_error_message").hide();
     $("#form_password").css("border-bottom","2px solid #34F458");
  }
}


$("#login_form").submit(function() {
           
  error_email = false;
  error_password = false;



  check_email();
  check_password();
 

  if (error_email === false && error_password === false)  {
     alert("login Successfull");
     //window.location.href="./home.html"
     return true;
  } else {
     alert("Please Fill the form Correctly");
     return false;
  }


});
});