import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD87ifJ825sutQ3GhwAd7m68WI5C27n-3U",
    authDomain: "crud-practica-a3c36.firebaseapp.com",
    projectId: "crud-practica-a3c36",
    storageBucket: "crud-practica-a3c36.appspot.com",
    messagingSenderId: "967201777731",
    appId: "1:967201777731:web:3a8cd94042d8ea79208cf6"
  };
  
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = app.auth();

  export {db, auth}
  