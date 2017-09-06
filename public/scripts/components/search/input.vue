<template>
   <div id="search-input" class="search-input">
      <input v-model="msg"/>
   </div>
</template>

<script>
   export default {

      data(){
         return{
            msg: ''
         }
      }
   }

</script>

<style type="text/css">
   .search-input{
      width: 100%;
      height: 100px;
   }
</style>