
<?php
include("./php/connection.php");
$db=mysqli_connect("localhost","root","","libary_management");
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>task</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="asset/css/style.css" type="text/css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 
</head>
<body>
    <header class="bg-dark" >
        <div class="row text-white">
            <div class="col-md-6 col-6 p-3 pl-5">
              <img src="asset/img/logo.jpg" height="100" width="100" alt="">
            </div>
            <div class="col-md-6 col-6  my-auto ">
              <nav class="navbar navbar-expand-lg navbar-light">
                 
                  <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                      <li class="nav-item active">
                        <a class="nav-link text-white" href=""><span class="sr-only"></span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-white" href=""></a>
                      </li>
                      
                      
                    </ul>
                    
                  </div>
                </nav>
            </div>
  
          </div>
  
  
      </header>

      
                      
   
<div class="table-responsive">
<div class="view">
<h1>view data </h1>

<table class="table table-dark table-hover table-bordered">
<thead>
<tr>
  <th scope="col-">id</th>
  <th scope="col-">name</th>
  <th scope="col-">email</th>
  <th scope="col-">place</th>
  <th class="text-right-">ACTION</th>
 

</tr>
</thead>
</div>
<?php
$sucess=mysqli_query($db,"select * from addnewmember");

while($data =mysqli_fetch_array($sucess))
{
?> 
<tbody>
<tr>
  <td><?php echo $data['id'];?></td>
  <td><?php echo $data['name'];?></td>
  <td><?php echo $data['email'];?></td>
  <td><?php echo $data['place'];?></td>
  <td class="text-right">
  <button class="bttn btn-primary badge-pill " style="width: 80px;">EDIT</button>
  <button class="bttn btn-danger badge-pill " style="width: 80px;">DELETE</button>
  </td>
</tr>

<?php 
}
?>
</tbody>

</table>

<?php mysqli_close($db);
?>

</div>
</body>
</html>