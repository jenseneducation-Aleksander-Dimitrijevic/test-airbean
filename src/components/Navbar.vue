<template>
    <div class="menu-nav">
        <Menuicon :type="'close'" />
        <div class="links" @click="directTo('/menu')"> Meny </div>
        <div class="links" @click="directTo('/about')"> Vårt Kaffe </div>
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
        &:hover{
            color:brown;
            font-size:56px;
        }
      }    
  }

</style>