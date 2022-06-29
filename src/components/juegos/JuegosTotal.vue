<template>
    <div>
        <h3>Total juegos en stock: {{getJuegos}}</h3>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'juegos-total',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapGetters(['getJuegos'])
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
    
</style>