<?php
$email = $_POST['email'];

$nume = mysql_real_escape_string($email);



$servername = "localhost";
$username = "root";
$password = "";
$dbname = "abonati";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO tabel_abonati (email)
VALUES ('$email')";

if ($conn->query($sql) === TRUE) {
    //echo "A fost adaugata o noua inregistrare";
} else {
    //echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>


