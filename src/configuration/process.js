import firebase from 'firebase'


  var firebaseConfig = {
    apiKey: "AIzaSyDTdum-9m2Edv7xkgjPQ-Aqwt8poz16x1k",
    authDomain: "reactn-529ed.firebaseapp.com",
    projectId: "reactn-529ed",
    storageBucket: "reactn-529ed.appspot.com",
    messagingSenderId: "972991914011",
    appId: "1:972991914011:web:072519227c58e7162518be",
    measurementId: "G-P9F7WVJLCS"
  };

  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { db } ;
