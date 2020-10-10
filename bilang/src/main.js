// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Swipe, Tab, Tabs,Picker,Toast,Overlay,SwipeItem} from 'vant'
Vue.config.productionTip = false
Vue.use(Tab).use(Tabs).use(Picker).use(Toast).use(Overlay).use(SwipeItem).use(Swipe)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
