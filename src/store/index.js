import Vue from 'vue'
import Vuex from 'vuex'

import menuList from '../../api/data/menu.json'

Vue.use(Vuex)

// import state from './state'
// import * as actions from './actions'
// import * as mutations from './mutations'
// import * as getters from './getters'

export default new Vuex.Store({
  state: {
    activeOrder: {},
    loading: false, 
    menu:[],
    showNavbar:false,
    cart:[]
  },
  mutations: {
    displayMenu(state,menu){
      state.menu = menu
    },
    closeNavbar(state){
      state.showNavbar = !state.showNavbar
    },
    additem(state,item){
      state.cart.push({
        id:item.id,
        price:item.price,
        title:item.title,
        quantity:1
      })

    },
    orderStatus(state,order){
      state.activeOrder = order;
    },
    emptyCart(state){
      state.cart = []
    },
   
  },
  actions: {
    async getMenuList(content){
      setTimeout(()=> {
       content.commit('displayMenu',menuList.menu)
      },500)
    },
    additemTocart(context,item){
      context.commit('additem',item)
    },
    async sendOrder(context){
      console.log("Your order is send")

      let order = {
        timeStamp: Date.now(),
        items: context.state.cart
      }
      
      //Remove order
      context.state.activeOrder = {}

      //show loader
      context.state.loading = true

      // Post and fake order return
      let response = await new Promise((resolve) => {
        setTimeout(() => {
          order.ETA = 13
          order.orderNr = "12DV12F"
          resolve(order)
        },6000)
      })

      context.state.loading = false
      context.state("orderStatus", response)

    // Empty cart
    context.commit('emptyCart')
    }
  },
  getters:{
    cartItemCount(state){
      return state.cart.length
    }
  }
})


