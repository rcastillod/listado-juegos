import Vue from 'vue'
import Vuex from 'vuex'
import juegos from '@/assets/juegos.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos: juegos
    
  },
  getters: {
    getHeader: state => {
      let header
      state.juegos.forEach(product => {
        header = Object.keys(product)
        let colorIndex = header.indexOf('color')
        header.splice(colorIndex, 1)
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
