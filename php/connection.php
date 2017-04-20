<?php
	try
	{
	 $dsn = "mysql:host=mysli.oamk.fi;dbname=opisk_t6bada00";
	 $db = new PDO ($dsn, "t6bada00", "ninja-game");
	 //print ("Connected\n");
	}
	catch (PDOException $e)
	{
	 print ("Cannot connect to server\n");
	 print ("Error code: " . $e->getCode() . "\n");
	 print ("Error message: " . $e->getMessage() . "\n");
	}
	?>

