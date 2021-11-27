//Create const
const express = require('express');
const mongodb = require("./db");
const router = express();
//const server = express();

// Load enviroment variables from .env file
require('dotenv').config();

//Set parser
router.use(express.json());

//Connect to database
mongodb.connection(function(collection) {
    //Get API global
    router.get("/usuarios", function(request, response) {
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
    router.get("/usuarios/:identify", function(request, response) {
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
    router.post("/usuarios", function(request, response) {
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
    router.put("/usuarios/:id", function(request, response) {
        //Create const
        const usuariosMdlIdentify = request.params.id;
        const newDataUsuariosMdl = request.body;

        //console.log(usuariosMdlIdentify);   
        //Update
        collection.updateOne({ "Identificacion" : usuariosMdlIdentify }, { $set : newDataUsuariosMdl }, (error, result) => {
            //console.log(newDataUsuariosMdl);     
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

    /* The application by requirements does not allow users to be deleted.
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
    });*/
});

//Exports
module.exports = router;

//Server start
router.listen(3000, () => {
    //Log
	console.log("Server Started");
});