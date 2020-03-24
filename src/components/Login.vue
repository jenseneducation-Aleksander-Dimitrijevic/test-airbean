<template>
  <div class="wrapper">
    <form @submit.prevent="login">
      <label for="email">Email</label>  
      <input type="email" class="email">
      <label for="password">Password</label>
      <input type="password">
      <button @click="$router.push('/menu')">Login</button>
    </form>
   </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String
  },
  methods:{
    login(){  
    localStorage.setItem('cookie-consent', true)
    this.$router.push('/profile')  
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  height: 100vh;
  color: white;
}
button{
  background: chocolate;
  padding: 20px;
  color: wheat;
}


</style>
