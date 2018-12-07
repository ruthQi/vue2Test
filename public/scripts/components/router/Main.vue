<template>
   <div class="home-container">
      <ul class="slide-bar">
         <li>Home</li>
      </ul>
      <div class="content">
         <router-view></router-view>
      </div>
   </div>
</template>
<script>
   export default {
      name: 'main',
      data(){
         return{

         }
      },
      created() {
         console.log('00000000000000')
      },
   }
</script>