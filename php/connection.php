<?php
	$db = mysql_connect('localhost', 'root', 'sql') or die('Failed to connect: ' . mysql_error());
    mysql_select_db('highscores') or die('Failed to access database');
?>

<?php
	try
	{
	 $dsn = "mysql:host=localhost;dbname=highscores";
	 $db = new PDO ($dsn, "root", "sql");
	 #print ("Connected\n");
	}
	catch (PDOException $e)
	{
	 print ("Cannot connect to server\n");
	 print ("Error code: " . $e->getCode () . "\n");
	 print ("Error message: " . $e->getMessage () . "\n");
	}
?>