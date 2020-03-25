<template>
    <div class="menu-nav">
        <Menuicon :type="'close'" />
        <div class="links" @click="directTo('/menu')"> Meny </div>
        <hr>
        <div class="links" @click="directTo('/about')"> Vårt Kaffe </div>
        <hr>
        <div class="links" @click="directTo('/profile')">Min Profile </div>
        <hr>
        <div class="links" @click="directTo('/status')">Orderstatus </div>
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
            directTo(route){
                this.$store.commit('closeNavbar')
                if(route !== this.$route.path){
                    this.$router.push(route)
                }
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