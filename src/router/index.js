import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Home_in from '@/components/Home_in'

import Market from "@/components/Market"
import Market_index from "@/components/Market_index"
import Market_result from "@/components/Market_result"
import Market_search from "@/components/Market_search"

import Cart from "@/components/Cart"
import Cart_in from "@/components/Cart_in"

import Mine from "@/components/Mine"
import Mine_in from "@/components/Mine_in"

Vue.use(Router);

export default new Router(
  {
    routes: [{
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [{
        path: "Home_in",
        name: "home_in",
        component: Home_in,
      }]
    },
      {
      path: '/Market',
      name: 'market',
      component: Market,
      children: [{
        path: "Market_index",
        name: "market_index",
        component: Market_index,
      },{
        path: "Market_result",
        name: "market_result",
        component: Market_result,
      },{
        path: "Market_search",
        name: "market_search",
        component: Market_search,
      }, {
        path: '', redirect: "Market_index"
      } ]
    },
      {
      path: '/Cart',
      name: 'Cart',
      component: Cart,
      children: [{
        path: "Cart_in",
        name: "Cart_in",
        component: Cart_in,
      }]
    }, {
      path: '/Mine',
      name: 'mine',
      component: Mine,
      children: [{
        path: "Mine_in",
        name: "mine_in",
        component: Mine_in,
      }]
    }, {
      path: '*', redirect: "/Market"
    }]
  })
