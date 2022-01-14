function SaveN()
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
	var name=document.getElementById('name');
	var emailid=document.getElementById('emailid');
	var otitle=document.getElementById('otitle');
	var odesc=document.getElementById('odesc');
	var number=document.getElementById('number');
	var previous=document.getElementById('previous');
	var ref= name.value;
	var op=
	{
		Email: emailid.value,
		Description: odesc.value,
		Title: otitle.value,
		Hours: number.value,
		Previous: previous.value
	}
	var firebaseref=firebase.database().ref().child("Sign On");
	firebaseref.child(ref).set(op);
	window.alert("Application Sent");
}