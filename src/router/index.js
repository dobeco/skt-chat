/* eslint-disable import/extensions */
import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login/Login.vue';
import MSite from '@/views/MSite/MSite.vue';
import Search from '@/views/Search/Search.vue';
import Order from '@/views/Order/Order.vue';
import Profile from '@/views/Profile/Profile.vue';
import Shop from '@/views/Shop/Shop.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/msite',
      name: 'MSite',
      component: MSite,
      meta: {
        showFooter:true
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        showFooter:true
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        showFooter:true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        showFooter:true
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
    },
    {
      path: '/',
      redirect: '/msite',
    },
  ],
});



