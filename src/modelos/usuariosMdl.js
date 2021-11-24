//Create const
const express = require('express');
const mongodb = require("./db");
const router = express.Router();

//Connect to database
mongodb.connection(function(collection) {
    //Get API global
    router.get("/", function(request, response) {
        //Find all documents
        collection.find().toArray((error, usuariosMdl) => {
            //Errors control
            if (error) {
                //Print
                throw error;
            }
            else {
                //Print
                response.json(usuariosMdl);
            }
        });
    });

    //Get API identify
    router.get("/:identify", function(request, response) {
        //Create const
        let usuariosMdlIdentify = parseInt(request.params.identify);

        //Search Username
        collection.findOne({ "identify" : usuariosMdlIdentify }, (error, usuariosMdl) => {
            //Errors control
            if (error) {
                //Print
                throw error;
            }
            else {
                //Print
                response.status(200).json(usuariosMdl);
            }
        });
    });

    //POST API
    router.post("/", function(request, response) {
        //Create const
        const usuariosMdl = request.body;

        //Registrar Username
        collection.insertOne( usuariosMdl , (error, result) => {
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

    //PUT API
    router.put("/:identify", function(request, response) {
        //Create const
        const usuariosMdlIdentify = parseInt(request.params.identify);
        const newDataUsuariosMdl = request.body;

        //Update
        collection.updateOne({ "identify" : usuariosMdlIdentify }, { $set : newDataUsuariosMdl }, (error, result) => {
            //Errors control
            if (error) {
                //Print
                throw error;
            }
            else {
                //Print
                response.sendStatus(200);
            }
        });
    });

    //DELETE ALL API
    router.delete("/", function(request, response) {
        //Delete Username
        collection.deleteMany({ }, (error, result) => {
            //Errors control
            if (error) {
                //Print
                throw error;
            }
            else {
                //Print
                response.sendStatus(200);
            }
        });
    });

    //DELETE API
    router.delete("/:identify", function(request, response) {
        //Catch identify
        let usuariosMdlIdentify = parseInt(request.params.identify);

        //Delete Username
        collection.deleteOne({ "identify" : usuariosMdlIdentify }, (error, result) => {
            //Errors control
            if (error) {
                //Print
                throw error;
            }
            else {
                //Print
                response.sendStatus(200);
            }
        });
    });
});

//Exports
module.exports = router;