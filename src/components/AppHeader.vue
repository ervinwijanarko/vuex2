<template>
  <div>
     <div>
        
          <b-navbar toggleable="lg" type="dark" variant="info"> 
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> 
              <b-collapse id="nav-collapse" is-nav>
                <div class="container">
                <b-navbar-nav>
                   <router-link to="/" class="nav-tem nav-link activer">Home</router-link>
                  <b-nav-item href="#">Produk</b-nav-item>
                </b-navbar-nav>

            <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto"> 
                  <div @click="$event.stopPropagation()">
                    <mini-cart/>
                  </div> 
                </b-navbar-nav>
                </div>
              </b-collapse>
            </b-navbar>
        
    </div>
  </div>
</template>

<script>
import MiniCart from "./MiniCart";
export default {
  components: {
    MiniCart
  }

}
</script>

<style>

</style>