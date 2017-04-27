<?php
$db = new mysqli('localhost', 'Michael', 'Mikyska', 'PictureMe');
$postwerte = file_get_contents('php://input');
$werte = json_decode($postwerte);
$myArray=array();
$result=$db->query("SELECT * FROM coordinates");
while($row = $result->fetch_object()){
    array_push($myArray, $row);
     
}
$jsonData = json_encode($myArray);
echo $jsonData;
?>
