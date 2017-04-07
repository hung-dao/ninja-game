<?php
include "connection.php"; ?>

<h2>High scores</h2>
<table border="1">
  <tr>
    <TH>Name</TH><TH>Score</TH>
  </tr>

<?php

$myquery="SELECT name, score FROM scores order by score desc limit 5";
$high_scores=$db->query($myquery);
foreach ($high_scores as $row) {
  echo '<tr><td>'.$row['name'].'</td><td>'.$row['score'].'</td>';
  echo '</tr>';
}
?>
</table>


