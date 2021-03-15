$(function() {

    $("#id_error_message").hide(); 
    $("#name_error_message").hide();   
    $("#email_error_message").hide();
    $("#place_error_message").hide();
   
  
    var error_id = false;
    var error_name = false;
   
    var error_email = false;
    var error_place = false;
  
    $("#form_id").focusout(function() {
        check_id();
     });
     $("#form_name").focusout(function() {
        check_name();
     });
   
    $("#form_email").click(function() {
       check_email();
    });
    
    $("#form_place").click(function() {
      check_place();
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
    function check_id(){
      var regex = /^\d*[.]?\d*$/;
       var id=$("#form_id").val();
       if(regex.test(id)&&id!==''){
         $("#id_error_message").hide();
         $("#form_id").css("border-bottom","2px solid #34F458");
       }else{
         $("#id_error_message").html("Invalid id");
         $("#id_error_message").show();
         $("#form_id").css("border-bottom","2px solid #F90A0A");
         error_id = true;
          alert("fail");

       }       
    }

    function check_name(){
       var reg=/^([a-zA-Z\s])+$/;
       var name=$("#form_name").val();
       if(reg.test(name)&&name!==''){
         $("#name_error_message").hide();
         $("#form_name").css("border-bottom","2px solid #34F458");
      } else {
         $("#name_error_message").html("Invalid name");
         $("#name_error_message").show();
         $("#form_name").css("border-bottom","2px solid #F90A0A");
         error_name = true;
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





    $("#Add_form").submit(function() {
      error_id = false;
      error_name = false;
       error_email = false;
       error_place = false;
      
       check_id();
       check_name();
       check_email();
       check_place();

      

       if (error_email === false && error_id === false && error_name === false && error_place ==false) {
          alert("Registration Successfull");
       
         
          return true;
       } else {
          alert("Please Fill the form Correctly");
          return false;
       }
      

    });
    
 });