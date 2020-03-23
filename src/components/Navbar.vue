<template>
    <div class="menu-nav">
        <Menuicon :type="'close'" />
        <router-link class="links" to="/menu"> Meny </router-link>
        <router-link class="links" to="/about"> Vårt Kaffe </router-link>
        <router-link class="links" to="/status">Orderstatus </router-link>

    </div>
</template>

<script>
  import Menuicon from './../components/Menuicon'
    export default {
        name:'Navbar',
        components:{
            Menuicon
        }       
    }
</script>

<style lang="scss">
 .menu-nav{
      height:130vh;
      width:480px;
      margin: 0 auto;
      z-index:100;
      position:fixed;
      padding:0;
      background:black; 
      .links{
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
        font-size:46px;
        margin:100px;
        text-decoration: none;
      }    
  }

</style>