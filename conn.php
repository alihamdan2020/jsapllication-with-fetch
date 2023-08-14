<?php 
$con=mysqli_connect("localhost","root","","jsApplication");

if($con)
{
	//$limit=$_GET['limit'];
    //$query="select * from users limit $limit";
	$query="select * from users";
    $result = mysqli_query($con, $query);

	$arr=[];
	if(mysqli_num_rows($result)>0)
	{
			while($row=mysqli_fetch_assoc($result))
    {
        $arr[] = $row;
    }
			
			//print_r ($arr); associative array
            
            //json_encode convert associative array into json object
            //echo json_encode($arr) mean this page rteurn $arr

            //echo json_encode($arr[0]['userId'] just to show how
            //we handle json array
    
	}
	else
		$arr["message"]="no result found";
	

echo json_encode($arr); 
}


?>