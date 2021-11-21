// NPM packages
import BootstrapVue from 'bootstrap-vue'
import Vue from 'vue'

// Local files
import App from './App.vue'
import router from './router'
import store from './store'

// CSS Global
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.styl'

// Extra configuration
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
