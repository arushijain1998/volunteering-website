var config = 
{
	apiKey: "AIzaSyCorQAoUeUHk_JZRfTVxiKUHXFQc8F5UM4",
	authDomain: "teachforindia-919a1.firebaseapp.com",
	databaseURL: "https://teachforindia-919a1.firebaseio.com",
	projectId: "teachforindia-919a1",
	storageBucket: "teachforindia-919a1.appspot.com",
	messagingSenderId: "496720431885"
};
firebase.initializeApp(config);
console.log(firebase);

var userDataRef=firebase.database().ref();
var userDataRefC1 = userDataRef.child("Web Development Interns");
userDataRefC1.on('value', function(snapshot) {
var key = snapshot.key;
var childData = snapshot.val();              
var title = snapshot.val().Title;
var location = snapshot.val().Location;
var from = snapshot.val().Start;
var to = snapshot.val().End;
var number = snapshot.val().Hours;
var desc = snapshot.val().Description;
var email = snapshot.val().Email;

$("#title").append(title);
$("#location").append(location);
$("#from").append(from);
$("#to").append(to);
$("#number").append(number);
$("#description").append(desc);
$("#email").append(email);
});

var userDataRefC2 = userDataRef.child("Teaching Volunteers");
userDataRefC2.on('value', function(snapshot2) {              
var key2= snapshot2.key;
var childData2= snapshot2.val();  
var title2= snapshot2.val().Title;
var location2= snapshot2.val().Location;
var from2= snapshot2.val().Start;
var to2= snapshot2.val().End;
var number2= snapshot2.val().Hours;
var desc2= snapshot2.val().Description;
var email2= snapshot2.val().Email;

$("#title2").append(title2);
$("#location2").append(location2);
$("#from2").append(from2);
$("#to2").append(to2);
$("#number2").append(number2);
$("#description2").append(desc2);
$("#email2").append(email2);
});