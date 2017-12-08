
'use strict';
const fs = require('fs');
const path = require('path');
const type = function(type) {
    return function(data) {
        return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === (type).toLowerCase();
    };
};
const isObj = type('object');

module.exports = {
    isObj: isObj,

    json2str: function(json) {
        return isObj(json) || Array.isArray(json) ? JSON.stringify(json) : json;
    },

    replaceQueryString: function(url, param, value) {
        let reg = new RegExp('([?|&])' + param + '=.*?(&|$)', 'i');
        if (url.match(reg)) {
            return url.replace(reg, '$1' + param + '=' + value + '$2');
        } else {
            return url + (/\?/.test(url) ? '&' : '?') + param + '=' + value;
        }
    },

    extend: function extend(a, b) {
        isObj(b) && Object.keys(b).map((key) => {
            if (isObj(a[key]) && isObj(b[key])) {
                extend(a[key], b[key]);
            } else if (Array.isArray(b[key])) {
                a[key] = [].concat(b[key]);
            } else {
                if (isObj(b[key])) {
                    a[key] = extend({}, b[key]);
                } else {
                    a[key] = b[key];
                }
            }
        });
        return a;
    },

    slash: function(str) {
        if (/^\\\\\?\\/.test(str) || /[^\x00-\x80]+/.test(str)) {
            return str;
        }
        return str.replace(/\\/g, '/');
    },

    getFiles: function(dir, callback) {
        if (fs.statSync(dir).isDirectory()) {
            let files = fs.readdirSync(dir);
            files.forEach(function(name) {
                let _path = path.join(dir, name);
                fs.statSync(_path).isDirectory() ? this.getFiles(_path, callback) : callback(_path);
            }.bind(this));
        } else {
            callback(dir);
        }
    },

    mkdir: function(dir, callback) {
        let mkdir = function(p, opts, made) {
            if (!opts || typeof opts !== 'object') {
                opts = {
                    mode: opts || function(err) {
                        console.log(res);
                    }
                };
            }
            if (!made) made = null;
            p = path.resolve(p);
            try {
                fs.mkdirSync(p, opts.mode);
                made = made || p;
            } catch (err0) {
                switch (err0.code) {
                    case 'ENOENT':
                        made = mkdir(path.dirname(p), opts, made);
                        mkdir(p, opts, made);
                        break;
                    default:
                        let stat;
                        try {
                            stat = fs.statSync(p);
                        } catch (err1) {
                            throw err0;
                        }
                        if (!stat.isDirectory()) throw err0;
                        break;
                }
            }
            return made;
        };
        mkdir(path.dirname(dir), callback);
    },

    writeFile: function(filePath, content, callback) {
        this.mkdir(filePath, function(err) {
            if (err) {
                return callback(err)
            }
        });
        fs.writeFile(filePath, content, callback);
    }
};
