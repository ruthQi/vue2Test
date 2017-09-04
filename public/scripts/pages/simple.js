import Vue from 'vue';

var example = new Vue({
   el: '#example1',
   data: {
      message: 'Hello Vue!'
   }
})

var app2 = new Vue({
   el: '#app-2',
   data: {
      message: '页面加载于 ' + new Date().toLocaleString()
   }
})

//条件与循环
var app3 = new Vue({
   el: '#app-3',
   data: {
      seen: true
   }
})
//循环遍历
var app4 = new Vue({
   el: '#app-4', 
   data: {
      todos: [
         {'text':'学习Java'},
         {'text':'学习JavaScript'},
         {'text':'学习Android'}
      ]
   }
});

//处理用户输入
var app5 = new Vue({
   el: '#app-5',
   data: {
      message: 'Hello Vue!'
   },
   methods: {
      reverseMessage: function(){//不能使用箭头函数，否则this指向不正确
         this.message = this.message.split('').reverse().join('');
      }
   }
})

//双向绑定
var app6 = new Vue({
   el: '#app-6',
   data: {
      message: 'Hello Vue!'
   }
});

//组件

Vue.component('todo-item', {
   props: ['todo'],
   template: '<li>{{todo.text}}</li>'
});

var app7 = new Vue({
   el: '#app-7',
   data: {
      items: [
         {id: '1', text: '蔬菜'},
         {id: '2', text: '香蕉'},
         {id: '3', text: 'apple'},
         {id: '4', text: 'orange'}
      ]
   }
})

