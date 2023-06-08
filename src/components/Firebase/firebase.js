import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxfUJkDg8x_GUAH85YLSccf7OFgk-rDF4",
  authDomain: "slackclone-20b10.firebaseapp.com",
  databaseURL: "https://slackclone-20b10-default-rtdb.firebaseio.com",
  projectId: "slackclone-20b10",
  storageBucket: "slackclone-20b10.appspot.com",
  messagingSenderId: "936032867430",
  appId: "1:936032867430:web:26715a4ba749210c9409a7",

};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
