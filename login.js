function CreateLogin()
{
  var config = {
    apiKey: "AIzaSyCorQAoUeUHk_JZRfTVxiKUHXFQc8F5UM4",
    authDomain: "teachforindia-919a1.firebaseapp.com",
    databaseURL: "https://teachforindia-919a1.firebaseio.com",
    projectId: "teachforindia-919a1",
    storageBucket: "teachforindia-919a1.appspot.com",
    messagingSenderId: "496720431885"
  };
  firebase.initializeApp(config);
  var email=document.getElementById("inputEmail").value;
  var pass=document.getElementById("inputPassword").value;
  var auth=firebase.auth();
  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  firebase.auth().onAuthStateChanged(firebaseUser=> {
  if (firebaseUser) {
    window.location= 'create.html';
  } else {
    console.error("No user signed in");
  }
  });
}