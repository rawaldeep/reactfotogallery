import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC03rqFv8EGkF9gRj7kIOmXr7JMtYZn13Q",
    authDomain: "firegram-90dcb.firebaseapp.com",
    databaseURL: "https://firegram-90dcb.firebaseio.com",
    projectId: "firegram-90dcb",
    storageBucket: "firegram-90dcb.appspot.com",
    messagingSenderId: "897469837260",
    appId: "1:897469837260:web:9331f736620c2a7e64b769"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};