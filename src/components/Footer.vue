<template>
  <div class="footer-basic">
      <footer>
        <div class="social"><a href="https://www.instagram.com/ser.gemma/?hl=it"><i class="icon ion-social-instagram"></i></a><a href="https://twitter.com/gemmacentr"><i class="icon ion-social-twitter"></i></a><a href="https://www.facebook.com/gemma.centrone/"><i class="icon ion-social-facebook"></i></a></div>
            <hr style="height:2px;border-width:0;color:gray;background-color:white">
              <ul class="list-inline">
                  <li class="list-inline-item"> <router-link to="/home"> Home</router-link></li>
                  <li class="list-inline-item"><router-link to="/categories">Categories</router-link></li>
                  <li class="list-inline-item"><router-link to="/random">Random</router-link></li>
                  
              </ul>
          <div class="license">
              <li class="list-inline-item">This work is licensed under a <a target ="_blank" rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
        
            </li>
          </div>
          <div class="logo">
              <a rel="license" target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0; width: 90px; align-items: center;" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"/></a>
        </div>   
    
      </footer>
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';


  @Options({
    props: {
    
    },
      components: {
      Footer
      
    },
  })

  export default class Footer extends Vue {
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  h1 {
    display: none;
  }

  .footer-basic {
    padding:40px 0;
    background-color:#379683;
    color:#fff;
    widows: 100%;
    bottom:0;
  }

  .footer-basic ul {
    list-style:none;
    text-align:center;
    font-size:18px;
    line-height:1.6; 
    font-family: 'Roboto', sans-serif;
    bottom:0!important;
    color:#fff;
    font-weight: bold;
  }

  .footer-basic li {
    padding:0 10px;
  }

  .footer-basic ul a {
    color:inherit;
    text-decoration:none;
    opacity:0.8;
    color:#fff;
  }

  .footer-basic ul a:hover {
    color:#fff;
  }

  .footer-basic .social {
    text-align:center;
    padding-bottom:25px;
  }

  .footer-basic .social > a {
    font-size:24px;
    width:40px;
    height:40px;
    line-height:40px;
    display:inline-block;
    text-align:center;
    border-radius:50%;
    border:1px solid;
    margin:0 8px;
    color:inherit;
    opacity:0.75;
  }

  .footer-basic .social > a:hover {
    opacity:0.9;
  }

  .license {
    color: #fff;
    font-weight:bold;
    font-size:1em;
    font-family: 'Roboto', sans-serif;
    margin:auto;
  }

  .logo {
    margin:auto;
    margin-top:15px;
  }

  a  {
    color: #fff;
    font-weight:bold;
    font-size:1em;
    font-family: 'Roboto', sans-serif;
  }

</style>