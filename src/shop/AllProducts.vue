<template>
<div class="container">
    <div class="row">
        <div class="column">
            <img src="../assets/products/product-shirt/product2.png">
            <img class="column-hover" src="../assets/products/product-shirt/product2-1.png">
            <h1>Chrome-C Tee</h1>
            <h2>P 550</h2>
        </div>
        <div class="column">
            <img src="../assets/products/product-shirt/product4-1.png">
            <img class="column-hover" src="../assets/products/product-shirt/product4.png">
            <h1>Log Out Tee</h1>
            <h2>P 500</h2>
        </div>
        <div class="column">
            <img src="../assets/products/product-shirt/product5.png">
            <img class="column-hover" src="../assets/products/product-shirt/product5-1.png">
            <h1>Embroidered Butterfly</h1>
            <h2>P 500</h2>
        </div>
        <div class="column">
            <img src="../assets/products/product-shirt/product6.png">
            <img class="column-hover" src="../assets/products/product-shirt/product6-1.png">
            <h1>Statement Hoodie</h1>
            <h2>P 1000</h2>
        </div>  
        <div class="column">
            <img src="../assets/products/product-shirt/product3.png">
            <img class="column-hover" src="../assets/products/product-shirt/product3-1.png">
            <h1>Embroidered Butterfly</h1>
            <h2>P 500</h2>
        </div> 
    </div>
    <div class="row">
        <div class="column">
            <img src="../assets/products/product-shirt/product1.png">
            <img class="column-hover" src="../assets/products/product-shirt/product1-1.png">
            <h1>Chrome-C Tee</h1>
            <h2>P 550</h2>
        </div>
        <div class="column">
            <img src="../assets/products/product-shirt/product4-1.png">
            <img class="column-hover" src="../assets/products/product-shirt/product4.png">
            <h1>Log Out Tee</h1>
            <h2>P 500</h2>
        </div>
        <div class="column">
            <img src="../assets/products/product-shirt/product5.png">
            <img class="column-hover" src="../assets/products/product-shirt/product5-1.png">
            <h1>Embroidered Butterfly</h1>
            <h2>P 500</h2>
        </div>
        <div class="column">
            <img src="../assets/products/product-shirt/product2.png">
            <img class="column-hover" src="../assets/products/product-shirt/product2-1.png">
            <h1>Statement Hoodie</h1>
            <h2>P 1000</h2>
        </div>  
        <div class="column">
            <img src="../assets/products/product-shirt/product3.png">
            <img class="column-hover" src="../assets/products/product-shirt/product3-1.png">
            <h1>Embroidered Butterfly</h1>
            <h2>P 500</h2>
        </div> 
    </div>
</div>
    
</template>

<script>
export default {
    
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