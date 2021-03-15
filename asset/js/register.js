$(function() {

        
         $("#email_error_message").hide();
         $("#password_error_message").hide();
         $("#retype_password_error_message").hide();
         $("#place_error_message").hide();
         $("#pin_error_message").hide();
         $("#registration_number_error_message").hide();


        
         var error_email = false;
         var error_password = false;
         var error_retype_password = false;
         var error_place = false;
         var error_pin = false;
          var  error_registration_number = false;
          
         $("#form_email").focusout(function() {
            check_email();
         });
         $("#form_password").focusout(function() {
            check_password();
         });
         $("#form_retype_password").focusout(function() {
            check_retype_password();
         });
         $("#form_place").focusout(function() {
            check_place();
         });
         $("#form_pin").focusout(function() {
            check_pin();
         });
         $("#form_registration_number").focusout(function() {
            check_registration_number();
         });
        
            
        

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

         function check_retype_password() {
            var password = $("#form_password").val();
            var retype_password = $("#form_retype_password").val();
            if (password !== retype_password) {
               $("#retype_password_error_message").html("Passwords Did not Matched");
               $("#retype_password_error_message").show();
               $("#form_retype_password").css("border-bottom","2px solid #F90A0A");
               error_retype_password = true;
            } else {
               $("#retype_password_error_message").hide();
               $("#form_retype_password").css("border-bottom","2px solid #34F458");
            }
         }

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
         function check_place(){
      
            var place_word = $("#form_place").val().length;
            if (place_word > 50) {
               $("#place_error_message").html("only 50 Characters");
               $("#place_error_message").show();
               $("#form_place").css("border-bottom","2px solid #F90A0A");
               error_password = true;
            } else {
               $("#place_error_message").hide();
               $("#form_place").css("border-bottom","2px solid #34F458");
            }
         }
         function check_pin(){
      
            var pin_length= $("#form_pin").val().length;
            if (pin_length >6) {
               $("#pin_error_message").html("only 6 numbers");
               $("#pin_error_message").show();
               $("#form_pin").css("border-bottom","2px solid #F90A0A");
               error_pin = true;
            } else {
               $("#pin_error_message").hide();
               $("#form_pin").css("border-bottom","2px solid #34F458");
            }
         }
         function check_registration_number(){
      
            var registration_number_length= $("#form_registration_number").val().length;
            if (registration_number_length <6) {
               $("#registration_number_error_message").html("less than 6 characters");
               $("#registration_number_error_message").show();
               $("#form.registration_number").css("border-bottom","2px solid #F90A0A");
               error_pin = true;
            } else {
               $("#pregistration_number_error_message").hide();
               $("#form_registration_number").css("border-bottom","2px solid #34F458");
            }
         }


         $("#registration_form").submit(function() {
           
            error_email = false;
            error_password = false;
            error_retype_password = false;

   
            check_email();
            check_password();
            check_retype_password();

            if (error_email === false && error_password === false && error_retype_password === false) {
               alert("Registration Successfull");
              // window.location.href="./home.html"
               return true;
            } else {
               alert("Please Fill the form Correctly");
               return false;
            }


         });
      });