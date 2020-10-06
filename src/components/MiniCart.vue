<template>
  <div>
       <b-nav-item-dropdown right style="min-width:20px; right:0;
        left:auto">
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
             0 Cart 
          </template>
            <div  v-for="item in cart" :key="item.id" > 
                <div class="px-2 d-flex justify-content-between">
                    <div >
                        <strong>{{ item.title}}</strong>  
                        <br/> 1 x ${{ item.price }}
                    </div>
                    <div>
                        <a href="#" class="badge badge-secondary">Remove</a>
                    </div>
                </div>
            </div>
            <hr/>
                <div class="d-flex justify-content-between">
                    <span>Total : $23</span>
                    <a href="#">Clear Cart</a>
                </div>  
             
        </b-nav-item-dropdown>
  </div>
</template>

<script>

export default {
computed: {
    cart(){
        return this.$store.state.cart;
    }
}
}
</script>

<style>

</style>