import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';

import './index.css';

firebase.initializeApp({
  databaseURL: 'https://anton-sport-7a1e6.firebaseio.com',
})

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
