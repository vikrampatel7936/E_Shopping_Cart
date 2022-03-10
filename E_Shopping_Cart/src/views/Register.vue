
<template>
   <body>
      <div class="backgroundclr">
         <h1 class="name">Register</h1>
         <div class="row">
            <div class="col-md-3 "></div>
            <div class="col-md-6">
               <form class="formpadding">
                  <div>
                     <input
                        type="text"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="Enter your name"
                     />
                  </div>
                  <div class="mb-3">
                     <input
                        type="email"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="Enter email address"
                     />
                  </div>
                  <div class="mb-3">
                     <input
                        type="password"
                        class="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Enter your password"
                     />
                  </div>
                  <div class="mb-3">   
                     <input
                        type="password"
                        class="form-control"
                        id="formGroupExampleInput"
                        placeholder="Re-enter Your Password"
                     />
                  </div>
                  <br/>
                  <br/><div class="marg">
                  <button class="register-button  margn btnclr" id="register">Sign-up</button></div>
               </form>
            </div>
            <div class="col-md-3"></div>
         </div>
      </div>
   </body>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
   setup() {},
data: function () {
    return {
      isShow: true,
    };
  },
    methods: {
      changeName: function () {
         this.$store.commit('setAbout', 'Profile');

         var x = document.getElementById("register");
x.style.display = "none";
      },
   },
   
});
</script>

<style scoped>
form {
   max-width: 500px;
   margin: 0 auto;
   margin-top: 5%;
   margin-bottom: 5%;
}
input[type="email"],
input[type="text"],
input[type="password"] {
  width: 300px;
  padding: 12px 20px;
  display: inline-block;
  border: 2px solid #333;
  box-sizing: border-box;
  border-radius: 25px;
}
.margn{
   margin-bottom: 5%;
   margin-left: -2%;
}
.marg{
   margin-top: -15%;
}
.formpadding{
   padding-top: 10px;
   padding-left: 12.5%;
}
.form-control {
  border: 1px solid #cfd1d8;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-size: 0.825rem;
  background: white;
  color: #2e323c;
}
.btnclr{
   background-image: linear-gradient(to bottom left,rgb(255, 72, 0),rgb(167, 0, 255));
   border-radius: 30px;
   margin-top: 10px;
}
.backgroundclr{
  background-image: linear-gradient(to bottom right,rgb(0, 255, 85),rgb(0, 221, 255),rgb(167, 0, 255));
  height: 650px;
}


.mb-3 {
   display: flex;
   justify-content: flex-start;
}

.register-button {
   padding: 10px;
   border: none;
   color: white;
   font-weight: 500;
   font-size: 15px;
   margin-left: 5px;
   margin-right: 5px;
   cursor: pointer;
   width: 75%;
   height: 55px;
}

.update {
   width: 75%;
   padding: 10px;
   border: none;
   color: white;
   font-weight: 500;
   font-size: 15px;
   margin-left: 5px;
   margin-right: 5px;
   cursor: pointer;
   height: 55px;
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
}

</style>
