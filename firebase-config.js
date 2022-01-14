// Initialize Firebase
// TODO: Replace apiKey with your apps browser api key found here : 
  //https://console.developers.google.com/apis/credentials
//TODO: Replace authDomain with your website url and also update the redirect domain found at
  //https://console.firebase.google.com/project/YOUR_FIREBASE_PROJECT_ID/authentication/providers
// TODO: Replace databaseURL with your databaseID can be found at
  // https://console.firebase.google.com/project/YOUR_FIREBASE_PROJECT_ID/settings/database
var config = {
  apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  //authDomain: "YOUR_FIREBASE_PROJECT_ID.firebaseapp.com if hosted on firebase OR YOUR_WEBSITE_URL",
  databaseURL: "https://YOUR_FIREBASE_PROJECT_ID.firebaseio.com",
  //storageBucket: "bucket.appspot.com",
};
firebase.initializeApp(config);