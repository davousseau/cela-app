import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { FirestoreProvider } from 'react-firestore';
import 'bootstrap/dist/css/bootstrap.css';
import './fonts.css'
import './style.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <FirestoreProvider firebase={firebase}>
      <App />
    </FirestoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);