<template>
    <div class="menu-nav">
        <Menuicon :type="'close'" />
        <a href="/menu" class="links" @click="$router.push('/menu')"> Meny </a>
        <hr>
        <a href="/about" class="links" @click="$router.push('/about')"> Vårt Kaffe </a>
        <hr>
        <a href="/Profile" class="links" @click="$router.push('/profile')">Min Profile </a>
        <hr>
        <a href="/status" class="links" @click="$router.push('/status')">Orderstatus </a>
    </div>
</template>

<script>
  import Menuicon from './../components/Menuicon'
    export default {
        name:'Navbar',
        components:{
            Menuicon
        },
           
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