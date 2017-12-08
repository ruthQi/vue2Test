
'use strict';

import uri from 'utils/uri';


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
