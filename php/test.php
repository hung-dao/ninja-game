<?php 
	ini_set('display_errors','1');

require 'connection.php';
	
$stmt=$db->prepare("INSERT INTO scores (name,scores) VALUES (:name, :score)");
		$stmt->bindParam(':name', $name);
		$stmt->bindParam(':score', $score);
	$name=$_POST['name'];
	$score=$_POST['score'];

	$stmt->execute();
?>

