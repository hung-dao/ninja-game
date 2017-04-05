<?php
	$db = mysql_connect('localhost', 'root', 'sql') or die('Failed to connect: ' . mysql_error());
    mysql_select_db('highscores') or die('Failed to access database');
?>
