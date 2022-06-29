<template>
    <div>
        <juegos-list></juegos-list>
        <juegos-total></juegos-total>
    </div>
</template>

<script>
import JuegosTotal from '@/components/juegos/JuegosTotal.vue'
import JuegosList from '@/components/juegos/JuegosList.vue'

export default {
    name: 'juegos-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'juegos-list': JuegosList,
        'juegos-total': JuegosTotal
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>