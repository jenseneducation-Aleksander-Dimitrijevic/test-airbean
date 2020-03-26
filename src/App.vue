<template>
  <div id="app">
  <Navbar v-if="showNavbar"/>
  <router-view/>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  name:'App',
  components:{
    Navbar
  },
  computed:{
    showNavbar(){
      return this.$store.state.showNavbar
    }
  },
  //before mount is used to fetch the data from the menu json file
  beforeMount(){
    this.$store.dispatch('findUuid')
    this.$store.dispatch('getMenuList')
  }
}
</script>

<style lang="scss">
:root {
    @import url('https://fonts.googleapis.com/css?family=PT+Serif:700|Work+Sans:400,600&display=swap');
}
*{
  // box-sizing: border-box;
  // margin: 0;
  // padding: 0;
}
#app {
  font-family:'Work Sans';
  text-align: center;
  color: #2c3e50;
  background: #F3E4E1;
  box-sizing: border-box;
  // height: 130vh;
  // max-width: 480px;
  margin: 0 auto;
  // .home{
  //   padding: 6rem 1.5; 
  //   // box-sizing: border-box;
  //   background-image: url('./assets/graphics/graphics-header.svg'), url('./assets/graphics/graphics-footer.svg');
  //   background-position: top center, bottom center;
  //   background-repeat: no-repeat, no-repeat;
  //   background-size: 100%, 100%; 

  // } 
  
}
</style>
