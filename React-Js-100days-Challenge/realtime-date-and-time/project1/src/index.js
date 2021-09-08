import React from 'react';
import ReactDOM from 'react-dom';
const currdate=new Date().toLocaleDateString();
const currtime=new Date().toLocaleTimeString();

ReactDOM.render(
  <>
  <h1>Hi There ! This is my first project in React-Js 100-Day's challenge series</h1>
  <p>Current Date is = {currdate}</p>
  <p>Current Date is = {currtime}</p>
  </>
,
  document.getElementById('root')
);

