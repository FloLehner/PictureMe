<?php
$db = new mysqli('localhost', 'Michael', 'Mikyska', 'PictureMe');
$postwerte = file_get_contents('php://input');
$werte = json_decode($postwerte);

$sql="INSERT INTO users(username, mail, password) VALUES(?, ?, ?)";
$insert=$db->prepare($sql);
$insert->bind_param('sss', $werte->username, $werte->mail, $werte->password);
$insert->execute();
echo 'true';
?>
