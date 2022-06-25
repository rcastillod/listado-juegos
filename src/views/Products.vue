<template>
    <div>
        <h1>Mis Productos</h1>
        <product-list></product-list>
    </div>
</template>

<script>
import ProductList from '@/components/products/ProductList.vue'
export default {
    name: 'products-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'product-list': ProductList
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>