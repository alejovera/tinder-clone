// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCye24rPsYgbSKoUxVY1d4C4Wj_QM2jM6w",
    authDomain: "tinder-clone-1e5d2.firebaseapp.com",
    databaseURL: "https://tinder-clone-1e5d2.firebaseio.com",
    projectId: "tinder-clone-1e5d2",
    storageBucket: "tinder-clone-1e5d2.appspot.com",
    messagingSenderId: "733764511488",
    appId: "1:733764511488:web:42289ad6783fab9db3b5e5",
    measurementId: "G-JGB0NREZKF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;