import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios,axios);

// 是否需要开启信息提示
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})