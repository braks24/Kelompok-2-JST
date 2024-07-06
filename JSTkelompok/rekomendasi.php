<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "fix";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$genre = $_POST['genre'];
$year = $_POST['year'];

$sql = "SELECT * FROM film WHERE genre='$genre' AND year='$year'";
$result = $conn->query($sql);

$films = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $films[] = $row;
    }
}

echo json_encode($films);

$conn->close();
?>
