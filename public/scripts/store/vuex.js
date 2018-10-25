import Vue from 'vue';
import Vuex from 'vuex';
import {INCREMENT, DECREMENT} from './mutation-types';

Vue.use(Vuex);

const state = {
   count: 0
}

const actions = {
   increment({commit, state}, num){
      //console.log(state)
      commit('increment', num);
      //方式2
      //commit('INCREMENT', num);
   },
   decrement({commit, state}, num){
      //console.log(state)
      commit('decrement', num);
      //方式2
      //commit('DECREMENT', num);
   }
}

const mutations = {
   increment(state, num) {
      state.count += num;
   },
   decrement(state, num) {
      state.count -= num;
   }
   //================方式2
   // [INCREMENT](state, num){
   //    state.count += num;
   // },
   // [DECREMENT](state, num){
   //    state.count -= num;
   // }
}

export default new Vuex.Store({
   state,
   actions,
   mutations
})