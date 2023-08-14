<?php   
$con=mysqli_connect("localhost","root","","jsApplication");

$id= $_GET['id'];
$query="DELETE FROM users where userId=$id";
$result=mysqli_query($con,$query);
//since is a just one row
$output=[];
$output=["success"=>true,"message"=>"student delete succesffully"];
echo json_encode($output);
?>