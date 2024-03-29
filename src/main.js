import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vuesax/dist/vuesax.css' // Vuesax styles
import 'boxicons/css/boxicons.min.css'
import './assets/css/styles.css'
import 'bootstrap';

Vue.use(Vuesax, {
  // options here
})

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
