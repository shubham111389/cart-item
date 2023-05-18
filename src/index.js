import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC7UP4t6lR_vQLTLS1UZeUac8GL_S7H_kw",
  authDomain: "cart-b9ffd.firebaseapp.com",
  projectId: "cart-b9ffd",
  storageBucket: "cart-b9ffd.appspot.com",
  messagingSenderId: "297608510890",
  appId: "1:297608510890:web:57d5c83a40bf1eee257fd3"
};
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById('root'));
