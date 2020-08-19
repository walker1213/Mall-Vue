import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Address from './pages/Address'

Vue.use(Router);

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
      },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    }
  ]
})
