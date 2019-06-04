import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import defaultnotes from './assets/defaultnotes.js';

let savedNotes = window.localStorage.getItem('notes');

if ( savedNotes === null || savedNotes === "[]") {
  window.localStorage.setItem('notes', JSON.stringify(defaultnotes) );
}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
