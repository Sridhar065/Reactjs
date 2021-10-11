import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Student_form from './student_form';
import Table from './table'
import App from './App'

ReactDOM.render( 
  <React.StrictMode>
    <App />
    {/* <Student_form />
    <Table /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

