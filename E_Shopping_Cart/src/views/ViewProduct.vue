<template>
   <div class="product backgroundclr">
      <h1 class="text-center" style="margin-top: 20px">
         {{ $store.state.name }}
      </h1>
      <div>
         <div class="flex-container">
            <div class="flex-img">
               <img
                  v-bind:src="$store.state.img"
                  alt="Failed to load."
                  class="flex-img"
               />
            </div>
            <div class="flex-text">
               <div class="text-center">
                  <h3 style="margin-top: 100px" class="textalignment">Cost:</h3>
                  <h4 class="coststyle">{{ $store.state.cost }}</h4>
                  <h3 style="margin-top: 20px" class="textalignment">Description:</h3>
                  <h5 style="text" class="descriptionstyle">{{ $store.state.desc }}</h5>
                  <h3 style="margin-top: 20px" class="textalignment">Category:</h3>
                  <h4 style="text" class="categorystyle">{{ $store.state.cat }}</h4>
                  <h3 style="margin-top: 20px" class="textalignment">Quantity:</h3>
                  <div class="quantitystyle"><input
                     class="counter fieldstyle"
                     type="number"
                     placeholder="Quantity"
                     min="1"
                     id="counter"
                  /></div>

                  <br />
                  <button class="btn btnbuy">Buy Now</button>
                  <button class="btn btncart">Add to Cart</button>

                  <br />
                  <br />

                  <div class="feedbackalignment">
                     <label for="formGroupExampleInput" class="feedbackstyle"
                        >User Feedback : 
                     </label>
                     <input
                        type="Feedback"
                        class="feedback"
                        id="formGroupExampleInput"
                     />
                  </div>
                  <div class="feedstyle"><button class="btn btnfeed">Submit Feedback</button></div>
                  <div class="uphotostyle"><button class="btn btnuphoto">Upload photo</button></div>
               </div>
            </div>
         </div>
      </div>
   </div>
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
};
</script>

<style scoped>
.product {
   border: 1px solid black;
   border-radius: 10px;
   margin: 2rem;
   padding: 1rem;
   background-color: white;
   margin: 50px;
}
.btnbuy{
   margin-right: 25px;
   margin-left: -35%;
   width: 30%;
}
.btnfeed{
   width: 220px;
}
.btnuphoto{
   width: 220px;
}
.btncart{
   width: 30%;
}
.feedstyle{
   margin-top: 20px;
   margin-left: -65%;
   margin-right: 10px;
}
.uphotostyle{
   margin-top: -7%;
   margin-left: 20px;
}
.feedbackalignment{
   margin-left: -31%;
   margin-right: 5px;
}
.btn {
   padding: 10px;
   background-image: linear-gradient(to bottom right, rgb(255, 72, 0), rgb(167,0,255));
   border-radius: 50px;
   color: white;
   font-weight: 500;
   font-size: 15px;
   margin-top: 5px;
   cursor: pointer;
}
.feedbackstyle{
   font-weight: 600;
   font-size: 25px;
   padding-right: 10px;
}
.textalignment{
   text-align: left;
}
.text-center {
   text-align: center !important;
}
.fieldstyle{
   border-radius: 25px;
}
.flex-container {
   display: flex;
}
.backgroundclr{
  background-image: linear-gradient(to top left,rgb(0, 255, 85),rgb(0, 221, 255),rgb(167, 0, 255));
}
.coststyle{
   margin-top: -5.2%;
   margin-left: -70%;
}
.descriptionstyle{
  margin-left: 0%;
   
}
.categorystyle{
   margin-top: -5%;
   margin-left: -40%;
}
.quantitystyle{
   margin-top: -5%;
   margin-left: -35%;
}
.flex-img {
   flex: 1;
   margin: 80px;
   max-width: 500px;
   max-height: 500px;
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
   border: none;
   color: white;
   font-weight: bold;
   font-size: 15px;
   margin-top: 20px;
   margin-left: 5px;
   margin-right: 5px;
   cursor: pointer;
   align-items: center;
}
.feedback {
   height: 100px;
   width: 300px;
}
.fb {
   display: flex;
   text-align-last: center;
}

.counter {
   text-align: center;
   max-width: 100%;
}

body {
   background-color: lightgray;
}
</style>
