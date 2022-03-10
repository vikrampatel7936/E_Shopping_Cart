<template>
   <body class="backgroundclr">
      <div>
         <h1 class="name">Login</h1>
         <br />
         <br />
         <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
               <form  class="formpadding">
                  <div>
                     <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email"
                        v-model="email"
                     />
                  </div>
                  <div class="mb-3">
                     <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Enter Password"
                        v-model="password"
                     />
                  </div>
                  <button class="login-button btnclr margn" v-on:click="changeName()">
                     Login
                  </button>
                  
               </form>
               
            </div>
         </div>
      </div>
   </body>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
   data() {
      return {
         password: '',
      }
   },
   setup() {},

   methods: {
      changeName: function () {
         this.$store.commit('setUser', 'Hi,' + this.email);
         console.log(this.email);
      },
   },
});
</script>

<style scoped>
.login-button {
   padding: 10px;
   width: 57%;
   border: none;
   color: white;
   font-weight: 500;
   font-size: 15px;
   margin-top: 20px;
   margin-left: 0%;
   cursor: pointer;
   height: 55px;
}
.formpadding{
   padding-top: 10px;
   padding-left: 27.5%;
}
.form-control {
  border: 1px solid #cfd1d8;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-size: 0.825rem;
  background: #ffffff;
  color: #2e323c;
}
.btnclr{
   background-image: linear-gradient(to bottom right,rgb(255, 72, 0),rgb(167, 0, 255));
   border-radius: 30px;
   margin-top: 10px;
}
.hintspace{
   padding-left: 33%;
   padding-top: 2%;
}
.margn{
   margin-bottom: 5%;
   margin-right: 50%;
}
input[type="password"],
input[type="email"] {
  width: 300px;
  padding: 12px 20px;
  display: inline-block;
  border: 2px solid #333;
  box-sizing: border-box;
  border-radius: 25px;
}
.backgroundclr{
  background-image: linear-gradient(to bottom right,rgb(0, 255, 85),rgb(0, 221, 255),rgb(167, 0, 255));
  height: 650px;
}

.form-label {
   color: black;
}

.name {
   color: black;
   padding-left: 45%;
   padding-top: 3%;
}

body {
   background-color: lightgray;
   height: 100vh;
}
</style>
