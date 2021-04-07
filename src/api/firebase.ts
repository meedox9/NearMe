import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyAOsWz0Y-UFjoRkXZpV9PPnOC4Q2VtdrKc",
    authDomain: "light-scarab-296304.firebaseapp.com",
    projectId: "light-scarab-296304",
    storageBucket: "light-scarab-296304.appspot.com",
    messagingSenderId: "61791091591",
    appId: "1:61791091591:web:69ccf1cd9feb2406f5b122",
    measurementId: "G-WHRT8ETQ5Z"
};

console.log('firebase config', firebaseConfig);

export const firebase_app = firebase.initializeApp(firebaseConfig);
