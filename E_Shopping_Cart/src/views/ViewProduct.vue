<template>
   <div class="product backgroundclr">
      <h1 class="text-center" style="margin-top: 20px">
         {{ $store.state.name }}
      </h1>
      <div>
         <div class="flex-container">
            <div class="flex-img">
               <img
                  v-bind:src="$store.state.image"
                  alt="Failed to load."
                  class="flex-img"
               />
            </div>
            <div class="flex-text">
               <div class="text-center">
                  <h3 style="margin-top: 100px" class="textalignment">Cost:</h3>
                  <h4 class="coststyle">{{ $store.state.cost }}</h4>
                  <h3 style="margin-top: 20px" class="textalignment">Description:</h3>
                  <h5 style="text" class="descriptionstyle">{{ $store.state.description }}</h5>
                  <h3 style="margin-top: 20px" class="textalignment">Category:</h3>
                  <h4 style="text" class="categorystyle">{{ $store.state.category }}</h4>

                  <br />
                  <br />
                  <form class="borderstyle" action="" method="POST">
                  <div class="usernamealignment">
                     <label for="formGroupExampleInput" class="feedbackstyle"
                        >User Name : 
                     </label>
                     <input
                        type="textarea"
                        class="username"
                        id="username"
                        name="username"
                        v-model="CommentData.username"
                     />
                  </div>
                  <br/>
                  <div class="feedbackalignment">
                     <label for="formGroupExampleInput" class="feedbackstyle"
                        >User Feedback : 
                     </label>
                     <input
                        type="textarea"
                        class="feedback"
                        id="feedback"
                        name="feedback"
                        v-model="CommentData.feedback"
                     />
                  </div>
                  <h3 style="margin-top: 20px" class="textalignment">Rating:</h3>
                  <div class="ratingstyle">
                     <select name="rating" id="rating" v-model="CommentData.rating">
                        <option v-for="rt in Rating" :key="rt">
                           {{rt}}
                        </option>
                     </select>
                     </div></form>
                  <div class="feedstyle"><button class="btn btnfeed" @click="AddComments()">Submit Feedback</button></div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios";

export default {
   name: 'ViewProduct',
   data() {
      return {
         Rating:["1","2","3","4","5"],
         model:null,
         CommentData:{
            username:null,
            feedback:null,
            rating:null
         }
      };
   },
   methods: {
      AddComments(){
         let data = new FormData();
         data.append("username",this.CommentData.username);
         data.append("feedback",this.CommentData.feedback);
         data.append("rating",this.CommentData.rating);
         axios.post("http://localhost/E_Shopping_Cart/E_Shopping_Cart/src/Api/api.php?action=addcomments",data).then((res)=>{
            console.log(res.data);
            if(res.data.error){
               alert("error");
            }else{
               alert(res.data.message);
               console.log(res.data.message);
            }
         }).catch((err)=>{
            console.log(err);
         })
      }
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
.borderstyle{
   border-width: 0px;
}
.usernamealignment{
   margin-left: -54%;
   margin-right: 5px;
}
.username{
   height: 30%;
}
.ratingstyle{
   margin-left: -65%;
   margin-top: -5%;
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
   margin-left: 0%;
   margin-right: 10px;
}
.uphotostyle{
   margin-top: -7%;
   margin-left: 20px;
}
.feedbackalignment{
   margin-left: -33%;
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
  margin-left: 21.5%;
  margin-top: -5%;
   
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
