<template>
   <div class="home">
      <div v-for="item in items" :key="item.id" class="product backgroundclr">
         <div>
            <img v-bind:src="item.img" alt="Failed to load." class="image" />
            <div class="container">
               <h2 class="name">{{ item.name }}</h2>
               <h4 class="category">{{ item.cat }}</h4>
               <h3 class="cost">{{ item.cost }}</h3>
               <p class="desc">{{ item.desc }}</p>
               <div class="qty-div">
                  <div class="qtyspace"><p>Quantity:</p></div>
                  <input
                     class="counter"
                     v-model="qty"
                     type="number"
                     placeholder="Quantity"
                     min="1"
                     id="counter"
                  />
               </div>

               <button class="btn btnbuy">Buy Now</button>
               <button class="btn btncart" @click="addToCart(item)">
                  Add to Cart
               </button>
               <button class="btn btnproduct" @click="viewProduct(item)">
                  View Product
               </button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import items from '../data/products.js';
// import axios from "axios";
export default {
   name: 'Home',
   computed: {},

   data() {
      return {
         items,
      };
   },
   methods: {
      viewProduct: function (currItem) {
         this.$store.commit("setId", currItem.id)
      this.$store.commit("setName", currItem.name)
      this.$store.commit("setCost", currItem.cost)
      this.$store.commit("setCat", currItem.cat)
      this.$store.commit("setImg", currItem.img)
      this.$store.commit("setDesc", currItem.desc)
      this.$router.push('viewproduct')
      },

     
   },
    addToCart: function (currItem) {
         currItem.qty = this.qty;

         this.$store.commit('addItemToCart', currItem);
      },
      removeProductFromCart(item){
        this.$store.dispatch('removeProductFromCart' , item);
      },
     created() {
    this.getAllProducts();
  },

};
</script>

<style scoped>
* {
   box-sizing: border-box;
   font-weight: normal;
   margin: 0;
   padding: 0;
}
.backgroundclr{
  background-image: linear-gradient(to top left,rgb(0, 255, 85),rgb(0, 221, 255),rgb(167, 0, 255));
}
.btnbuy{
   margin-right: 25px;
   margin-left: 0px;
   width: 45%;
}
.qtyspace{
   padding-right: 20px;
   padding-top: 5px;
}
.btnproduct{
   margin-left: 0px;
   width: 100%;
}
.btncart{
   width: 45%;
}

input[type="number"] {
  width: 150px;
  height: 35px;
  padding: 12px 20px;
  display: inline-block;
  border: 2px solid #333;
  border-radius: 25px;
  box-sizing: border-box;
}

.qty-div {
   display: flex;
   justify-content: center;
   margin-top: 20px;
}
.name {
   font-size: 2rem;
   text-align: center;
   max-width: 100%;
   word-wrap: break-word;
}

.category {
   color: red;
   text-align: center;
}

.cost {
   margin-top: 10px;
   color: black;
   text-align: center;
}

.image {
   display: block;
   margin: 2rem auto;
   width: 200px;
   height: 300px;
   object-fit: cover;
   border-radius: 200px;
}

.desc {
   font-size: 0.9rem;
   margin-top: 1rem;
   max-width: 100%;
   word-wrap: break-word;
   height: 100px;
}

.btn {
   padding: 10px;
   background-image: linear-gradient(to bottom right, rgb(255, 72, 0), rgb(167,0,255));
   border-radius: 50px;
   color: white;
   font-weight: 500;
   font-size: 15px;
   margin-top: 20px;
   cursor: pointer;
}


.container {
   padding: 20px;
   max-width: 600px;
}

.home {
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   background-color: lightgray;
}

.product {
   border: 1px solid black;
   border-radius: 10px;
   margin: 2rem;
   padding: 1rem;
   width: 25%;
}

.counter {
   text-align: center;
   size: 20px;
}
body {
   background-color: lightgray;
}
</style>
