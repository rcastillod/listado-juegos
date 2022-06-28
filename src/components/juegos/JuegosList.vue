<template>
    <div class="container">
        <h1>Listado de juegos</h1>
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
                    <td :style="{color: juego.color}">{{juego.precio}}</td>
                    <td :style="{color: juego.color}">
                        <select>
                            <option v-for="(color, index) in getColors" :key="index" :value="color" :selected="juego.color===color">{{color}}</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// MapHelper
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'juegos-list',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['juegos']),
        ...mapGetters(['getHeader']),
        ...mapGetters(['getColors'])
    },
    //methods: {}
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