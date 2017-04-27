<?php
$db = new mysqli('localhost', 'Michael', 'Mikyska', 'PictureMe');
$postwerte = file_get_contents('php://input');
$werte = json_decode($postwerte);

$result=$db->query("SELECT * FROM users WHERE username='$werte->username' AND password='$werte->password'");
if($result->num_rows==1){
    echo 'true';
}
else{
    echo 'false';
}


?>
