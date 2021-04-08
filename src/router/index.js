import Vue from 'vue';
import VueRouter from 'vue-router';


import Audit from '../views/Audit.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter);



const routes = [
  {
    path: '/audit',
    name: 'Audit',
    component: Audit,
   
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
   
  },
  
];

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
  });

export default router;
