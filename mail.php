<?php
$myemail = "georgeiosif@live.com";
$name = check_input($_POST['Nume'], "Nume");
$email = check_input($_POST['Email'], "Adresa de Email");
$subject = check_input($_POST['Subiect'], "Subiect");
$message = check_input($_POST['Mesaj'], "Mesaj");
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email)){
show_error("E-mail invalid");
}
$subject = "Cineva doreste sa iti transmita un mesaj:";
$message = "

Name: $Nume
Email: $Email
Subject: $Subiect
Message:
$Mesaj

";
mail($myemail, $subject, $message);
?>