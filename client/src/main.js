import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma'; // a module within the bulma package

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
