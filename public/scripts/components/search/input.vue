<template>
   <div id="search-input" class="search-input">
      <div class="s-input-content">
         <input v-model="msg" v-on:input="changeInput" placeholder="请输入昵称"/>
         <em class="icon-search"></em>
         <em v-show="isShow" class="icon-clear" v-on:click="clearMsg"></em>
      </div>
      <span class="s-cancel">取消</span>
   </div>
</template>

<script>
   import _ from 'lodash';
   import search from 'models/search';

   export default {
      
      data(){
         return{
            isShow: false,
            msg: ''
         }
      },
      methods: {
         changeInput: _.debounce(function(){
            if(this.msg.length > 0){
               this.isShow = true;
            }
            search.user(this.msg, 1, 20).then((res)=>{
               console.log(res)
            })
         }, 300),
         clearMsg: function(){
            this.msg = '';
            this.isShow = false;
         }
      }
   }

</script>