import Vue from 'vue';
import _ from 'lodash';
import axios from 'axios';

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
});

var app8 = new Vue({
   el: '#app-8',
   data: {
      message: 'Hello',
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar'
   },
   /*
   对于最终的结果，两种方式确实是相同的。
   然而，不同的是计算属性是基于它们的依赖进行缓存的。
   计算属性只有在它的相关依赖发生改变时才会重新求值。
   这就意味着只要 message 还没有发生改变，
   多次访问 reversedMessage 计算属性会立即返回之前的计算结果，
   而不必再次执行函数。

   method方式调用每当触发重新渲染时，总是会再次执行函数
   */
   computed: {
      reversedMessage: function(){
         return this.message.split('').reverse().join('');
      },
      fullNameF: function(){
         //getter方法
         return this.firstName + ' ' + this.lastName;
      }
   },
   methods: {
      reverseMessage: function(){
         return this.message.split('').reverse().join('');
      }
   },
   watch: {
      firstName: function(val){
         this.fullName = val + ' '+ this.lastName
      },
      lastName: function(val){
         this.fullName = this.firstName + ' ' + val;
      }
   }
})
//观察者
var watch = new Vue({
   el: '#watch-example',
   data: {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
   },
   watch: {
      question: function(newQuestion){
         this.answer = 'Waiting for you to stop typing...'
         this.getAnswer();
      }
   },
   methods: {
      getAnswer: _.debounce(
         function () {
           if (this.question.indexOf('?') === -1) {
             this.answer = 'Questions usually contain a question mark. ;-)'
             return
           }
           this.answer = 'Thinking...'
           var vm = this
           axios.get('https://yesno.wtf/api')
             .then(function (response) {
               vm.answer = _.capitalize(response.data.answer)
             })
             .catch(function (error) {
               vm.answer = 'Error! Could not reach the API. ' + error
             })
         },
         // 这是我们为用户停止输入等待的毫秒数
         500
    )
   }
});

//=========================================================

var ifExample = new Vue({
   el: '#app-9',
   data: {
      type: 'A'
   }
});

var app10 = new Vue({
   el: '#app-10',
   data: {
      loginType: 'username',
      isShow: false
   },
   methods: {
      changeType: function(){
         this.loginType = this.loginType == 'username' ? 'email' : 'username';
      }
   }
})
//========================================================

var app11 = new Vue({
   el: '#app-11',
   data: {
      object: {
         firstName: 'John',
         lastName: 'Doe',
         age: 30
      },
      msg: 'hello',
      numbers: [1,2,3,4,5],
      todos: [
         {num: 1, isComplete: true},
         {num: 2, isComplete: false},
         {num: 3, isComplete: false},
         {num: 4, isComplete: true}
      ]
   },
   computed: {
      eventNumbers: function(){
         return this.numbers.filter(function (number) {
            return number % 2 === 0
         })
      }
   }
});
app11.msg1 = 'vue';//app11.msg1不是响应式的
//对于已经创建的实例，Vue 不能动态添加根级别的响应式属性。
//但是，可以使用 Vue.set(object, key, value) 方法向嵌套对象添加响应式属性。
//或this.$set(this.userProfile, 'age', 27)
//或 
/*this.userProfile = Object.assign({}, this.userProfile, {
  age: 27,
  favoriteColor: 'Vue Green'
})*/
Vue.component('todo-item', {
   template: '<li>{{title}}<button v-on:click="$emit(\'remove\')">X</button></li>',//'<li>{{title}}<button v-on:click="removeTodo()">X</button></li>',
   props: ['title'],
   methods: {
      removeTodo: function(){
         this.$emit('remove');
      }
   }
})
var app12 = new Vue({
   el: '#app-12',
   data: {
      newTodoText: '',
      todos: [
         {
            id: 1,
            title: 'Do the dishes',
         },
         {
            id: 2,
            title: 'Take out the trash',
         },
         {
            id: 3,
            title: 'Mow the lawn'
         }
      ],
      nextTodoId: 4
   },
   methods: {
      addNewTodo: function(){
         this.todos.push({
            id: this.nextTodoId++,
            title: this.newTodoText
         });
         this.newTodoText = '';
      }
   }
})

//==========================================================
var app13 = new Vue({
   el: '#app-13',
   data: {
      count: 0,
      name: 'Vue.js'
   },
   methods: {
      green: function(event){
         alert('Hello '+this.name+'!');
         if(event){
            alert(event.target.tagName)
         }
      },
      say: function(message, event){
         if(event){
            event.preventDefault();
         }
         alert(message)
      }
   }
})

//============================================================

var app14 = new Vue({
   el: '#app-14', 
   data: {
      age: '',
      message: '',
      multiMessage: '',
      checked: true,
      checkedNames: [],
      picked: '',
      selected: '',
      selectedMulti: [],
      forSelected: '',
      options: [
         {text: 'One', value: 'A'},
         {text: 'Two', value: 'B'},
         {text: 'Three', value: 'C'},
      ]
   },
   methods: {

   }
})
//====================================================
//全局组件
Vue.component('my-component', {
   template: '<div>This is A component</div>'
});
//局部组件
var myComponent = {
   //props: ['msg', 'arr'],
   props: {
      msg: {
         type: String,
         required: true
      },
      arr: Array
   },
   template: '<div><p>This is B component</p><button v-on:click="counter += 1">{{counter}}</button><p>{{changeLetter}}</p></div>',
   data: function(){//组件中的data必须为函数
      return {
         counter: 0
      }
   },
   computed: {
      changeLetter: function(){
         //父组件传给子组件的值为对象或数组时，子组件改变值时，父组件的值也会随着改变
         this.arr.push('task3');
         return this.msg.toUpperCase();
      }
   }
}
var Counter = {
   template: '<button v-on:click="incrementCounter">{{counter}}</button>',
   data: function(){
      return {
         counter: 0
      }
   },
   methods: {
      incrementCounter: function(){
         this.counter++;
         this.$emit('increment');
      }
   }
}
var app15 = new Vue({
   el: '#app-15',
   data: {
      parentMsg: '',
      parentArr: ['task1', 'task2'],
      total: 0
   },
   components: {
      'my-component': myComponent,
      'button-counter': Counter
   },
   methods: {
      incrementTotal: function(){
         this.total ++;
      }
   }
})


var slotComponent = {
   template: '#slot-template'
}
var app16 = new Vue({
   el: '#app-16',
   components: {
      'slot-component': slotComponent
   }
})
