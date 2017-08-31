'use strict';

var express = require('express');
var Router = express.Router();

Router.get('/', function(req, res, next) {
    res.render('pages/simple');
});

module.exports = Router;