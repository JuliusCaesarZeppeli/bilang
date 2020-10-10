// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { NavBar, Toast, Tab, Tabs, Swipe, SwipeItem, CountDown } from 'vant';

Vue.config.productionTip = false
Vue.use(NavBar).use(Toast).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(CountDown)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})