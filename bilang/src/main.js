// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { NavBar, Toast, Tab, Tabs, Swipe, SwipeItem, CountDown, Overlay, Picker, Button, Popup, Divider, Checkbox, CheckboxGroup, AddressList, Col, Row, Stepper, Empty, Uploader, Rate, Switch } from 'vant';



Vue.use(NavBar).use(Toast).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(CountDown).use(Picker).use(Overlay).use(Button).use(Popup).use(Divider).use(Checkbox).use(CheckboxGroup).use(AddressList).use(Col).use(Row).use(Stepper).use(Empty).use(Uploader).use(Rate).use(Switch)
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})