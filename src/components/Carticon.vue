<template>
    <div class="carticon">
        <img src="./../assets/graphics/bag.svg" alt="Carticon" />

    </div>
</template>

<script>
    export default {
        name:'Carticon',
        
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
}

</style>