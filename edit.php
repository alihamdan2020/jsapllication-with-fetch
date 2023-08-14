<?php
$con=mysqli_connect("localhost","root","","jsApplication");

$id= $_GET['id'];
$query="select * from users where userId=$id";
$result=mysqli_query($con,$query);
//since is a just one row
$arr=mysqli_fetch_assoc($result);
//print_r($arr);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="editUser.php" method="post" >
<input type="text" name="id" id="" value="<?php echo $arr['userId'] ?> ">
<!-- in real situation above input should be hidden not text -->
    <input type="text" name="userName" id="" value="<?php echo $arr['userName'] ?> ">
    <input type="text" name="userPassword" id="" value="<?php echo $arr['userPassword'] ?> ">
    <input type="submit" value="submit">
</form>
</body>
</html>
