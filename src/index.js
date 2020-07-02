import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Demo from './App';
import Demo2 from './Demo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <Demo2 />
  </React.StrictMode>,
  document.getElementById('root2')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
