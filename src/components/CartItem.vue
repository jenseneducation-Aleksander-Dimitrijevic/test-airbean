<template>
    <div class="cartitem">
        <h3 class="cartitemtitle">{{item.title}}<span class="dots"></span></h3>
        <p class="cartitemtotal">{{ totalamount }} kr </p>
        <div class="itemvalue">
            <img class="increase" 
            src="./../assets/graphics/arrow-up.svg" alt="uparrow"
            @click="increaseQuantity">
            <p class="count">{{ item.quantity }}</p>
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

            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>