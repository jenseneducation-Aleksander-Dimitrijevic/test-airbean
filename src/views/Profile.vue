<template>
<div class="main">
  <Menuicon :type="'menuicon'" />
    <div class="login" v-if="show == false">
<Login class="" v-if="show == false"/>
</div>
<div class="profile">
  
<div class="profile-info">
     <img class="img" src="../assets/graphics/profile.svg" alt="profileicon">
    <h1>{{user.name}}</h1>
    <h3>{{user.email}}</h3>
</div>
<div class="order-info">
    <h1>Orderhistorik</h1>
    <div class="orders">
    <h2>{{orderHistory.orderNr}}</h2>
    <h4>ordersumma</h4>
    </div>
    <hr>
    <div class="total">
        <h5>totalt: 1620</h5>
    </div>
</div>
</div>
  

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
    computed:{
        user(){
            return this.$store.state.user
        },
        orderHistory(){
            return this.$store.state.orderHistory
        }
    },
    created(){
        if(localStorage.getItem('airbeans')){        
        // localStorage.setItem('name', this.user.name )
        // localStorage.setItem('email', this.user.email)
           this.show = true
    }
    },
    mounted(){

        this.$store.dispatch('getOrders')

    },

    components: {
        Login,
        Menuicon
    }    
    }
</script>

<style scoped>
body {
  margin: 0;
}

/* 
#app {
  max-width: 480px;
  margin: 0 auto;
  
} */


 .menuicon{
   margin-top:-20px;
 }
.main {
  padding: 6rem 1.3rem;
  height: 100vh;
  position: relative;
  /* box-sizing: border-box; */
  background-image: url('../assets/graphics/graphics-header.svg'), url('../assets/graphics/graphics-footer.svg');
  background-position: top center, bottom center;
  background-repeat: no-repeat, no-repeat;
  background-size: 100%, 100%;
  background-color: #2f2926;
  color: black;
}

.img{
 height: 100px;
 width: 100px;
 border-radius: 100%;
 background-color: #f3e4e1;
}

.profile{
    background-color: #2f2926;
    display: flex;
    flex-direction: column;
    color: floralwhite;
    padding: 1rem 1rem;  
} 
.profile-info{
    padding:0.2rem;
}
.order-info{
padding-top: 5rem;
}

.orders{
padding-top: 2rem;  
}

h1 {
    font-size: 1.5rem;
    font-family: 'PT Serif', serif;
    font-weight: bold;
    padding-top: 0.5rem;
    color: white;
    

}
h2{
    color: lightgray;
    font-family: 'Work Sans', sans-serif;
    font-weight: bold;
    font-size:0.9rem
}
h3{
    font-family: 'Work Sans', sans-serif;
    font-weight: lighter;
    font-size: 0.9rem;
}


h4{
    font-family: 'Work Sans', sans-serif;
    font-weight: lighter;
    font-size: 0.9rem;
    color: darkgray
}

h5{
    font-family: 'Work Sans', sans-serif;
    font-weight: lighter;
    font-size: 0.9rem;
    color: white;
    font-weight: bold;
}
hr{
    max-width: 100%;
}

.login{
display: flex;
background-color: #2f2926;
top: 0;
display: flex;
z-index: 998;
/* grid-template-columns: 2rem 2rem 2rem;
grid-template-rows: 1fr 1fr; */
background-color: #F3E4E1;
}
</style>