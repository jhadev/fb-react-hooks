import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Firebase from './hooks/useFirebase/firebase';
import FirebaseContext from './hooks/useFirebase/context';
import './styles/tailwind.css';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
