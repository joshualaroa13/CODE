<template>
<div class="container">
    <div class="row">
        <div v-for="product in products" :key="product.id" class="column">
            <router-link to="product-details" class="nav-link">
            <img :src="product.image">
            <img class="column-hover" :src="product.imageHover">
            </router-link>
            <h1>{{ product.name }}</h1>
            <h2>P {{ product.price }}</h2>
        </div>
        <div v-for="product in products" :key="product.id" class="column">
            <router-link to="product-details" class="nav-link">
            <img :src="product.image">
            <img class="column-hover" :src="product.imageHover">
            </router-link>
            <h1>{{ product.name }}</h1>
            <h2>P {{ product.price }}</h2>
        </div>
        <div v-for="product in products" :key="product.id" class="column">
            <router-link to="product-details" class="nav-link">
            <img :src="product.image">
            <img class="column-hover" :src="product.imageHover">
            </router-link>
            <h1>{{ product.name }}</h1>
            <h2>P {{ product.price }}</h2>
        </div>
        <div v-for="product in products" :key="product.id" class="column">
            <router-link to="product-details" class="nav-link">
            <img :src="product.image">
            <img class="column-hover" :src="product.imageHover">
            </router-link>
            <h1>{{ product.name }}</h1>
            <h2>P {{ product.price }}</h2>
        </div>
        <div v-for="product in products" :key="product.id" class="column">
            <router-link to="product-details" class="nav-link">
            <img :src="product.image">
            <img class="column-hover" :src="product.imageHover">
            </router-link>
            <h1>{{ product.name }}</h1>
            <h2>P {{ product.price }}</h2>
        </div>
    </div>
     <div class="row">
        <div v-for="product in products" :key="product.id" class="column">
            <router-link to="product-details" class="nav-link">
            <img :src="product.image">
            <img class="column-hover" :src="product.imageHover">
            </router-link>
            <h1>{{ product.name }}</h1>
            <h2>P {{ product.price }}</h2>
        </div>
        <div v-for="product in products" :key="product.id" class="column">
            <router-link to="product-details" class="nav-link">
            <img :src="product.image">
            <img class="column-hover" :src="product.imageHover">
            </router-link>
            <h1>{{ product.name }}</h1>
            <h2>P {{ product.price }}</h2>
        </div>
        <div v-for="product in products" :key="product.id" class="column">
            <router-link to="product-details" class="nav-link">
            <img :src="product.image">
            <img class="column-hover" :src="product.imageHover">
            </router-link>
            <h1>{{ product.name }}</h1>
            <h2>P {{ product.price }}</h2>
        </div>
        <div v-for="product in products" :key="product.id" class="column">
            <router-link to="product-details" class="nav-link">
            <img :src="product.image">
            <img class="column-hover" :src="product.imageHover">
            </router-link>
            <h1>{{ product.name }}</h1>
            <h2>P {{ product.price }}</h2>
        </div>
        <div v-for="product in products" :key="product.id" class="column">
            <router-link to="product-details" class="nav-link">
            <img :src="product.image">
            <img class="column-hover" :src="product.imageHover">
            </router-link>
            <h1>{{ product.name }}</h1>
            <h2>P {{ product.price }}</h2>
        </div>
    </div>
</div>
    
</template>

<script>
import image from "../assets/products/product-shirt/product5.png"
import imageHover from "../assets/products/product-shirt/product5-1.png"
export default {   
    name: "AllProducts",
    data: () => {
        return{
            products: [
                {
                    id: 1,
                    name: "Smiley Tee",
                    price: 500 ,
                    image: image,
                    imageHover: imageHover
                }
            ],
            showCart: false
        }

    }

}
</script>

<style scoped>


    .container{
        width: 100%;
        max-width: 1090px;
        margin-left: auto;
        margin-right: auto;
   
    }


    /* Three image containers (use 25% for four, and 50% for two, etc) */
    .column {
        width: 18.33%;
            margin-left: 0;
            margin-right: auto;
            
        }

        .row img{
            position: absolute;
            width: 13.33%;
            max-width: 400px;
            transition: ease-in-out 0.2s;
            
        }

        .row .column img.column-hover{
            opacity: 0;
            width: 18.33%;
            margin-left: 0;
            margin-right: auto;
            
        }
        .row .column img.column-hover:hover{
            opacity: 1;
        }

        .column img{
            width: 18.33%;
            margin-left: 0;
            margin-right: auto;
            
            
        }

    /* Clear floats after image containers */
    .row::after {
    clear: both;
    display: table;
    margin: 0;
    }

    .container{
      position: absolute;
      bottom: 20;
      left: 0;
      right: 0;
      
    }

    h1 {
        margin-top: 210px;
        text-align: center;
        font-size: 13px;
    }

    h2{
        text-align:center;
        font-size: 11px;
    }


</style>