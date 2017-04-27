<?php
$db = new mysqli('localhost', 'Michael', 'Mikyska', 'PictureMe');
$postwerte = file_get_contents('php://input');
$werte = json_decode($postwerte);
$myArray=array();
$result=$db->query("SELECT itemname FROM items WHERE username='$werte->username' AND password='$werte->password'");
while($row = $result->fetch_object()){
    array_push($myArray, $row->itemname);
     
}
$jsonData = json_encode($myArray);
echo $jsonData;
?>
