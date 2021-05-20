import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Vuex from 'vuex'
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';

Vue.config.productionTip = false;
Vue.use(Vuex)
// sync(store, router);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
