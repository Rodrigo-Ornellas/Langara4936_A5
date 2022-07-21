const express = require('express');
const app = express();

const connected = require('./connection.js')

connected
    .then(() => {
        console.log('    Mongo connected');
        // Starts the Server on port 8081
        const server = app.listen(8082, () => {
            console.log('... Listening on port 8082 ...\n');
        })
    });


// Static Middleware - Public Folder
app.use(express.static('public'));

// Parses the body of the request and allows us to access this data as key, value pairs
app.use(express.urlencoded({ extended: true }))