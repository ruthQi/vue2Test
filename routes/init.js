'use strict';
var index = require('./pages/index');
var Simple = require('./pages/simple');

module.exports = function(app) {
    app.use('/', index);
    app.use('/simple', Simple);

};