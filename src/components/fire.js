import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDJ1V0maU1STTR1vdBHS1kKzAzIOiHBIv0",
    authDomain: "reactfirebase-14b21.firebaseapp.com",
    projectId: "reactfirebase-14b21",
    storageBucket: "reactfirebase-14b21.appspot.com",
    messagingSenderId: "915979111494",
    appId: "1:915979111494:web:a410730e392ab5d9c24e47",
    measurementId: "G-0GCBQTHLPG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  db.settings({timestampsInSnapshots:true})
//   var fire=firebase.analytics();
export default db;
