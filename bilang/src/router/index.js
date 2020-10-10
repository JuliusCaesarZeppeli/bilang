import Vue from 'vue'
import Router from 'vue-router'
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
        }
    ]
})