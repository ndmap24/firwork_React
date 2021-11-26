const express = require("express");
const path = require("path");
const fileUpload = require('express-fileupload');
const httpreq = require('http');
const server = require('https');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const crypto = require('crypto');
const url = require('url');
const mongoose = require('mongoose');  
const services = require('./services/service');
const helpers = require("./helpers/helpers");
var request = require("request"); 

const app = express();
const router = express.Router();   

/**** Set path for static assets *****/
app.use(express.static(__dirname, { dotfiles: 'allow' } ));
app.use(express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(fileUpload()); 

/**** Set headers ****/
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST,HEAD, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,token,Accept,Authorization');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);
    // Pass to next layer of middleware
    next();
});

/*** routitng statrt here ****/
app.use("/admin",require('./controllers/api/admin.controller'));
app.use("/user",require('./controllers/api/user.controller'));

// for Local sesrver use
const port = process.env.PORT || 5000;

var server_req = httpreq.createServer(app).listen(port,()=>{
    console.log('Server running on port ',port);
});



