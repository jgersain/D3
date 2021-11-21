import Vue from 'vue'

// Bootstrap vue
import './plugins/bootstrapVue'

// Font Awesome
import './plugins/fontAwesome'

// Local files
import App from './App.vue'
import router from './router'
import store from './store'

// CSS Global
import './assets/css/main.styl'

// Extra configuration
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
