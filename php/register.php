<?php
include("connection.php");

if(isset($_POST['submit'])){
  $email=$_POST['email'];
$password=$_POST['password'];
$retype_pass=$_POST['repass'];
$reg_num=$_POST['regnum'];
$date=$_POST['date'];
$place=$_POST['place'];
$pin=$_POST['pin'];
    if($_POST['email']==''&& $_POST['password']==''&& $_POST['repass']==''&&$_POST['regnum']==''&& $_POST['date']==''&& $_POST['place']==''&& $_POST['pin']=='')
    {

    echo "empty";

}
else 
{
    $sql="INSERT INTO register(email,password,repass,regnum,date,place,pin)VALUES('$email','$password','$retype_pass','$reg_num','$date','$place','$pin');";
    
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
        session_start();
        $_SESSION['user_logined']=true;
        header("location:../home.html");
        exit;

      } 
      else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
      
      $conn->close();
      
}
}
else 
{
    echo " not working error";
}

 ?>

