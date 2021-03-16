<template>
<div class="shop">
    <div class="top-products"><Products /></div>
    <div class="all-products"><AllProducts /></div>
</div>
    
</template>

<script>
import Products from '../shop/Products.vue';
import AllProducts from '../shop/AllProducts.vue';
export default {
  name: 'Shop',

  components: {
    Products, AllProducts
  },

};
</script>

<style scoped>
    .shop{
        margin-top: 40px;
        padding-bottom: 50px;
    }
    .all-products{
        padding-top: 525px;
    }
</style>

