import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "firebase/firestore";

app.js

const firebaseConfig = {
    apiKey: "AIzaSyBhDfHNLgPeha39LCOch6vAqRlJbQtBE2U",
    authDomain: "cart-c466c.firebaseapp.com",
    projectId: "cart-c466c",
    storageBucket: "cart-c466c.appspot.com",
    messagingSenderId: "509110340521",
    appId: "1:509110340521:web:7a4e0c45d1361b6bef92b8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
