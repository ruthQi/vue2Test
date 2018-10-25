import Vue from 'vue';
import store from '../store/vuex';
import App from '../components/vuex/App';
new Vue({
   el:'#vuexApp',
   store,
   components: {App},
   template: '<App/>'
})