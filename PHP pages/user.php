<?php include "menu.php"; ?>
<h2>User Page</h2>
<?php
session_start();
if(isset($_SESSION['username'])) {
  echo 'You are logged in as '.$_SESSION['username'];
}
else {
  echo 'You are not logged in';
}
 ?>
