import Vue from 'vue'
import Vuex from 'vuex'
import juegos from '@/assets/juegos.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: juegos
    
  },
  getters: {
    getHeader: state=>{
      let header
      state.products.forEach(product => {
        header = Object.keys(product)
      });
      return header
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
