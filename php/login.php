<?php
include("connection.php");


if(isset($_POST['submit'])){

$email=$_POST['email'];
$password=$_POST['password'];






    if($_POST['email']=='' && $_POST['password']=='')
    {
    echo "empty";
    }

else 
{
    $sql="INSERT INTO login(email,password)VALUES('$email','$password');";

    if ($conn->query($sql) === TRUE) {
        echo " created successfully";
        session_start();
        $_SESSION['user_logined']=true;
        header("location:../home.html");
        exit;
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
      
      $conn->close();
    }
  }else{
    echo"not working";
  }

 ?>