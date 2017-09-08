/**
 * @author: zqzhai
 * @description：
 *
 */
'use strict';

import uri from 'utils/uri';

/**
 *
 * @param params
 *  {
 *   "method":"get", ///get post delete请求方法
 *    "url": "https://live.ent.163.com/api/userInfo",//请求地址,也可以/api/userInfo
 *    "data": {      //请求参数
 *       a : 1
 *    }
 *  }
 *
 */

//
let get = (input, data = {}, json = true, init = {}) => {

   return uri.get(input, data, json, init);
   
};

let post = (input, data = {}, json = true, init = {}) => {

   
   return uri.post(input, data, json, init);
};

let del = (input, data = {}, json = true, init = {}) => {

   
   return uri.del(input, data, json, init);
};

export default {
   get,
   post,
   del
}