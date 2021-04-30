<template>
  <Navabar  />
  <router-view/>
  <Footer  />

  
</template>

<style>
  #app {
    font-family: 'Roboto', sans-serif;
    text-align: center;

  }

 
</style>

<script>
  import Navabar from '@/components/Navabar.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Navabar,
      Footer
    }
  }
</script>

