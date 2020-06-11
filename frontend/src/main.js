import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { i18n } from './plugins/i18n'
import CountryFlag from 'vue-country-flag'
import axios from 'axios'

Vue.component('country-flag', CountryFlag)
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8000/api'
Vue.prototype.$axios = axios

router.beforeEach((to, from, next) => {
  let language = to.params.lang
  if (!language) {
    language = 'en'
  }
  if (language !== 'en' && language !== 'th') {
    language = 'en'
    i18n.locale = language
    next({ name: to.name, params: { lang: language } })
  }
  i18n.locale = language
  next()
})

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
