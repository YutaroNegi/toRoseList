var firebaseConfig = {
    apiKey: "AIzaSyDTqbmopnr3wYKNvNWpUQaM_3jmoeuP3fM",
    authDomain: "to-do-list-df76d.firebaseapp.com",
    projectId: "to-do-list-df76d",
    storageBucket: "to-do-list-df76d.appspot.com",
    messagingSenderId: "1097181050672",
    appId: "1:1097181050672:web:6fb846acda9fb55a3b7af5",
    measurementId: "G-TYE76SXSMT"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore()
let auth = firebase.auth()