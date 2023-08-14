<?php
$con=mysqli_connect("localhost","root","","jsApplication");

$id= $_POST['id'];
$name= $_POST['userName'];
$password= $_POST['userPassword'];


$query="update users set userName='$name',userPassword='$password' where userId=$id";
$result=mysqli_query($con,$query);
header('location:index.html');

//echo $id .' ' . $name . ' ' . $password;

?>
