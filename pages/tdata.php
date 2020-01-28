<?php 
	require 'connect.php';
	$src = $_POST['from'];
	$dest = $_POST['to'];


	$sql = "INSERT INTO trip (source, destination) VALUES ('$src', '$dest')";
	$obj = array("source" => $src, "destination" => $dest);
	$obj = json_encode($obj);
	$loc=base64_encode($obj);
	if ($conn->query($sql) === TRUE){
		header('location:./route.php?map='.$loc.'#');
	}
	else {
		echo "Error" .$sql. $conn->error;
	}

?>