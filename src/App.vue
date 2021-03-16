<template>
  <div class="app">
      <Navbar />
      <router-view></router-view>
      <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
export default {
  name: 'App',

  components: {
    Footer
  },

  data: () => ({
    //
  }),
};
</script>


<style scoped>
  
</style>
