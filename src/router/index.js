import Vue from 'vue';
import Router from 'vue-router';
import Navigation from '@/views/navigation.vue';
import Login from '@/components/Login';
import Welcome from '@/components/Welcome';
import Stock from '@/components/Stock';
import List from '@/components/List';


Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/navigation',
      name: 'Navigation',
      component: Navigation,
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          component: Welcome
        },
        {
          path: '/stock',
          name: 'stock',
          component: Stock
        },
        {
          path: '/list',
          name: 'list',
          component: List
        }
      ]
    }
  ]
});
