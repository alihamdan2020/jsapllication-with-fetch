<?php 
$con=mysqli_connect("localhost","root","","jsApplication");

    $userName=$_POST['userName'];
    $userPassword=$_POST['userPassword'];
	$userSalary=$_POST['userSalary'];
    $userAge=$_POST['userAge'];

    $query="insert into users (userName, userPassword,userSalary,userAge) values ('$userName','$userPassword',$userSalary,'$userAge');
    ";
    mysqli_query($con,$query);
    header('location:index.html');
    
 




?>