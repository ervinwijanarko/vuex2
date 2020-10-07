<template>
  <div>
       <b-nav-item-dropdown right style="min-width:20px; right:0;
        left:auto">
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
             {{ cartItemCount }}   Cart 
          </template>
            <div  v-for="item in cart " :key="item.product.id" > 
                <div class="px-2 d-flex justify-content-between">
                    <div >
                        <strong><font size="2">{{item.product.title}}</font></strong>  
                        <br/> <font size="2"> {{ item.quantity }} x ${{ item.product.price }}</font>
                    </div>
                    <div>
                        <a href="#" @click.prevent="removeCartItem(item.product)" class="badge badge-secondary">Remove</a>
                    </div>
                </div>
                  <hr/>
            </div>
          
                <div class="d-flex justify-content-between mx-2">
                    <span>Total : ${{ totalPrice }}</span>
                    <a href="#" @click.prevent="clearAllCart" v-show="cart != 0"><font size="2">Clear Cart</font></a>
                </div>  
             
        </b-nav-item-dropdown>
  </div>
</template>

<script>

export default {
computed: {
    cart(){
        return this.$store.state.cart;
    },
    cartItemCount(){
        return this.$store.getters.cartItemCount;
    },
    totalPrice(){
        return this.$store.getters.totalPrice;
    }   
},
mounted(){ 
        return this.$store.dispatch('getCartItems'); 
    },
methods : {
    removeCartItem(product){
        this.$store.dispatch('removeCartItem', product);
    }, 
    clearAllCart(){
        this.$store.dispatch('clearAllCart');
    }
}

}
</script>

<style>

</style>