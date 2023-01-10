import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

let firebaseConfig = {
    apiKey: "AIzaSyBAi3AdrP6xleMMA9Ide9b8EXAzfvjtv0U",
    authDomain: "sistema-31599.firebaseapp.com",
    projectId: "sistema-31599",
    storageBucket: "sistema-31599.appspot.com",
    messagingSenderId: "408066666543",
    appId: "1:408066666543:web:39a4c817c04067268416da",
    measurementId: "G-1JB4S831EV"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
