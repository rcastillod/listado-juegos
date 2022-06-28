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
      state.juegos.forEach(juego => {
        header = Object.keys(juego)
      });
      return header
    },
    getColors: state => {
      let arr = state.juegos.map(juego => juego.color)
      let result = arr.filter((item, index) => {
        return arr.indexOf(item) === index
      })
      return result
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
