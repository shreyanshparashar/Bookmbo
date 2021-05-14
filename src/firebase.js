// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDENXqI_2n8F87ugZyjpG0oR9KcxZJywGo",
  authDomain: "bookmbo.firebaseapp.com",
  projectId: "bookmbo",
  storageBucket: "bookmbo.appspot.com",
  messagingSenderId: "152474961961",
  appId: "1:152474961961:web:9a5195d18f14d2fc46b438",
  measurementId: "G-T0BVMBZT9Z",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
