import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_wJ7e9_MUpClBbCfW1Z63_sw3p9sP9No",
    authDomain: "linkedin-clone-53f7d.firebaseapp.com",
    projectId: "linkedin-clone-53f7d",
    storageBucket: "linkedin-clone-53f7d.appspot.com",
    messagingSenderId: "241948067072",
    appId: "1:241948067072:web:9635f9673e9647ce925fe5",
    measurementId: "G-RDH234310K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };