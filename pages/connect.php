<?php 
	require_once "config.php";

	$conn = new mysqli($servername,$username,$password,$database);

	if ($conn->connect_error) {
		die("connection failed:" . $conn->connect_error);
	}
?>