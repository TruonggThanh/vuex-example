import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: 'Developer'
  },
  getters: {
    name: state => state.name
  },
  mutations: {
    setName(state, name) {
      state.name = name
    }
  },
  actions: {
    updateProfile(context){
      context.commit('setName', 'Solution Architect')
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
