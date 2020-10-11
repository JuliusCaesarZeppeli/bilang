// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import { NavBar, Toast, Tab, Tabs, Swipe, SwipeItem, CountDown, Overlay, Picker, Button, Popup, Divider, Checkbox, CheckboxGroup, AddressList, Col, Row, Stepper, Empty, Uploader, Rate, Switch } from 'vant';
=======
import { NavBar, Toast, Tab, Tabs, Swipe, SwipeItem, CountDown, Overlay, Picker, Button, Popup, Divider,Checkbox ,CheckboxGroup,AddressList,Col,Row,Stepper,Empty,Uploader,Rate,Switch} from 'vant';
>>>>>>> 994ca66c822e07faeedbeac7e53eab02a7b67e60

Vue.use(NavBar).use(Toast).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(CountDown).use(Picker).use(Overlay).use(Button).use(Popup).use(Divider).use(Checkbox).use(CheckboxGroup).use(AddressList).use(Col).use(Row).use(Stepper).use(Empty).use(Uploader).use(Rate).use(Switch)
<<<<<<< HEAD
=======

>>>>>>> 994ca66c822e07faeedbeac7e53eab02a7b67e60
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})