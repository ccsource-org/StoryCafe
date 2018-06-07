'use strict'

var express = require('express');
var app = express();

//setup pages
//serve posts
//serve login/signup page
//serve static files
app.use('/files', express.static('./files'));
//setup local api
var localapi = require('./routes/api/local.js');
app.use('/api/local/v1', localapi);
//setup external api
var externalapi = require('./routes/api/external.js');
app.use('/api/v1', externalapi);

var port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("Server listening port "+port);
})