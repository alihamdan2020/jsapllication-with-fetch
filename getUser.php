<?php
$con=mysqli_connect("localhost","root","","jsApplication");

$id= $_GET['id'];
$query="select * from users where userId=$id";
$result=mysqli_query($con,$query);
//since is a just one row
$arr=mysqli_fetch_assoc($result);
//print_r($arr);
echo json_encode($arr);
?>

