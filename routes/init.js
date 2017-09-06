'use strict';
var index = require('./pages/index');
var Simple = require('./pages/simple');
var search = require('./pages/search');

module.exports = function(app) {
    app.use('/', index);
    app.use('/simple', Simple);
    app.use('/search', search);

};