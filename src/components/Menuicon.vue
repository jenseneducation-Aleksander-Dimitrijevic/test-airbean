<template>
    <div class = "menuicon">
        <img src='./../assets/graphics/navicon.svg' alt="Menuicon"/>
    </div>
</template>

<script>
    export default {
        name:'Menuicon',
        
    }
</script>

<style lang="scss">
  .menuicon {
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: .8rem;
        height:0.8rem;
        padding:1.6rem;       
        border-radius:100%;
        margin-top:40px;
        margin-left:30px;
     }

</style>