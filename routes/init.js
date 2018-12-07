'use strict';
var index = require('./pages/index');
var Simple = require('./pages/simple');
var search = require('./pages/search');
var learn = require('./pages/learn');

module.exports = function(app) {
    app.use('/', index);
    app.use('/simple', Simple);
    app.use('/search', search);
    app.use('/learn', learn);

    app.get('/vuex', function(req, res, next){
      res.render('pages/vuex')
    })

    app.get('/router', function(req, res, next){
      res.render('pages/router')
    })

};