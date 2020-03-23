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
import Cartitem from './CartItem' 
export default {
  name: 'Cart',
  components:{
     CartItem,
  },
  props: {
    msg: String
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

</style>
