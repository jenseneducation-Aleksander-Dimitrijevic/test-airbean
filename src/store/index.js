import Vue from 'vue'
import Vuex from 'vuex'

import menuList from '../../api/data/menu.json'

Vue.use(Vuex)

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
      state.activeOrder = order
    },
    emptyCart(state){
      state.cart = []
    },
    updateItemInCart(state,id){
      let index = state.cart.findIndex(item => item.id === id)
      state.cart[index].quantity++;

    },
    removeItemInCart(state,id){
      let index = state.cart.findIndex(item => item.id===id)
      state.cart.splice(index,1)
    }
  },
  actions: {
    async getMenuList(context){
      setTimeout(()=> {
       context.commit('displayMenu',menuList.menu)
      },500)
    },
    additemTocart(context,item){
      let checkItem = context.state.cart.filter(check => check.id === item.id)
      
      if(checkItem.length > 0){
        context.commit('updateItemInCart',checkItem[0].id)
      }else{
        context.commit('additem',item)} 
    },
    async sendOrder(context){
      console.log("Order is send")

      let order = {
        timeStamp: Date.now(),
        item: context.state.cart
      }
      //remove
      context.state = {}

      //show loader
      context.state.loading = true

      let response = await new Promise((resolve) => {

      setTimeout(() => {

        order.ETA = 13
        order.orderNr = 'KUK6666I'
        resolve(order)
      
      },6000)
    })
      context.state.loading = false
      context.commit('orderStatus', response)

     //empty cart
     context.commit("emptyCart")
    
  }
}  

})
