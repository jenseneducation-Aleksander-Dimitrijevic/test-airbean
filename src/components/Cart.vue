<template>
  <div class="cart">
    <h3>Din beställning </h3>
    <CartItem v-for="(item,index) in cart"
              v-bind:key="index"
              v-bind:item ="item" />
    <div class="totalamount">
      <h3>Total<span class="dots"></span>{{ totalamount }} kr </h3>
      <p> Inkl moms + drönarleverans </p>
    </div>
    <button class="button" @click="sendOrder">Take My Money</button>
  </div>
</template>

<script>
import CartItem from './CartItem' 
export default {
  name: 'Cart',
  components:{
     CartItem,
  },
  computed:{
    cart(){
      return this.$store.state.cart
    },
    totalamount(){
      let totalamount = 0;
      this.$store.state.cart.forEach(item=>{
        totalamount += item.price * item.quantity
      })
      return totalamount
    }
  },
  methods:{
    sendOrder(){
      this.$store.dispatch('sendOrder')
      this.$router.push('/status')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
 .cart{
   position:fixed;
   background:white;
   z-index:99;
   width:400px;
   margin:200px -400px 0 0;
   border-radius: .3rem;
    
   .totalamount{
     display:flex;
     flex-direction:column;
     margin:0 0 0 45px;
     h3{
       display:flex;
       font-size:24px;
       
       .dots{
         display:flex;
         justify-content:center;
         align-items:center;
          flex:1;
          border-bottom:2px dotted black;
          margin:3px;
       }
     }
     p{
       display:flex;
       justify-content:flex-start;
       margin:0 0 0 5px; 
       padding:0;
     }

   }
   .button{
        display: flex;
        font-size: 1.4rem;
        text-decoration: none;
        height: 4rem;
        margin: 10px auto;
        justify-content: center;
        align-items: center;
        color: #eee;
        border-radius: 15px;;
        background:black;

        &:active {
            color: white;
            background: black;
        }
   }


 }
</style>
