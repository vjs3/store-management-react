import Rebase from "re-base";
import firebase from "firebase"; 

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA8s1HuAkAL1Jq5dQL3qYZcYaABzuVatdc",
  authDomain: "catch-of-the-day-vjs3.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-vjs3.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

export default base;
