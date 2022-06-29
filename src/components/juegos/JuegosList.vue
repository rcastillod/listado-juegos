<template>
    <div class="container">
        <h1>Juegos disponibles</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" v-for="(header, index) in getHeader" :key="index">{{header}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(juego, index) in juegos" :key="index">
                    <td :style="{color: juego.color}">{{juego.codigo}}</td>
                    <td :style="{color: juego.color}">{{juego.nombre}}</td>
                    <td :style="{color: juego.color}">{{juego.stock}}</td>
                    <td :style="{color: juego.color}">{{priceFormat}}</td>
                    <td>
                        <select @change="color(juego.codigo)">
                            <option v-for="(color, index) in getColors" :key="index" :value="color" :selected="juego.color==color">{{color}}</option>
                        </select>
                    </td>
                    <td>
                        <button @click="increase(juego.codigo)">+</button>
                        <button @click="reduce(juego.codigo)">-</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
    name: 'juegos-list',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['juegos']),
        ...mapGetters(['getHeader']),
        ...mapGetters(['getColors']),
        ...mapGetters(['priceFormat']),
    },
    methods: {
        ...mapActions(['reduceJuegoACT']),
        ...mapActions(['increaseJuegoACT']),
        // color(e, id) {
        //     let color = e.target.value
        //     console.log(color, id)
        // },
        reduce(id) {
            this.reduceJuegoACT(id)
        },
        increase(id) {
            this.increaseJuegoACT(id)
        }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    thead th {
        text-transform: capitalize;
    }
</style>