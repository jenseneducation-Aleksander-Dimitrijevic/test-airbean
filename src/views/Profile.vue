<template>
<div class="wrapper">
<Menuicon :type="'menuicon'"/>
    <!-- <img src="../assets/graphics/profile.svg" alt=""> -->
<div class="login" v-if="show == true">
</div>    
<Login v-if="show == true"/>
</div>
</template>

<script>
import Menuicon from '../components/Menuicon'
import Login from "@/components/Login.vue"
    export default {
    name: "Profile",
    data(){
        return{
        show:false    
        }
    },
    created(){
        if(localStorage.getItem('cookie-consent')){
           this.show = true
    }else{
           this.$router.push('profile')
    }
    },
    components: {
        Login,
        Menuicon
    }    
    }
</script>

<style lang="scss" scoped>

.wrapper{
     box-sizing: border-box;
      background-image: url('../assets/graphics/graphics-header.svg');
      background-position: top center, bottom center;
      background-repeat: no-repeat, no-repeat;
    background-size: 100%, 100%;
     background-color: #222;
    height: 100vh;
    img{
        
        color:grey;
        width: 6rem;
        z-index: 999;
        border-radius:100% ;
        top: 5rem;
        background: white;
        top:5rem;
    }
}
.login{
display: flex;
background-color: orange;
height: 100vh;
display: grid;
grid-template-columns: 2rem 2rem 2rem;
grid-template-rows: 1fr 1fr;

}
</style>