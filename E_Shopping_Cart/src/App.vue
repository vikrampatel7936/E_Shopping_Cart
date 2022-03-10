<template>
   <!-- <router-view> -->
   <div id="nav">
      <ul>
         <p class="logofont" style="float:left">E-Shop Cart</p>
      <div class="menupadding"><router-link class="menu-item" to="/product">Home</router-link>
      <router-link class="menu-item notification" to="/mycart">My Cart</router-link>
      <router-link class="menu-item" to="/profile">Profile</router-link>
      <router-link class="menu-item" to="/login">{{ $store.state.user }}</router-link> 
      <router-link class="menu-item" to="/register">{{ $store.state.about }}</router-link>
      </div></ul>
   </div>
   <router-view />
</template>

<style>

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.logofont{
   font-size: 25px;
   padding-top: 25px;
   padding-right: 10px;
   padding-left: 1%;
   color: antiquewhite;
}

.menupadding{
  padding: 15px;
  font-size: 20px;  
}

.menu-item {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
.menu-item:hover {
  float: left;
  background-color: #111;
}
.notification {
  text-decoration: none;
  padding: 15px 26px;
  position: relative;
  display: inline-block;
  border-radius: 2px;
}

.notification .badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 50%;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
