<template>
    <div class="status">
        <div class="loading">
            <img src="./../assets/graphics/loader.png" alt="Loader">
            
        </div>
        <p class="order">Ordernummer #12DV23F </p>
        <img src="./../assets/graphics/drone.svg" alt="drone">
        <h1> Din beställing är påväg! </h1>
        <p> ETA min</p>
        <a href="#" class="btn" @click="router.push('/menu')">OK, Cool!</a>
    </div>
</template>

<script>

    export default {
        
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Serif:700|Work+Sans:400,600&display=swap');
.status{
    background: #E5674E;
    height: 100vh;
    color: white;
    text-align: center;
    .order{
        margin: 2rem 0;
    }
    .loader{
        margin: 4rem 0;
    }
    .img{
        width: 4rem;
    }
    h1{
    font-size: 2.5rem;
    margin: 1rem 0;
    font-family: 'Work Sans' ;
    }
    p{
       padding: 1.5rem;
    }
     .btn {
    display: flex;
    max-width: 14rem;
    width: 100%;
    font-family: 'PT Serif', serif;
    font-size: 1.4rem;
    text-decoration: none;
    height: 4rem;
    margin: auto;
    justify-content: center;
    align-items: center;
    color: #222;
    border-radius: 999rem;
    background: rgba($color: #FFFFFF, $alpha: .8);

    &:active {
      background: white;
    }
  }
    
}
img{
    margin:2rem;
    animation: none;
    
}
h1{
    font-size: 2.5rem;
    margin: 1rem 0;
}
</style>