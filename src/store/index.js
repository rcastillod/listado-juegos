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
        header.push('acciones')
      });
      return header
    },
    getColors: state => {
      let arr = state.juegos.map(juego => juego.color)
      let result = arr.filter((item, index) => {
        return arr.indexOf(item) === index
      })
      return result
    },
    getJuegos: state => {
      let stock = state.juegos.reduce((total, juego) => {
        return total + parseInt(juego.stock)
      },0)
      return stock
    },
    priceFormat: state => {
      let precio
      state.juegos.forEach(juego => {
        precio = parseInt(juego.precio).toLocaleString('es-CL')
      })
      return precio
    }
  },
  mutations: {
    reduceStock: (state, id) => {
      let index = state.juegos.findIndex(juego => juego.codigo == id )
      state.juegos[index].stock--
    },
    increaseStock: (state, id) => {
      let index = state.juegos.findIndex(juego => juego.codigo == id )
      state.juegos[index].stock++
    },
  },
  actions: {
    reduceJuegoACT: ( {commit}, id ) => {
      commit('reduceStock', id )
    },
    increaseJuegoACT: ( {commit}, id ) => {
      commit('increaseStock', id )
    }
  },
  modules: {
  }
})
