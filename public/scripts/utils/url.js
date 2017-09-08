/**
* @description：
* @author: maoyh@corp.netease.com
*/
'use strict';
const Url = {
    query: function(queryStr) {
        let query, obj = {};
        query = queryStr.substring(queryStr.indexOf('?') + 1);
        // let idx = queryStr.indexOf('?');
        // if (idx === -1) {
        //    return obj;
        // }
        // query = queryStr.substring(idx + 1);
        query && query.split('&').forEach(function(item) {
            let kv = item.split('=');
            obj[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1])
        });
        return obj;
    },

    val: function(name) {
        let query = window.location.search;
        return query ? decodeURIComponent((query.substring(query.indexOf('?') + 1).match(new RegExp('(?:(?:^|&)' + name + '=)([^&]*)')) || ['', ''])[1]) : '';
    },

    parse: function(data, flag) {
        let arr = [];
        if(!data){
            return flag ? '?' : '';
        }
        else if (Object.prototype.toString.call(data) == "[object Object]") {
            for (let k in data) {
                data.hasOwnProperty(k) && arr.push(encodeURIComponent(k) + '=' + encodeURIComponent(data[k]));
            }
            return flag ? '?' + arr.join('&') : arr.join('&');
        } else {
            return flag ? '?' + data : data;
        }
    }
};
export default Url;