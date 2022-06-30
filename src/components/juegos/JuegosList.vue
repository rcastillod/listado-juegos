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
                <tr :style="{color: juego.color}" v-for="(juego, index) in juegos" :key="index">
                    <td>{{juego.codigo}}</td>
                    <td>{{juego.nombre}}</td>
                    <td>{{juego.stock}}</td>
                    <td>${{parseInt(juego.precio).toLocaleString('es-CL')}}</td>
                    <td>
                        <select @change="color(juego.codigo, $event.target.value)">
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
        ...mapGetters(['getHeader', 'getColors'])
    },
    methods: {
        ...mapActions(['reduceJuegoACT']),
        ...mapActions(['increaseJuegoACT']),
        ...mapActions(['changeColorACT']),
        color(index, value) {
            let payload = {'id': index, 'color': value}
            this.changeColorACT(payload)
        },
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