// TODO: Replace the following with your app's Firebase project configuration
import firebase from "@firebase/app";
require('firebase/auth');

var firebaseConfig = {
    // ...
    apiKey: "AIzaSyBOuzj8h6l5qe6J7PChLOPScIABnpNWEpQ",
    authDomain: "navatan-7d712.firebaseapp.com",
    databaseURL: "https://navatan-7d712.firebaseio.com",
    projectId: "navatan-7d712",
    storageBucket: "navatan-7d712.appspot.com",
    messagingSenderId: "890051044165",
    appId: "1:890051044165:web:bd52528ee8adf6eb34142c",
    measurementId: "G-3SKCDYPYFT",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig)
export { fb }
