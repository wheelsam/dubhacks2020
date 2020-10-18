import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSf6F011SEh2QM3dPHhiHWJj_9sSkR8Gw",
  authDomain: "dubhacks-2020-1edf9.firebaseapp.com",
  databaseURL: "https://dubhacks-2020-1edf9.firebaseio.com",
  projectId: "dubhacks-2020-1edf9",
  storageBucket: "dubhacks-2020-1edf9.appspot.com",
  messagingSenderId: "121874152483",
  appId: "1:121874152483:web:87a2ce566520b61fddc596",
  measurementId: "G-3BXJGZ4J8Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
