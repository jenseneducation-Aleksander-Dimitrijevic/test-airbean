<template>
    <div class="cartitem">
        <h3 class="cartitemtitle">{{item.title}}<span class="dots"></span></h3>
        <p class="cartitemtotal">{{ totalamount }} kr </p>
        <div class="itemvalue">
            <img class="increase" 
            src="./../assets/graphics/arrow-up.svg" alt="uparrow"
            @click="increaseQuantity">
            <h4 class="count">{{ item.quantity }}</h4>
            <img class="decrease" 
            src="./../assets/graphics/arrow-down.svg" alt="downarrow"
            @click="decreaseQuantity">
        </div>  
    </div>
</template>

<script>
    export default {
        name:'CartItem',
        props:{
            item:Object
        },
        computed:{
            totalamount(){
                return this.item.price * this.item.quantity
            }
        },
        methods:{
            increaseQuantity(){
                this.item.quantity++;

            },
            decreaseQuantity(){
                 if(this.item.quantity>1){
                     this.item.quantity--;
                 }else{
                     this.$store.commit('removeItemInCart',this.item.id)
                 }
            }
        }
        
    }
</script>

<style lang="scss">
.cartitem{
  display:grid;
  max-width:420px;
  grid-template-columns:1fr 2rem;
  grid-template-rows:2rem 1.5 rem;
  margin-left:50px;
  margin-bottom:10px;
  
    .cartitemtitle{
        display:flex;
        align-items:flex-end;
        .dots{
            flex:1;
            border-bottom:1px dotted black;
            margin:3px;
        }
    }
    .cartitemtotal{
        display:flex;
        align-items:flex-start;
        margin:0;
    }
    .itemvalue{
        grid-column: 2/3;
        grid-row:1/3;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content:space-between;
        margin:0;
        h4{
            font-weight:650;
            margin:20px 0 0 0;
        }
        .increase, .decrease{
            width:75%;
        }
        

    }

}

</style>