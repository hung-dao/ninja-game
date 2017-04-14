<?php 

include 'connection.php';
	
$stmt=$db->prepare("INSERT INTO scores (name,score) VALUES (:name, :score)");
		$stmt->bindParam(':name', $name);
		$stmt->bindParam(':score', $score);
	$name=$_GET['name'];
	$score=$_GET['score'];

	$stmt->execute();
?>

