import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    /*Modulos*/
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*
//Create const
const express = require("express");
const server = express();
const usuarios = require("./modelos/usuariosMdl");

//Set parser
server.use(express.json());

//GET API username
server.use("/modelos/usuariosMdl", usuarios);

//GET API Global
server.use("/", function(request, response) {
    //Print
    response.send("Hola Mundo!");
});


//Server start
server.listen(4000, () => {
    //Log
	console.log("Server Started");
});
*/
