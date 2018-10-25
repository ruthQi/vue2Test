<template>
   <div class="wrapper">
      这是计数器：
      <button class="button" @click="decrement">-</button>
      <span>{{count}}</span>
      <button class="button" @click="increment">+</button>
   </div>
</template>
<script>
export default {
   name: 'App',
   computed: {
      count(){
         return this.$store.state.count;
      }
   },
   methods: {
      increment(){
         this.$store.dispatch('increment', 2)
      },
      decrement(){
         this.$store.dispatch('decrement', 1)
      }
   }
}
</script>


