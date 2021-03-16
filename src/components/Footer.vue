
<template>
  <div class="hello">
    <!-- Just an image -->
        <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <router-link to="home" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                <router-link to="shop" class="nav-link">Shop</router-link>
                </li>
                <li class="nav-item">
                <router-link to="howtoorder" class="nav-link">How To Order</router-link>
                </li>
                <li class="nav-item">
                <router-link to="sizechart" class="nav-link">Size Chart</router-link>
                </li>
                <li class="nav-item">
                <router-link to="contactus" class="nav-link">Contact Us</router-link>
                </li>
                <li class="nav-item">
                <router-link to="about" class="nav-link">About Us</router-link>
                </li>
            </ul>
            </div>
             <div class="container-icons">
                 <ul class="navbar-nav">
                    <li><router-link to="#" class="nav-link">
                        <img src="../assets/icons/instagram.png">
                    </router-link></li>
                    <li><router-link to="#" class="nav-link">
                        <img src="../assets/icons/fb.png">
                    </router-link></li>
                 </ul>
            </div>
        </div>
        </nav>
  </div>
</template>

<script>
export default {   
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .hello{
        background-color: rgb(230, 230, 230);
        padding-bottom: 30px;
        padding-top: 40px;
        margin-top: 520px;
    }
    .nav-item{
        margin-left: 30px;
    }
    .container{
        
        margin-left: 0px;
        padding-left: 0px;
        width: auto;
    }
    .container img{
        width: 20px;
        height: auto;
    }
    .container-icons img{
        width: 100%;
        height: auto;
    }
    .container-fluid button{
        margin: 10px;
    }
</style>
