<?php
include("connection.php");


if(isset($_POST['submit'])){
  
  $id=$_POST['id'];
$name=$_POST['name'];
$email=$_POST['email'];
$place=$_POST['place'];
    if($_POST['id']==''&& $_POST['name']==''&& $_POST['email']==''&&$_POST['place']=='')
    {

    echo "empty";

}
else 
{
    $sql="INSERT INTO addnewmember(id,name,email,place) VALUES('$id','$name','$email','$place');";
    
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
        session_start();
        $_SESSION['user_logined']=true;
       
        exit;

      } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
      }
      
      $conn->close();
    } 
}else 
{
    echo "not working error";
}
 ?>