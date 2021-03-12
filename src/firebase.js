// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDLJaIjx4fEp1KkvTaUIARvZQS6gySf0jQ",
    authDomain: "tinder-clone-for-pets.firebaseapp.com",
    projectId: "tinder-clone-for-pets",
    storageBucket: "tinder-clone-for-pets.appspot.com",
    messagingSenderId: "267234697530",
    appId: "1:267234697530:web:ab84c632070978b0fef003",
    measurementId: "G-PYDC839QJJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Si quiero utilizar la database esto es todo lo que necesito aca
// Y tambien falta algo en el TinderCards.js

// const database = firebaseApp.firestore();
// export default database;

// Si realmente voy a usar la firestore tengo que arrancar una database
// en firestore en test mode y agregarle las personas con las fotos
// 1:39 del video donde explican eso
