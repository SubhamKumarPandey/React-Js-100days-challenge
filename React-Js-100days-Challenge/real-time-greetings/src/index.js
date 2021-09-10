import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

let currdate= new Date();
currdate=currdate.getHours();
let greetings="";
const dynamic={ };
if(currdate>=1 && currdate<12){
 greetings="Guten Morgen";
 dynamic.color='green';
}else if(currdate>=12 && currdate<20){
  greetings="Guten Abend";
  dynamic.color='red';
}
else{
  greetings="Guten Nacht";
  dynamic.color='gray';
}

ReactDOM.render(
  <h1> Hallo !! <span style={dynamic}> {greetings} </span></h1>,
  document.getElementById("root")
);