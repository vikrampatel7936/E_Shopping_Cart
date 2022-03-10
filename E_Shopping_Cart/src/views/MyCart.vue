<template>
   <div class="cartcontiner"><div
      v-for="data in $store.state.arrayOfItemInCart"
      :key="data.id"
      class="product backgroundclr">
      <h1 class="text-center" style="margin-top: 20px">
         {{ data.name }}
      </h1>
      <div>
         <div class="flex-container">
            <div class="flex-img">
               <img
                  v-bind:src="data.image"
                  alt="Failed to load."
                  class="flex-img"
               />
            </div>
            <div>
               <div class="textpad">
                  <h5 style="margin-top: 100px">Cost:</h5>
                  <h6 class="coststyle">
                     {{ data.cost }}
                  </h6>

                  <h5 style="margin-top: 20px">Description:</h5>
                  <h6 style="text">
                     {{ data.description }}
                  </h6>
                  <h5 style="margin-top: 20px">Category:</h5>
                  <h6 class="categorystyle">
                     {{ data.category }}
                  </h6>
                  <h5 style="margin-top: 20px">Quantity:</h5>
                  <h6>
                     {{ data.quantity }}
                  </h6>
                  <div class="quantitystyle">
                  <input
                     class="counter fieldstyle"
                     type="number"
                     placeholder="Quantity"
                     min="1"
                     id="counter"
                  /></div>
                  <br />
                  <div>
                 <a href="#" class="badge badge-secondary" @click.prevent="removeProductFromCart(data)"> Remove </a>
               </div>
               </div>
            </div>
         </div>
      </div>
   </div>
    <div>
   <button class="buy-button">Buy Now</button>
    </div></div>
</template>

<script>
import items from '../data/products.js';

export default {
   name: 'ViewProduct',
   data() {
      return {
         items,
      };
   },
   methods: {
      removeProductFromCart(data) {
         let itemIndexToRemove;
         this.$store.state.arrayOfItemInCart.find((el, index ) => {
            if(el.id === data.id) {
               itemIndexToRemove = index;
            }
         })
         this.$store.state.arrayOfItemInCart.splice(itemIndexToRemove, 1);
      }
   }
};
</script>

<style scoped>
.product {
   border: 1px solid black;
   border-radius: 10px;
   margin: 2rem;
   padding: 1rem;
   height: 550px;
   margin: 30px;
   width: 45%;
}
.cartcontiner {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   background-color: white;
}
.fieldstyle{
   border-radius: 25px;
}
.backgroundclr{
  background-image: linear-gradient(to bottom right,rgb(0, 255, 85),rgb(0, 221, 255),rgb(167, 0, 255));
}
.text-center {
   text-align: center !important;  
}
.coststyle{
   padding-left: 55px;
   margin-top: -8.5%;
}
.quantitystyle{
   padding-left: 100px;
   margin-top: -8.5%;
}
.categorystyle{
   padding-left: 95px;
   margin-top: -8.5%;
}
.textpad{
   margin-top: -35px;
}
.flex-container {
   display: flex;
}
.flex-img {
   flex: 1;
   margin-left: 25px;
   margin-top: 20px;
   margin-right: 50px;
   max-width: 250px;
   max-height: 400px;
   border-radius: 540px;
}

.flex-text {
   flex: 1;
}
.text {
   max-width: 20%;
   word-wrap: break-word;
}
.buy-button {
   padding: 10px;
   background-image: linear-gradient(to bottom right, rgb(255, 72, 0), rgb(167,0,255));
   border: none;
   color:white;
   font-weight: bold;
   font-size: 20px;
   border-radius: 5px;
   margin-top: 5px;
   margin-left: 5px;
   margin-right: 5px;
   cursor: pointer;
   float: right;
   margin-top: 2em;
   text-align: center;
   height: 80px;
   width: 200px;
}

.counter {
   text-align: center;
   max-width: 100%;
}

body {
   background-color: lightgray;
}
</style>