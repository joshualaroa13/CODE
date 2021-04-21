<template>
    <div class="container">
        <div class="text">
            <img src="../assets/texts/lookbook.png">
        </div>
        <div class="row">
            <div class="column">
                
                <img src="../assets/products/featured.png">
                <img class="column-hover" src="../assets/products/featured1-1.png">
             </div>
             <div class="column">
                <img src="../assets/products/featured2.png">
                <img class="column-hover" src="../assets/products/featured2-1.png">
             </div>
             <div class="column">
                <img src="../assets/products/featured3.png">
                <img class="column-hover" src="../assets/products/featured3-1.png">
             </div>
             <div class="column">
                <img src="../assets/products/featured4.png">
                <img class="column-hover" src="../assets/products/featured4-1.png">
             </div>
        </div>
    </div>
</template>

<script>
export default {
}

</script>

<style scoped>

.text{
    margin-top: 15px;
    padding: 5px;
    background-color:black;
    width: 100%;
    max-width: 2000px;
}


.container{
    height: 100%;
    width: 100%;
    max-width: 1290px;
    height: 400px;
    padding: 0px;
    margin-left: auto;
    margin-right: auto;
}

.container .text img{
    width: 15%;
}


.container .row img:hover{
    opacity: 0;
}



/* Three image containers (use 25% for four, and 50% for two, etc) */
.column {
    width: 25%;
  padding: 14px;
}

.row img{
    position: absolute;
    width: 33.33%;
    max-width: 300px;
    transition: ease-in-out 0.2s;
    
}

.row .column img.column-hover{
    opacity: 0;
}
.row .column img.column-hover:hover{
    opacity: 1;
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>