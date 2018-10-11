'use strict';

var express = require('express');
var Router = express.Router();

Router.get('/', function (req, res, next) {
   res.render('learn/index');
});

Router.get('/v-once', function(req, res, next){
   res.render('learn/v-once')
});

Router.get('/v-if', function (req, res, next) {
   res.render('learn/v-if')
});

Router.get('/v-show', function (req, res, next) {
   res.render('learn/v-show')
});

Router.get('/else', function (req, res, next) {
   res.render('learn/else')
});

Router.get('/v-for', function (req, res, next) {
   res.render('learn/v-for')
});

Router.get('/v-text', function (req, res, next) {
   res.render('learn/v-text')
});

Router.get('/v-bind', function (req, res, next) {
   res.render('learn/v-bind')
});



module.exports = Router;