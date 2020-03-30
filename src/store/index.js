import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


const API = 'http://localhost:5000/api/beans'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeOrder: {},
    loading: false, 
    menu:[],
    showNavbar:false,

    cart:[]
    user:{[]}

    cart:[],
    orderHistory:[]

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
      console.log("här kommer ordern")
      console.log(order);
      state.activeOrder = order
    },
    // emptyCart(state){
    //   state.cart = []
    // },
    updateItemInCart(state,id){
      let index = state.cart.findIndex(item => item.id === id)
      state.cart[index].quantity++;

    },
    removeItemInCart(state,id){
      let index = state.cart.findIndex(item => item.id===id)
      state.cart.splice(index,1)
    },
    orderHistory(state,orderHistory){
      // let orderhistory = state.orderHistory.findIndex(item => item.id === id)
      // state.orderhistory.forEach()
      state.orderHistory = orderHistory
    }
  },
  actions: {
    async getMenuList(context){
      let resp = await axios.get(API)
       context.commit('displayMenu',resp.data.menu)
      
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
        items: context.state.cart
      }
      
      let uuid = await localStorage.getItem('airbeans')
    
      try{
        context.state.loading = true
        let resp = await axios.post(`${API}/order/${uuid}`,order)
        context.state.loading = false
        context.commit('orderStatus', resp.data)

      }catch(err){
        console.error(err)
      }
      //remove
      context.state.cart = []

      //  empty cart
      //  context.commit("emptyCart")
    
  },
    async findUuid(){
      try{
        if(localStorage.getItem('airbeans') === null){
          let uuid = await axios.get(`${API}/key`)
          localStorage.setItem('airbeans', uuid.data.key)
        }
      } catch(err){
        console.error(err)
      } 
      
    }
  },

  async getorders(context){
    let uuid = await localStorage.getItem('airbeans')
    try{
      let resp = await axios.get(`${API}/profile/${uuid}`)
      context.commit('orderHistory', resp.data)

    }catch(err){
      console.error(err)
    }

  }  


})
