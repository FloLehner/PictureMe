

function createProfile(){
    $("#loginView").hide();
    $("#createProfileView").show();
    $("#username").val("");
    $("#password").val("");
}
function cancelProfile(){
    $("#createProfileView").hide();
    $("#loginView").show();
    $("#createUsername").val("");
    $("#createMail").val("");
    $("#createPassword").val("");
    }
    
function saveProfile(){
    var username=$("#createUsername").val().toString();
    var mail=$("#createMail").val().toString();
    var password=$("#createPassword").val().toString();
   
    if(username !== "" && mail !== "" && password !== ""){
        var data = {username : username, mail : mail, password : password};
                
                $.ajax({
                    type:"POST", 
                    url:"database/saveProfile.php",
                    data: JSON.stringify(data),
                    cache: false, 
                    
                    success:function(result){
                    if(result==="true"){
                        $("#createProfileView").hide();
                        $("#loginView").show();
                        alert("Ihr Profil wurde erfolgreich erstellt.");
                        $("#createUsername").val("");
                        $("#createMail").val("");
                        $("#createPassword").val("");
                    }
                    else{
                        alert("Ein Fehler ist aufgetreten. Ihre Profilinformationen konnten nicht gespeichert werden.");
                    }},
                    error:function(){alert("Ein Fehler ist aufgetreten");}
                    
                });
    }
    else{
        $("#createUsername").val("");
        $("#createMail").val("");
        $("#createPassword").val("");
        alert("Bitte füllen Sie die Felder korrekt aus, um sich bei PictureMe zu registrieren.");
    }
    
    
    firebase.database().ref('user/'+''+username+'').set({
    password: password,
    username: username
    
});
    
}

function checkProfile(){
    var username=$("#username").val().toString();
    var password=$("#password").val().toString();
    
    if(username !== "" && password !== ""){
        var data = {username : username, password : password};
        
        $.ajax({
            type:"POST",
            url:"database/checkProfile.php",
            data:JSON.stringify(data),
            cache:false,
            success:function(result){
            if(result==='true'){
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                $("#username").val("");
                $("#password").val("");
                $("#loginView").hide();
                $("#mainView").show();
                checkItems();
                checkWeather();
                addAdminMarker();
                loadOwnMarker();
            }
            else{
            $("#username").val("");
            $("#password").val("");    
            alert("Die Anmeldedaten sind falsch. Kontrollieren Sie sie und versuchen Sie es erneut.");    
            }
            },
            error:function(){
            alert("Ein Fehler ist aufgetreten");    
            }
        
            
        });
    }
    else{
        $("#username").val("");
        $("#password").val("");
        alert("Bitte füllen Sie die Felder korrekt aus, um sich bei PictureMe anzumelden.");    
    }
    
}

function addSpot(){
    var long =parseFloat($("#latitude").val());
    var lat =parseFloat($("#longitude").val());
    var title = "Hier ist ein guter Platz um ein Foto zu schießen";
    
   var myLatLng = {lat: lat, lng: long};
   var marker = new google.maps.Marker({
   position: myLatLng,
   map: map,
   title: title
   }); 
   
   saveOwnMarker(lat, long, title);
   
   alert("Ihre Position wurde hinzugefügt.");
   $("#latitude").val("");
   $("#longitude").val("");
    
}


function addEquipment(){
    var username=localStorage.getItem("username");
    var password=localStorage.getItem("password");
    var item=$("#equipment").val().toString();
    $("#tbody").append('<tr><td>Item: </td><td>'+item+'</td></tr>');
    var data ={username: username, password: password, item: item };
    $.ajax({
                    type:"POST", 
                    url:"database/saveItems.php",
                    data: JSON.stringify(data),
                    cache: false, 
                    
                    success:function(result){
                    if(result==="true"){
                    alert("Item wurde gespeichert.");  
                    $("#equipment").val("");
                    }
                    else{
                        alert("Ein Fehler ist aufgetreten. Ihr Gegenstand konnte nicht gespeichert werden.");
                    }},
                    error:function(){alert("Ein Fehler ist aufgetreten");}
                    
                });
    
   
}
function checkItems(){
   var username=localStorage.getItem("username");
   var password=localStorage.getItem("password"); 
   
   var data ={username: username, password: password};
    $.ajax({
                    type:"POST", 
                    url:"database/checkItems.php",
                    data: JSON.stringify(data),
                    cache: false, 
                    
                    success:function(result){
                    var items = JSON.parse(result); 
                    for(var x = 0; x < items.length; x++){
                    $("#tbody").append('<tr><td>Item: </td><td>'+items[x]+'</td></tr>');    
                    }
                   
                    },
                    error:function(){alert("Ein Fehler ist aufgetreten");}
                    
                });
}

function checkWeather(){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a1b004ffb78d3d7de50ec2e53b444a2d&units=metric", gotData);
    }
function gotData(data){
    $("#temperature").append(data.main.temp+" C°");
    $("#humidity").append(data.main.humidity+" %");
    $("#windspeed").append(data.wind.speed+" km/h");
}

function emptyAnimation(){
    $("#username").val("");
    $("#password").val("");
    $("#createUsername").val("");
    $("#createMail").val("");
    $("#createPassword").val("");
    $("#longitude").val("");
    $("#latitude").val("");
    $("#equipment").val("");
    $("#temperature").empty();
    $("#humidity").empty();
    $("#windspeed").empty();
   
}

function showInfo(){
    $("html, body").scrollTop($("#introLabel").offset().top); 
}

function showMap(){
    $("html, body").scrollTop($("#locationTrackerLabel").offset().top);
}
function showWeather(){
    $("html, body").scrollTop($("#hotNcoldLabel").offset().top);
}
function showEquipment(){
    $("html, body").scrollTop($("#properlyPreparedLabel").offset().top);
}
function logOff(){
    emptyAnimation();
    location.reload();
    
}

function addAdminMarker(){
    var data ="";
    $.ajax({
                    type:"POST", 
                    url:"database/addMarker.php",
                    data: JSON.stringify(data),
                    cache: false, 
                    
                    success:function(result){
                    var coordinates = JSON.parse(result);  
                    for(var x = 0; x<coordinates.length; x++){
                    
                    var lat =parseFloat(coordinates[x].latitude);
                    var long =parseFloat(coordinates[x].longitude);
                    var title = coordinates[x].title;
                    

                        var myLatLng = {lat: lat, lng: long};
                        var marker = new google.maps.Marker({
                        position: myLatLng,
                        map: map,
                        title: title
                        });     
                    }    
                   
                    },
                    error:function(){alert("Ein Fehler ist aufgetreten");}
                    
                });
    
}

function saveOwnMarker(lat, long, title){
    var username=localStorage.getItem("username");
    var password=localStorage.getItem("password");
    var title = title;
    var lat = lat;
    var long= long;
    
    firebase.database().ref('user/'+''+username+'').set({
    password: password,
    username: username,
    latitude: lat,
    longitude: long, 
    title: title
});
    
    
}

function loadOwnMarker(){
    var username=localStorage.getItem("username");
    var rootref = firebase.database().ref().child("user/"+username);
    var lat;
    var long;
    var title;
    
    rootref.on("value", snap => {
    lat = snap.child("latitude").val();
    long = snap.child("longitude").val();
    title = snap.child("title").val();
    
    var myLatLng = {lat: lat, lng: long};
        var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: title
        }); 
    });     
    }