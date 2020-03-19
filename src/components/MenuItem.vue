<template>
  <div class="Menuitem">
    <div class="add-item">
      <button>
        <img src="./../assets/graphics/add.svg" alt="add icon" />
      </button>
    </div>
    <h3>{{ item.title}}</h3>
    <p>{{ item.desc}}</p>
    <h3>{{ item .price }}</h3>

 
  </div>
</template>

<script>
export default {
  name: 'Menuitem',
  props:{
    item:Object
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
