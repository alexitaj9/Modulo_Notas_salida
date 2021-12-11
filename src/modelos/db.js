//Create const
const mongodb = require("mongodb");
const mongodbClient = mongodb.MongoClient;
const uri = "mongodb+srv://grupo-h:po0svWY7u0jxqpC4@mintic.9z7mi.mongodb.net/?retryWrites=true&w=majority";//process.env.DB;
const databaseName = "notas_de_salida";
const collectionName = "test";

//Connect to database
function connection(successCallBack, failureCallBack) {
    //Execute connection
    mongodbClient.connect(uri, function (error, databaseInstance) {
        //Connection control
        if(error) {
            //Log
            console.log("MongoDB error: " + error)
        }
        else {
            //Create const
            const database = databaseInstance.db(databaseName);
            const collection = database.collection(collectionName);
            
            //Log
            console.log("MongoDB information: Connection done");

            //Callback
            successCallBack(collection);
        }
  });
}

//Exports
module.exports = { connection };