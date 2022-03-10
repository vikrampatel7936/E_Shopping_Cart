import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import MyCart from '../views/MyCart.vue';
import Profile from '../views/Profile.vue';
import ViewProduct from '../views/ViewProduct.vue';
import Product from '../components/product.vue';

const routes = [
   
   {
      path: '/product',
      name: 'product',
      component: Product,
   },
   {
      path: '/login',
      name: 'Login',
      component: Login,
   },
   {
      path: '/register',
      name: 'Register',
      component: Register,
   },
   {
      path: '/mycart',
      name: 'MyCart',
      component: MyCart,
   },
   {
      path: '/profile',
      name: 'Profile',
      component: Profile,
   },
   {
      path: '/viewproduct',
      name: 'ViewProduct',
      component: ViewProduct,
   }
];

const router = createRouter({
   mode: 'history',
   history: createWebHashHistory(process.env.BASE_URL),
   routes,
});

export default router;
