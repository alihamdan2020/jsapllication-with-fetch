<?php 
$con=mysqli_connect("localhost","root","","jsApplication");

	$data = file_get_contents("php://input");
    $user = json_decode($data, true);
	  
    $userName=$user['name'];
    $userPassword=$user['password'];
	$userSalary=$user['salary'];
    $userAge=$user['age'];

	
	

    $query="insert into users (userName, userPassword,userSalary,userAge) values ('$userName','$userPassword',$userSalary,'$userAge');
    ";
    mysqli_query($con,$query);
    //header('location:index.html');
	echo json_encode(["message"=>"ok"]);
	

 
 




?>