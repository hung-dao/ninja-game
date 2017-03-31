<?php include "menu.php";?>
<?php
session_start();
session_destroy();
 ?>
 <p>You have logged out!</p>
 <?php include "footer.php";?>