<template>
    <div class="menu-nav" :type="'close'">
        <Menuicon :type="'close'" />
      <router-link  class="links" to="/menu" >Meny</router-link>
        <router-link class="links" to="/about">Vår kaffe</router-link>
        <router-link class="links" to="/profile">Min profil</router-link>
        <router-link class="links" to="/status">Orderstatus </router-link>
    </div>
</template>

<script>
  import Menuicon from './../components/Menuicon'
    export default {
        name:'Navbar',
        components:{
            Menuicon
        },
        methods:{
            close(){
            this.$store.commit('closeNavbar')
         }
        }
           
    }
</script>

<style lang="scss">
 .menu-nav{
      width: 100vw;
      height: 100vh;
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
        font-size: 2.4rem;
        padding: 2rem;
        margin:1rem;
        text-decoration: none;
        color: white;
        &:hover{
            color:brown;
            font-size:56px;
        }
      }
      hr{
          width: 150px;
          background: darkgray;
      }    
  }

</style>