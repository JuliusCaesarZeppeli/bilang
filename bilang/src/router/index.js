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
Vue.use(Router)

export default new Router({
  routes: [{
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
