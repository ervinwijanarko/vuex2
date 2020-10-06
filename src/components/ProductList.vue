<template>
    <div class="d-flex align-items-stretch flex-wrap">
         <ProductCard v-for="product in products" :key="product.id" :products="product" />
            
    </div>
</template>

<script>
import ProductCard from "./ProductCard";

export default {
components:{
    ProductCard
},
computed:{
    products(){
        return this.$store.state.products;
    }
},

mounted(){
    this.$store.dispatch('getProducts');
}

}
</script>

<style>

</style>