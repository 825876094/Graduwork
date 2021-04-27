import Vue from 'vue'
import $ from 'jquery' //
import App from './App.vue'
import router from "./router";
import iView from "iview";
import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false
Vue.prototype.$ = $; //
Vue.use(iView)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
