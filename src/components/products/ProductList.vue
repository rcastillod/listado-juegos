<template>
    <div class="container">
        <h1>Listado de productos</h1>
        <b-table striped hover :items="products"></b-table>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col" v-for="(header, index) in getHeader" :key="index">{{header}}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
// MapHelper
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'product-list',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['products']),
        ...mapGetters(['getHeader'])
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