/*******************************************************************
 * Setup
 *******************************************************************/

 const express = require('express');
 const morgan = require('morgan');
 const bodyParser = require('body-parser');
 const path = require('path');
 const compression = require('compression');
 const request = require('request');

/*******************************************************************
 * Server Configuration
 *******************************************************************/

 const server = express();                                              // Create server with express
 server.use(compression());                                             // Equivalent to gzip compression for app
 server.use(morgan('short'));                                           // Log every request to console
 server.use(bodyParser.urlencoded({ 'extended' : 'true'}));
 server.use(bodyParser.json());
 server.use(bodyParser.json({ type: 'application/vnd.api+json' }));

/*******************************************************************
 * Command Line Args
 *******************************************************************/

// Default values
let PORT = 9999;

const arg_port = process.argv.find(value => value.includes('port='));

// Alternative port is given as run argument
if(arg_port)
    PORT = arg_port.split('=')[1];

/*******************************************************************
 * General API
 *******************************************************************/

server.set('port', PORT);

server.get('/api', (req, res) => {
    res.status(200).json({
        "success" : true,
        "data" : null,
        "message" : "Welcome to the Crypto Pricing Service!"
    });
});

/*******************************************************************
 * Run Server
 *******************************************************************/

 server.listen(process.env.PORT || PORT, () => {

    console.log('============ Crypto Pricing Service is now live ============');

 });