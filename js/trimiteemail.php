<?php
$to = 'georgeiosif@live.com'; 
$subject = 'Formular Commerce'; 
$content = $_POST; 

$body = ''; 
$nume = 'nume';
$email = 'email';
$subiect = 'subiect'; 
$mesaj = 'mesaj'; 


$body .= '=================================='."\n";
$body .= "Nume: ".$content[$nume]."\n"; 

$body .= "Email: ".$content[$email]."\n"; 
$body .= "Subiect: ".$content[$subiect]."\n"; 
$body .= "Mesaj: ".$content[$mesaj]."\n"; 

$body .= '=================================='."\n";


$headers = 'De la: ' . $email . "\r\n"; 
mail($to, $subject, $body, $headers); 


//echo $body;
//$gohere = "localhost:58823/cos.html";
//header('Location: /EmpowersoftFINAL/contact.html');  /* declaring the page to redirect if the mail is sent successfully */
?>










