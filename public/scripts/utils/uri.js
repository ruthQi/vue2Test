'use strict';

import url from 'utils/url'

/**
 *
 * @param input 定义要获取的资源。这可能是：一个 USVString 字符串，包含要获取资源的 URL。一个 Request 对象。
 * @param init 可选
 * 一个配置项对象，包括所有对请求的设置。可选的参数有：
 * method: 请求使用的方法，如 GET、POST。
 * headers: 请求的头信息，形式为 Headers 对象或 ByteString。
 * body: 请求的 body 信息：可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息。
 * mode: 请求的模式，如 cors、 no-cors 或者 same-origin。
 * credentials: 请求的 credentials，如 omit、same-origin 或者 include。
 * cache:  请求的 cache 模式: default, no-store, reload, no-cache, force-cache, or only-if-cached.
 * redirect: The redirect mode to use: follow (automatically follow redirects), error (abort with an error if a redirect occurs), or manual (handle redirects manually). In Chrome the default was follow before Chrome 47 and manual starting with Chrome 47.
 * referrer: A USVString specifying no-referrer, client, or a URL. The default is client.
 * referrerPolicy: Specifies the value of the referer HTTP header. May be one of no-referrer, no-referrer-when-downgrade, origin, origin-when-cross-origin, unsafe-url.
 * integrity: Contains the subresource integrity value of the request (e.g., sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=).
 * @returns {Promise.<*>}
 */
async function request(input, init) {
   return await fetch(input, init);
}

const headers = {
   'Accept': 'application/json',
   'Content-Type': 'application/x-www-form-urlencoded'
};

function getUrl(url) {
   // return url;
   //return /https?:\/\//.test(url) ? url : CONFIG.origin + url;
   return /^(\/\/)|^https?/.test(url) ? url : CONFIG.origin + url;
}

async function get(input, data = {}, json = true, init = {}) {
   input = getUrl(input);
   input.indexOf('?') == -1 && (input += '?');
   input += url.parse(data, false);
   var result = request(input, Object.assign({
      method: 'GET',
      credentials: 'include',
      mode: 'cors'
   }, init));
   return json ? result.then((res) => {return res.json()}) : result;
}

async function post(input, body = {}, json = true, init = {}) {
   input = getUrl(input);
   var result = request(input, Object.assign({
      method: 'POST',
      headers,
      body : url.parse(body, false),
      credentials: 'include',
      mode: 'cors'
   }, init));
   return json ? result.then((res) => {return res.json()}) : result;
}

async function del(input, data = {}, json = true, init = {}) {
   input = getUrl(input);
   input.indexOf('?') == -1 && (input += '?');
   input += url.parse(data, false);
   var result = request(input, Object.assign({
      method: 'DELETE',
      credentials: 'include',
      mode: 'cors'
   }, init));
   return json ? result.then((res) => {return res.json()}) : result;
}


export default {
   request,
   get,
   post,
   del
}