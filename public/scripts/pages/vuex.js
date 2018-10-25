import Vue from 'vue';
import store from '../store/vuex';
import App from '../components/vuex/App';
new Vue({
   el:'#vuexApp',
   store,
   components: {App},
   modules: {},//定义的模块，state是局部的，actions,getter是全局的，如果想设置为局部访问，使用namespaced:true
   template: '<App/>'
})