import Vue from 'vue'
import App from './App.vue'
import Vueresponsive from './pugins/responsive'

Vue.config.productionTip = false
Vue.use(Vueresponsive)
new Vue({
  render: h => h(App),
}).$mount('#app')
