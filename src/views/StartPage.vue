<template>
  <div class="app">
    <router-view></router-view>
      <Home />
      <Featured />
      <Products />
  </div>
</template>

<script>
import Home from './Home.vue';
import Featured from '../shop/Featured.vue';
import Products from '../shop/Products.vue';
export default {
  name: 'Start',

  components: {
    Home, Featured, Products
  },

  data: () => ({
    //
  }),
};
</script>


<style scoped>
  
</style>