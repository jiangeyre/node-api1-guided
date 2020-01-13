console.log("It's alive!");

// import express from 'express'; // ES2015 module syntax

const express = require('express'); // CommonJS modules

const server = express();

// routes or endpoints

// GET to "/"
server.get("/", function(req, res) {
    res.send({ Hello:  'WEB25!' });
})



const port = 8000;
server.listen(port, () => console.log(`\n ** api on port: ${port} ** \n`));
