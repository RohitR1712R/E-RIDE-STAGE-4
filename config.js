import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAUFIHHrm466gHUEwv_yGb-1UBQX6BUc_Y",
    authDomain: "e-ride-83e9d.firebaseapp.com",
    projectId: "e-ride-83e9d",
    storageBucket: "e-ride-83e9d.appspot.com",
    messagingSenderId: "891836996274",
    appId: "1:891836996274:web:ee9ef2ef68b38673f5c7ab"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


