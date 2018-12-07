import Vue from 'vue';
import App from '../components/router/App.vue';
import router from '../router/index';

new Vue({
   el:'#app',
   router,
   components: {App},//注册局部组件
   template: '<App/>'
})