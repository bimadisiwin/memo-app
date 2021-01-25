import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import firebase from './firebase'
import store from './store/memos.js'

Vue.config.productionTip = false

new Vue({
  router,
  firebase,
  store,
  render: h => h(App),
}).$mount('#app')
