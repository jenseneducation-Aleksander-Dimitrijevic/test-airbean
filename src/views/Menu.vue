<template>
  <div class="menu">
      <Menuicon />
      <Carticon />
      <h1>Meny</h1>
      <Menuitem v-for="item in menu"
      :key='item.id' :item="item" />     
  </div>
</template>

<script>
import Menuicon from './../components/Menuicon'
import Carticon from './../components/Carticon'
import Menuitem from './../components/Menuitem'

export default {
    name:'Menu',
    components:{
        Menuicon,
        Carticon,
        Menuitem
    },
    computed:{
        menu(){
            return this.$store.state.menu
        }
    }

}
</script>

<style>

</style>