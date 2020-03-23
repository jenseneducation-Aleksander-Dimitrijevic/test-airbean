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

    }
  },
  actions: {
    async getMenuList(content){
      setTimeout(()=> {
       content.commit('displayMenu',menuList.menu)
      },500)
    },
    additemTocart(content,item){
      content.commit('additem',item)
    }
  },
  getters:{
    cartItemCount(state){
      return state.cart.length
    }
  }
})


