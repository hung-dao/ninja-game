<?php 
include "connection.php"; 

$name = mysql_real_escape_string($_GET['name']);
$score = mysql_real_escape_string($_GET['score']);


$query = mysql_query("INSERT INTO scores (name, score) VALUES 
 ('$name', '$score');");

?>