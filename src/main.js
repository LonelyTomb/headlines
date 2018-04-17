// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/js/main';
import './assets/scss/main.scss';

//  Global Components

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

Vue.component('app-header', Header);
Vue.component('app-footer', Footer);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
