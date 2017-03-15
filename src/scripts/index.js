import Vue from 'vue';
import VueRouter from 'vue-router';

import gourmetMapComponent from '../components/gourmet-map.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: gourmetMapComponent }
]

const router = new VueRouter({
  routes: routes
});

const app = new Vue({
  router: router
}).$mount('#app');