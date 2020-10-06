<template>
   <div class="col-3 mt-3">
            <div class="card h-100 text-left">
                <img class="w-100" :src="products.image" alt />
                <div class="card-body">
                    <h4 class="card-title">
                         <router-link :to="{name: 'product', params: {id: products.id }}">
                             {{ products.title }}
                         </router-link>
                    </h4>
                    <strong>${{ products.price}}</strong>
                    <p class="card-text">{{ products.description }}</p>
                </div>
                <div class="px-4 pb-3">
                    <button class="btn btn-secondary" @click="addToCart()">Add to cart</button>
                </div>
            </div>

        </div>
</template>

<script>
export default {
    props: ["products"],
    methods:{ 
    addToCart(){
            this.$store.dispatch('addToCart',  {
                product : this.products,
                quantity : 1
            });
        }
},

}
</script>

<style>

</style>