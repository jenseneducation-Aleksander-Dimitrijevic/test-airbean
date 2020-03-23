<template>
  <div class="menuitem">
    <div class="additem" @click="additem">
      <button>
        <img src="./../assets/graphics/add.svg" alt="add icon" />
      </button>
    </div>
    <h3 class="itemtitle">{{ item.title}}<span class="dots"></span></h3>
    <p class="itemdesc">{{ item.desc}}</p>
    <h3 class="itemprice">{{ item .price }}</h3>

 
  </div>
</template>

<script>
export default {
  name: 'Menuitem',
  props:{
    item:Object
  },
  methods:{
    additem(){
      this.$store.dispatch('additemTocart',this.item)
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.menuitem{
  display:grid;
  max-width:420px;
  grid-template-columns: 3rem 1fr 2rem;
  grid-template-rows:1.2rem 1.2 rem;
  margin-left:30px;
  .additem{
    display:flex;
    grid-row:1/2;
    grid-column: 1/2;
    button{
      display:flex;
      justify-content: center;
      align-items:center;
      height:3rem;
      width:3rem;
      border-radius:100%;
      background: black;
    }
    img{
      width:100%;
    }
  }
  .itemtitle{
    grid-column: 2/3;
    grid-row:1/2;
    display:flex;
    margin:10px;
    font-size:24px;
    font:600;
    .dots{
      display:flex;
      flex:1;
      margin:10px;
      border-bottom:2px dotted black;
    }
  }
  .itemdesc{
    grid-column:2/3 ;
    grid-row:2/3;
    display:flex;
    margin:10px;
    font-size:18px;
  }
  .itemprice{
    grid-column:3/4 ;
    grid-row:1/2;
    margin:10px 0;
    display:flex;
    font-size:24px;
    font-display: bold;
  }
}
</style>
