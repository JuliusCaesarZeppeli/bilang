import Vue from 'vue'
import Router from 'vue-router'
import PersonalInformation from '@/components/PersonalInformation'
import ChalkOrder from '@/components/ChalkOrder'
import SignIn from '@/components/SignIn'
import SingleProduct from '@/components/SingleProduct'
import Single from '@/components/Single'
import FashionInfo from '@/components/FashionInfo'
import Length from '@/components/Length'
import WaistCircumference from '@/components/WaistCircumference'
import SleeveLength from '@/components/SleeveLength'
import Cuff from '@/components/Cuff'
import SleeveFat from '@/components/SleeveFat'
import ProductList from '@/components/ProductList'
import HelloWorld from '@/components/HelloWorld'
import Order from '@/components/Order'
import Share from '@/components/Share'
import Bill from '@/components/Bill'
import Collect from '@/components/Collect'
import Fans from '@/components/Fans'
import Coupon from '@/components/Coupon'
import Wallet from '@/components/Wallet'
import Detail from '@/components/Detail'
import Fashion from '@/components/Fashion'
import Sale from '@/components/Sale'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
},
{
    path: '/',
    name: 'Order',
    component: Order
},
{
    path: '/Share',
    name: 'Share',
    component: Share
},
{
    path: '/bill',
    name: 'Bill',
    component: Bill
},
{
    path: '/collect',
    name: 'Collect',
    component: Collect
},
{
    path: '/fans',
    name: 'Fans',
    component: Fans
},
{
    path: '/coupon',
    name: 'Coupon',
    component: Coupon
},
{
    path: '/wallet',
    name: 'Wallet',
    component: Wallet
},
{
    path: '/detail',
    name: 'Detail',
    component: Detail
},
{
    path: '/fashion',
    name: 'Fashion',
    component: Fashion
},
{
    path: '/sale',
    name: 'Sale',
    component: Sale
},{
      path:'/PersonalInformation',
      name:'PersonalInformation',
      component:PersonalInformation
    },{
      path:'/ChalkOrder',
      name:'ChalkOrder',
      component:ChalkOrder
    },{
      path:'/SignIn',
      name:'SignIn',
      component:SignIn
    },{
      path:'/SingleProduct',
      name:'SingleProduct',
      component:SingleProduct
    },{
      path:'/Single',
      name:'Single',
      component:Single
    },{
      path:'/FashionInfo',
      name:'FashionInfo',
      component:FashionInfo
    },{
      path:'/Length',
      name:'Length',
      component:Length
    },{
      path:'/WaistCircumference',
      name:'WaistCircumference',
      component:WaistCircumference
    },{
      path:'/SleeveLength',
      name:'SleeveLength',
      component:SleeveLength
    },{
      path:'/Cuff',
      name:'Cuff',
      component:Cuff
    },{
      path:'/SleeveFat',
      name:'SleeveFat',
      component:SleeveFat
    },{
      path:'/ProductList',
      name:'ProductList',
      component:ProductList
    }
  ]
})