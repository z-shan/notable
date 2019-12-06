'use strict';

// Set NODE_PATH to find modules relative to root path
process.env['NODE_PATH'] = './:./app:./app/src:./src';
require('module').Module._initPaths();

const express = require('express'),
    path = require('path');    

const app = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose'),
    config = require('config/conf.json'), // get our config file
    logger = require('logger').logger;

// configuration 
var port = process.env.PORT || config.server.port;
mongoose.connect(config.database.protocol+config.database.username+':'+config.database.password+'@'+config.database.host+':'+config.database.port+'/'+config.database.name, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// serve static FE files after deploy from ng build
app.use('/client', express.static(path.resolve(__dirname, '../../../dist/client')));

app.use(require('request-id-middleware'));

app.use('/api/appointments', require('routes/appointmentRoutes')(require('models/appointment'), logger));
app.use('/api/physicians', require('routes/physicianRoutes')(require('models/physician'), logger));


process.on('uncaughtException', function(error) {
    logger.error('Uncaught Exception', error);
});

app.listen(port, function(err) {
    logger.info('server started on port', port);    
    if(err) {        
        logger.error('Error while starting the server', err);
    }
});
