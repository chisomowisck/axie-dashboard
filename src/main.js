import { BootstrapVue, DropdownPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import App from "./App.vue";
import "./assets/css/custome.css";
import "./assets/css/popup.css";
import "./assets/css/style.css";
import "./components/validation/errorMessage";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
// import VueSocketIO from 'vue-socket.io'
 
// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: 'ws://khodl-price-ticker.herokuapp.com:80',
//     vuex: {
//         store,
//         actionPrefix: 'SOCKET_',
//         mutationPrefix: 'SOCKET_'
//     },
//     //options: { path: "/my-app/" } //Optional options
// }))
Vue.use(DropdownPlugin);
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios)


Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://khodo-prod.herokuapp.com'
// Vue.use(VeeValidate);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.getters.loggedIn) {
          next({
              name: 'Signin',
          })
      } else {
          next()
      }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
      if (store.getters.loggedIn) {
          next({
              name: 'Landing',
          })
      } else {
          next()
      }
  } else {
      next()
  }
})

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
