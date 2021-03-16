<template>
<div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
  <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
      <div class="carousel-item active" data-interval="2000">
        <div class="overlay-image">
          <img src="../assets/carousel/1.png">
        </div>
      </div>
      <div class="carousel-item" data-interval="2000">
        <div class="overlay-image">
          <img src="../assets/carousel/2.png">
        </div>
      </div>
      <div class="carousel-item" data-interval="21000">
        <div class="overlay-image">
          <img src="../assets/carousel/3.png">
        </div>
        <div class="container">
        </div>
      </div>
  </div> 
</div> 
</template>

<script>
export default {
   name: 'Home'
}
</script>

<style scoped>
    .carousel-item{
      height: 30rem;
      position: relative;
    }

    .container{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

    }


    .overlay-image img{
      
      display: block;
      margin-left: auto;
      margin-right: auto;
      background-size: cover;
    }

    
</style>