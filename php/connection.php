<?php
	// try
	// {
	//  $dsn = "mysql:host=localhost;dbname=highscores";
	//  $db = new PDO ($dsn, "root", "sql");
	//  //print ("Connected\n");
	// }
	try
	{
	 $dsn = "mysql:host=localhost;dbname=highscores";
	 $db = new PDO ($dsn, "webuser", "webpass");
	 //print ("Connected\n");
	}
	catch (PDOException $e)
	{
	 print ("Cannot connect to server\n");
	 print ("Error code: " . $e->getCode() . "\n");
	 print ("Error message: " . $e->getMessage() . "\n");
	}
	?>
