'use strict'

var express = require('express');
var app = express();

//minify files
app.use(mollify({
    dir: './',
    is: true // default
}));
//setup view-engine
app.set('view engine', 'pug');
//setup session
app.use('*',(req, res, next)=>{
    var sess = req.session;
})
//setup pages
//serve posts
//serve login/signup page
app.get('/login',(req, res)=> {
    
})
//serve static files
app.use('/files', express.static('./files'));
//setup local api
var localapi = require('./routes/api/local.js');
app.use('/api/local/v1', localapi);
//setup external api
var externalapi = require('./routes/api/external.js');
app.use('/api/v1', externalapi);

var port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("Server listening port " + port);
})