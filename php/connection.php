<?php
	$db = mysql_connect('localhost', 'root', 'sql') or die('Failed to connect: '. mysql_error());
    mysql_select_db('highscores') or die('Failed to access database');
?>

<?php
	try
	{
    $conn_string = "mysql:host=mysli.oamk.fi;dbname=opisk_t6dang00";
	 $db = new PDO ($conn_string, "t6dang00", "sql1995");
	 $db->setAttribute (PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	 
	 print ("Connected\n");
	}
	catch (PDOException $e)
	{
	 print ("Cannot connect to server\n");
	 print ("Error code: " . $e->getCode () . "\n");
	 print ("Error message: " . $e->getMessage () . "\n");
	}
?>