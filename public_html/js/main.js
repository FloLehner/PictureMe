var sliderNumber=0;
var map;
var weather;

$(document).ready(function(){
emptyAnimation();
$("#mainView").hide();
$("#createProfileView").hide();

$("#loginButton").click(checkProfile);
$("#createProfileButton").click(createProfile);
$("#cancel").click(cancelProfile);
$("#create").click(saveProfile);
$("#addLatLng").click(addSpot);
$("#addEquipment").click(addEquipment);
$("#infoGlyphicon").click(showInfo);
$("#mapGlyphicon").click(showMap);
$("#cloudGlyphicon").click(showWeather);
$("#listGlyphicon").click(showEquipment);
$("#logOffGlyphicon").click(logOff);



var sliderArray = new Array();
sliderArray.push("img/auroraNorthernLights.jpeg");
sliderArray.push("img/sanFran.jpeg");
sliderArray.push("img/forrest.jpeg");
sliderArray.push("img/fish.jpeg");
sliderArray.push("img/mountains.jpeg");

$("#container").append('<img src="'+sliderArray[sliderNumber]+'" alt="San Francisco" id="sanFranImage"/><label id="sanFranImageText">Every picture tells a story...</label>');    



window.setInterval(function(){
function emptyIt(){
$("#container").empty();
fillIt();
}  
function fillIt(){
if(sliderNumber<=3){
    sliderNumber++;
    $("#container").append('<img src="'+sliderArray[sliderNumber]+'" alt="San Francisco" id="sanFranImage"/><label id="sanFranImageText">Every picture tells a story...</label>');    

}
else{
    sliderNumber=0;
    $("#container").append('<img src="'+sliderArray[sliderNumber]+'" alt="San Francisco" id="sanFranImage"/><label id="sanFranImageText">Every picture tells a story...</label>');    

}    
}
$("#container").fadeOut(emptyIt);
$("#container").fadeIn();
}, 10000);


});
