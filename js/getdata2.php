<?php
$email = $_POST['email'];
$myfile = fopen("fisiertest.txt", "w");
fwrite($myfile, $email);
?>


