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
//父组件传值给子组件
Router.get('/communication', function(req, res, next){
   res.render('learn/communication')
})
Router.get('/multi-communication', function (req, res, next) {
   res.render('learn/multi-communication')
})

//子组件传值给父组件（自定义事件$on监听, $emit触发）
Router.get('/event', function(req, res, next){
   res.render('learn/event')
})

//自定义组件的v-model
Router.get('/v-model', function(req, res, next){
   res.render('learn/v-model');
}) 

//插槽-slot
Router.get('/anony-slot', function(req, res, next){
   res.render('learn/anony-slot')
})
Router.get('/name-slot', function(req, res, next){
   res.render('learn/name-slot')
})

//keep-alive
Router.get('/keep-alive', function(req, res, next){
   res.render('learn/keep-alive')
})

//路由
Router.get('/router', function(req, res, next){
   res.render('learn/router');
});





module.exports = Router;