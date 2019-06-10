import * as firebase from 'firebase';
import firestore from 'firebase/firestore'



var firebaseConfig = {
    apiKey: "AIzaSyCVCk_pFC4tA4__PYpsLy85o8g43VwZsRo",
    authDomain: "nearme-649cf.firebaseapp.com",
    databaseURL: "https://nearme-649cf.firebaseio.com",
    projectId: "nearme-649cf",
    storageBucket: "nearme-649cf.appspot.com",
    messagingSenderId: "209266430481",
    appId: "1:209266430481:web:049dd91cb6624efb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;