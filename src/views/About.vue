<template>
  <div class="about">
    <Menuicon :type="'menuicon'"/>
    <h1>Vårt Kaffe</h1>
    <h4>bala bla bla bla</h4>

    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus et ex in repellendus, nostrum quas voluptas 
      sapiente maiores sequi consectetur ipsam.
       Neque, pariatur adipisci et sed quod quam ipsa minima?</p>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quidem repellat
         possimus, beatae vero rem in distinctio tenetur labore dolorum repudiandae 
        id nihil placeat exercitationem molestiae numquam laboriosam praesentium? Dolorem.</p>
    <img class="eva" src="../assets/graphics/eva-cortado.jpg" alt="Eva Cortado">
    <h2>Eva Cortado</h2>
    <h5>VD & Grundare</h5>
  </div>
</template>

<script>
import Menuicon from '../components/Menuicon'
export default {
  name:'About',
  components:{
    Menuicon,
  },
  props:{
    type:String
  },

}
</script>

<style scoped>
body{
  background: #f3e4e1;
}
/* .about{
  text-align: center;
  padding: 10px;
  line-height: 1.5em;
  width: 50%;
} */
h1,h4{
  margin: 50px 0 0 0;
}
p{
  font-weight: bold;
  margin :20px 30px;
}

.eva{
  border-radius: 50%;
}
.about{
      height:130vh;
      max-width:480px;
      margin: 0 auto;
      padding-top:1.4rem;
      text-align:center;
      font-size:22px;
      line-height:1.5rem;
      box-sizing: border-box;
      background-image: url('../assets/graphics/graphics-header.svg'), url('../assets/graphics/graphics-footer.svg');
      background-position: top center, bottom center;
      background-repeat: no-repeat, no-repeat;
      background-size: 100%, 100%;
      }
</style>