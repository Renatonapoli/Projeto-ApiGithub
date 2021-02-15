import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './pages/Home/Home'
import Result from './pages/Result/Result'
import NotFound from './pages/NotFound/NotFound'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name: 'home',
        component: Home
    },
    {
      path:'/result',
      name: 'result',
      component: Result,
      props: true,
  },
  {
      path: '/not-found',
      name: 'not-found',
      component: NotFound,
  }
]

const router = new VueRouter({
    routes
})

new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')