<template>
<div class="shop">
    <img src="../assets/headers/shopHead.png">
    
    <div class="all-products"><AllProducts /></div>
    
</div>
    
</template>

<script>
import AllProducts from '../shop/AllProducts.vue';
export default {
  name: 'Shop',

  components: {
   AllProducts
  },

};
</script>

<style scoped>
    .shop{
        margin-top: 40px;
        padding-bottom: 50px;
    }

    img{
      padding-bottom: 25px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 78%;
    }

</style>

