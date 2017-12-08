
'use strict';
const path = require('path');
const webpack = require('webpack');
const utils = require('./utils');

module.exports = function (conf, env) {
    let filelist = [],
        entry = {
            common: conf.commonjs
        };
    let _path = path.resolve(process.cwd(), conf.src);
    utils.getFiles(_path, function (_path) {
       /.(jsx?|scss)$/.test(_path) && filelist.push(_path);
    });
    filelist.forEach(function (item) {
        let arr = utils.slash(item).match(conf.regexp);
        entry[arr[1]] = ['.' + arr[0]];
    });
    filelist = null;

    return {
        cache: false,
        context: path.join(process.cwd(), ''),
        entry: entry,
        output: {
            path: path.join(process.cwd(), conf.dist),
            filename: '[name].js'
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: [path.resolve('./public/scripts/'), path.resolve('./public/scss/'), path.resolve('./node_modules/')]
        },
        plugins: [new webpack.DllPlugin({
            path: path.join(process.cwd(), conf.dist, '[name]-manifest.json'),
            name: '[name]'
        })]
    };
};
