console.log("It's alive!");

// import express from 'express'; // ES2015 module syntax

const express = require('express'); // CommonJS modules

const Hubs = require('./data/hubs-model.js'); // our Hubs database library

const server = express();

// routes or endpoints

// GET to "/"
server.get("/", function(req, res) {
    res.send({ Hello:  'WEB25!' });
});

// set a list of Hubs
server.get('/api/hubs', function(req, res) {
    // read the data from the database (Hubs)
    Hubs.find() // returns a promise
        .then(hubs => {
            res.status(200).json(hubs);
        })
        .catch(err => {
            console.log(err);
            // handle the error
            res.status(500).json({ errorMessage: "Sorry, we ran into an error getting the list of hubs."})
        })
})


// create a Hub

// delete a Hub

// update a Hub


const port = 8000;
server.listen(port, () => console.log(`\n ** api on port: ${port} ** \n`));

// fork > clone > type: "npm i" to get all the dependencies
// type: "npm i express" to install the express library
// add the index.js file with code the root folder
// to run the server type: "npm run server"
// make a GET request to localhost:8000 using Postman or Insomnia

// to solve the sqLite3 error just do the "npm i sqlite3"