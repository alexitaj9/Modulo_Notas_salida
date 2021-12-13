//Declarar
const express = require("express");
const server = express();
//const notasSalida = require("./notasSalidaMdl");
var notasSalida = { "_id": "1234", "nombre": "duban" };


//Convert to json
server.use(express.json());

//Notas Salida
server.use("/notasSalida", function(request, response) {
    response.send(notasSalida);
});

//Global
server.use("/", function(request, response) {
    //Print
    response.send("Bienvenido.");
});

//Iniciar servicio
server.listen(4000, () => {
    console.log("Server started");
})