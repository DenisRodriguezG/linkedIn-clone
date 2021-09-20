import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIX-CjUM_AT7Y16zqSIl7kBFtj8ovZjnM",
    authDomain: "linkedln-clone-1b365.firebaseapp.com",
    projectId: "linkedln-clone-1b365",
    storageBucket: "linkedln-clone-1b365.appspot.com",
    messagingSenderId: "97950539386",
    appId: "1:97950539386:web:368dbd98f4247f1427a5c3",
    measurementId: "G-QQP33RZGFM"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};