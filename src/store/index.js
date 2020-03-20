import Vue from 'vue'
import Vuex from 'vuex'

import menuList from '../../api/data/menu.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu:[],
    showNavbar:false,
  },
  mutations: {
    displayMenu(state,menu){
      state.menu = menu
    },
    closeNavbar(state){
      state.showNavbar = !state.showNavbar
    }
  },
  actions: {
    async getMenuList(content){
      setTimeout(()=> {
       content.commit('displayMenu',menuList.menu)
      },500)
    }
  },
  modules: {
  }
})


