//Declarar
const express = require("express");
const server = express();
const mongodb = require("./db");

//Convert to json
server.use(express.json());

//MongoDB functions
mongodb.connection(function (collection) {
    //Get request
    server.get("/notasSalida", function(request, response) {
        //Consulta
        collection.find().toArray((error, notasSalida) => {
            if (error) {
                //Print error
                throw error;
            }
            else {
                //Return
                response.json(notasSalida);
            }
        });
    });

    //Get request consecutivo
    server.get("/notasSalida/:consecutivo", function(request, response) {
        //Capturar consecutivo
        let consecutivo = parseInt(request.params.consecutivo);

        //Consulta
        collection.findOne({ "Consecutivo": consecutivo }, (error, notasSalida) => {
            //Control error
            if (error) {
                //Print error
                throw error;
            }
            else {
                //Return
                response.json(notasSalida);
            }
        });
    });

    //Post request
    server.post("/notasSalida", function(request, response) {
        //Create const
        let notaSalida = request.body;

        //Registrar empleado
        collection.insertOne( notaSalida , (error, result) => {
            //Errors control
            if (error) {
                //Print
                throw error;
            }
            else {
                //Print
                response.sendStatus(201);
            }
        });
    });

    //Put request
    server.put("/notasSalida/:consecutivo", function(request, response) {
        //Capturar datos
        let consecutivo = parseInt(request.params.consecutivo);
        let nuevosDatos = request.body;

        //Actualizar
        collection.updateOne({ "Consecutivo": consecutivo }, { $set: nuevosDatos }, (error, status) => {
            //Control error
            if (error) {
                //Print error
                throw error;
            }
            else {
                //Return
                response.sendStatus(200);
            }
        });
    });

    //Delete request
    server.delete("/notasSalida/:consecutivo", function(request, response) {
        //Capturar datos
        let consecutivo = parseInt(request.params.consecutivo);

        //Eliminar
        collection.deleteOne({ "Consecutivo": consecutivo }, (error, status) => {
            //Control error
            if (error) {
                //Print error
                throw error;
            }
            else {
                //Return
                response.sendStatus(200);
            }
        });
    });

    //Delete request
    server.delete("/notasSalida", function(request, response) {
        //Eliminar
        collection.deleteMany({ }, (error, status) => {
            //Control error
            if (error) {
                //Print error
                throw error;
            }
            else {
                //Return
                response.sendStatus(200);
            }
        });
    });
});

server.listen(4000, () => {
    console.log("Server started");
})
