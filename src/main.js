import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import axios from 'axios'
import { store } from './store/store'

Vue.use(VueRouter)

axios.defaults.baseURL = 'http://localhost:3000/api'
Vue.prototype.$http = axios

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return {x: 0, y: 0}
  }
})

router.beforeEach((to, from, next) => {
  console.log('asda')
  next()
})

export const eventBus = new Vue({})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: h => h(App)
})
