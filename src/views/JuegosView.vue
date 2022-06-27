<template>
    <div>
        <juegos-list></juegos-list>
    </div>
</template>

<script>
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
        'juegos-list': JuegosList
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>