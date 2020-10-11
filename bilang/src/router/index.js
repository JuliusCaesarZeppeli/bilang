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
import h5page1 from '@/components/h5page1'
import h5page2 from '@/components/h5page2'
import h5page3 from '@/components/h5page3'
import h5page4 from '@/components/h5page4'
import h5page6 from '@/components/h5page6'
import Measurementsnull from '@/components/Measurementsnull'
import Measurements from '@/components/Measurements'
import Measurementsshoulder from '@/components/Measurementsshoulder'
import Measurementsneck from '@/components/Measurementsneck'
import Measurementshipline from '@/components/Measurementshipline'
import Measurementschest from '@/components/Measurementschest'
import Measurementssleeve from '@/components/Measurementssleeve'
import Pages from '@/components/Pages'
import Message from '@/components/Message'
import Cart from '@/components/Cart'
import Site from '@/components/Site'
import Integral from '@/components/Integral'
import Exchange from '@/components/Exchange'
import Fashione from '@/components/Fashione'
import Evaluate from '@/components/Evaluate'
import All from '@/components/All'
import Fill from '@/components/Fill'
import My_address from '@/components/My_address'
import Add_address from '@/components/Add_address'
import Register from '@/components/Register'
import Endorsement from '@/components/Endorsement'
import Size_not_have from '@/components/Size_not_have'
import Size_have from '@/components/Size_have'
import Shoulder from '@/components/Shoulder'
import Stature from '@/components/Stature'
import Weight from '@/components/Weight'
import Hipline from '@/components/Hipline'
import Chest from '@/components/Chest'
import Waistline from '@/components/Waistline'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/',
            name: 'Pages',
            component: Pages
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
        }, {
            path: '/PersonalInformation',
            name: 'PersonalInformation',
            component: PersonalInformation
        }, {
            path: '/ChalkOrder',
            name: 'ChalkOrder',
            component: ChalkOrder
        }, {
            path: '/SignIn',
            name: 'SignIn',
            component: SignIn
        }, {
            path: '/SingleProduct',
            name: 'SingleProduct',
            component: SingleProduct
        }, {
            path: '/Single',
            name: 'Single',
            component: Single
        }, {
            path: '/FashionInfo',
            name: 'FashionInfo',
            component: FashionInfo
        }, {
            path: '/Length',
            name: 'Length',
            component: Length
        }, {
            path: '/WaistCircumference',
            name: 'WaistCircumference',
            component: WaistCircumference
        }, {
            path: '/SleeveLength',
            name: 'SleeveLength',
            component: SleeveLength
        }, {
            path: '/Cuff',
            name: 'Cuff',
            component: Cuff
        }, {
            path: '/SleeveFat',
            name: 'SleeveFat',
            component: SleeveFat
        }, {
            path: '/ProductList',
            name: 'ProductList',
            component: ProductList
        },
        {
            path: '/h5page1',
            name: 'h5page1',
            component: h5page1
        },
        {
            path: '/h5page2',
            name: 'h5page2',
            component: h5page2
        },
        {
            path: '/h5page3',
            name: 'h5page3',
            component: h5page3
        },
        {
            path: '/h5page4',
            name: 'h5page4',
            component: h5page4
        },
        {
            path: '/h5page6',
            name: 'h5page6',
            component: h5page6
        },
        {
            path: '/Measurementsnull',
            name: 'Measurementsnull',
            component: Measurementsnull
        },
        {
            path: '/Measurements',
            name: 'Measurements',
            component: Measurements
        },
        {
            path: '/Measurementsshoulder',
            name: 'Measurementsshoulder',
            component: Measurementsshoulder
        },
        {
            path: '/Measurementsneck',
            name: 'Measurementsneck',
            component: Measurementsneck
        },
        {
            path: '/Measurementshipline',
            name: 'Measurementshipline',
            component: Measurementshipline
        },
        {
            path: '/Measurementschest',
            name: 'Measurementschest',
            component: Measurementschest
        },
        {
            path: '/Measurementssleeve',
            name: 'Measurementssleeve',
            component: Measurementssleeve
        },
        {
            path: '/Fill',
            name: 'Fill',
            component: Fill
        },
        {
            path: '/Message',
            name: 'Message',
            component: Message
        },
        {
            path: '/Cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/Site',
            name: 'Site',
            component: Site
        },
        {
            path: '/Integral',
            name: 'Integral',
            component: Integral
        },
        {
            path: '/Exchange',
            name: 'Exchange',
            component: Exchange
        },
        {
            path: '/Fashione',
            name: 'Fashione',
            component: Fashione
        },
        {
            path: '/Evaluate',
            name: 'Evaluate',
            component: Evaluate
        },
        {
            path: '/All',
            name: 'All',
            component: All
        },
        {
            path: '/Order',
            name: 'Order',
            component: Order
        },

        {

            path: '/My_address',
            name: 'My_address',
            component: My_address
        },
        {
            path: '/Add_address',
            name: 'Add_address',
            component: Add_address
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register
        },
        {
            path: '/Endorsement',
            name: 'Endorsement',
            component: Endorsement
        },
        {
            path: '/Size_not_have',
            name: 'Size_not_have',
            component: Size_not_have
        },
        {
            path: '/Size_have',
            name: 'Size_have',
            component: Size_have
        },
        {
            path: '/Shoulder',
            name: 'Shoulder',
            component: Shoulder
        },
        {
            path: '/Stature',
            name: 'Stature',
            component: Stature
        },
        {
            path: '/Weight',
            name: 'Weight',
            component: Weight
        },
        {
            path: '/Hipline',
            name: 'Hipline',
            component: Hipline
        },
        {
            path: '/Chest',
            name: 'Chest',
            component: Chest
        },
        {
            path: '/Waistline',
            name: 'Waistline',
            component: Waistline
        }
    ]
})