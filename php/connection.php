<?php
$servername = "localhost";
$username = "root";
$password = "";
$database ="libary_management";
$conn = new mysqli($servername, $username, $password,$database);

if ($conn->connect_error) {
    echo "Connection failed"; 
  }else
  {
  //echo "Connected successfully";
  }
  ?>
  