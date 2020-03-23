<template>
    <div class="carticon">
        <div class="count" >{{ cartItemCount }}</div>
        <img src="./../assets/graphics/bag.svg" alt="Carticon" />

    </div>
</template>

<script>
    export default {
        name:'Carticon',
        computed:{
            cart(){
                return this.$store.state.cart

            },
            cartItemCount(){
                return this.$store.getters.cartItemCount
            }
            // cartLength(){
            //     let total= 0;
            //     this.$store.state.cart.forEach(item =>{
            //         total += item.quantity;
            //     });
            //     return total;
            // }
        }
        
    }
</script>

<style lang="scss">
.carticon {
    background:black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: .8rem;
    height:0.8rem;
    padding:1.6rem;       
    border-radius:100%;
    float:right;
    margin-top:-65px;
    margin-right:30px;
    .count{
    position: absolute;
    width: 2rem;
    height: 2rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: orange;
    font-size: 1rem;
    font-weight: 700;
    z-index:99;
    margin-left:30px;
    }
    
    
}

</style>