  // Initialize Firebase
  
function Save()
{
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
	var database = firebase.database();
	var creation=document.getElementById('creation');
	var emailid=document.getElementById('emailid');
	var otitle=document.getElementById('otitle');
	var odesc=document.getElementById('odesc');
	var from=document.getElementById('from');
	var to=document.getElementById('to');
	var number=document.getElementById('number');
	var location=document.getElementById('location');
	var Title= otitle.value;
	var op=
	{
		Email: emailid.value,
		Description: odesc.value,
		Title: otitle.value,
		Start: from.value,
		End: to.value,
		Hours: number.value,
		Location: location.value,
	}
	var firebaseref=firebase.database().ref();
	firebaseref.child(Title).set(op);
	window.alert("Saved");
}

$(document).ready(function() {
$('.mdb-select').materialSelect();
});