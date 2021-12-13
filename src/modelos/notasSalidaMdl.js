//Declarar
const express = require("express");
const router = express.Router();
const mongodb = require("./db");

//MongoDB functions
mongodb.connection(function (collection) {
    //Seleccionar coleccion
    collection.s.namespace.collection = 'notasSalida';
    
    //Get request
    router.get("/", function(request, response) {
        
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
    router.get("/:consecutivo", function(request, response) {
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
    router.post("/", function(request, response) {
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
    router.put("/:consecutivo", function(request, response) {
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
    router.delete("/:consecutivo", function(request, response) {
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
    router.delete("/", function(request, response) {
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

//Exportar
module.exports = router;