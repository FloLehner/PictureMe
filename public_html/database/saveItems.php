<?php
$db = new mysqli('localhost', 'Michael', 'Mikyska', 'PictureMe');
$postwerte = file_get_contents('php://input');
$werte = json_decode($postwerte);

$sql="INSERT INTO items(username, password, itemname) VALUES(?, ?, ?)";
$insert=$db->prepare($sql);
$insert->bind_param('sss', $werte->username, $werte->password, $werte->item);
$insert->execute();
echo 'true';

?>
