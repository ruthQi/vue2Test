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

Router.get('/v-on', function (req, res, next) {
   res.render('learn/v-on')
});

Router.get('/exercise', function (req, res, next) {
   res.render('learn/exercise')
});

Router.get('/computed', function (req, res, next) {
   res.render('learn/computed')
});
//全局组件
Router.get('/globalCom', function (req, res, next){
   res.render('learn/globalCom');
});
//局部组件
Router.get('/localCom', function (req, res, next) {
   res.render('learn/localCom');
});
//父子组件
Router.get('/parentCom', function (req, res, next){
   res.render('learn/parentCom')
})
//template和script模板
Router.get('/template', function(req, res, next){
   res.render('learn/template')
})
Router.get('/script', function(req, res, next){
   res.render('learn/script')
})
//父子组件通信
Router.get('/communication', function(req, res, next){
   res.render('learn/communication')
})
Router.get('/multi-communication', function (req, res, next) {
   res.render('learn/multi-communication')
})



module.exports = Router;