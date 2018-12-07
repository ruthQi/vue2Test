import Vue from 'vue';
import Router from 'vue-router';

//组件
import Main from '../components/router/Main';

Vue.use(Router);

//定义路由
const routes = [
   {path: '/', component: Main}
];

//创建router实例
const router = new Router({
   // mode: 'history',
   routes
});

export default router;