import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBEw_rBEktceebTeAHXW58SXHM66XV4PwQ",
  authDomain: "healthtracker-297e3.firebaseapp.com",
  databaseURL: "https://healthtracker-297e3.firebaseio.com",
  projectId: "healthtracker-297e3",
  storageBucket: "healthtracker-297e3.appspot.com",
  messagingSenderId: "82641716880",
  appId: "1:82641716880:web:b5d53d4d6e87fa8f157a15"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
