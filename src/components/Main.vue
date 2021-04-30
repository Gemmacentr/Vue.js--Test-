<template>
  <main>
   
    <div class="flex-container">
      <div v-for="music in music_entries" :key="music.API" class="post">        
        <a :href="`${music.Link}`">{{ music.API }}</a>
      </div>
    </div>
 <div class="button_container">
     
        <button class="sort" @click="sortAlfabetically()">Sort Alphabetically</button>
        <button class="sort" @click="sortAlfabetically(true)">Reverse</button>
    </div>
  </main>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import MusicApi from "../api/musicApi";




export default class Main extends Vue {
/* Array of Items*/
  private music_entries : Array<Object> = [];

  mounted() {
    MusicApi.getMusic().then(
      (response) => {
        this.music_entries = response;
      },
      (error) => {
        this.music_entries =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    )
  }
/* The function sort and reverse. */
  sortAlfabetically(reverse=false){
    function compare( a: any, b:any ) {
      if ( a.API < b.API ){
        return -1;
      }
      if ( a.API > b.API ){
        return 1;
      }
      return 0;
    }
    function compareReverse( a: any, b:any ) {
      if ( a.API < b.API ){
        return 1;
      }
      if ( a.API > b.API ){
        return -1;
      }
      return 0;
    }
    if (!reverse){
      this.music_entries = this.music_entries.sort( compare );
    }else{
      this.music_entries = this.music_entries.sort( compareReverse );
    }
  }
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
 main {
    height: 100vh;
    background-color:rgba(255,163,152,255);
   }
  a{
    color: #fff;
    font-weight:bold;
    font-size:1em;
    font-family: 'Roboto', sans-serif;
  }
 /* style for container an items*/
  .flex-container {
    display: flex;
    flex-wrap: wrap ;
    
  }
 
  .flex-container > div {
    background-color: rgba(229,55,104,255);
    margin:50px;
    text-align: center;
    width: 100%;
    border-radius: 20px;
    margin-top:130px;
    line-height: 95px;
  }
  div.post{
    border:solid 3px black;
    box-shadow: 5px 10px #888888;
    width: 30%;

  }
  .button_container{
    background-color: rgba(255,163,152,255);
    display: block;
 
  }
  
  .flex-container> * {
    flex: 20 10 200px;
  }
  /* style for Sort and Reverse buttom*/
  button {
    margin-bottom:10px;
    font-family: 'Roboto', sans-serif;
    
  }
 button.sort {
    font-weight: bold;
    margin:40px;
    padding: 1.50em 1em;
    border: 2px solid #b18597;
    border-radius: 1em;
    transform-style: preserve-3d;
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1);
  }
 button.sort::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f9c4d2;
    border-radius: inherit;
    box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 rgba(229,55,104,255);
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }
 button.sort:hover {
    background: #5CDB95;
    transform: translate(0, 0.25em);
  }
 button.sort:hover::before {
    box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
    transform: translate3d(0, 0.5em, -1em);
  }
 button.sort:active {
    transform: translate(0em, 0.75em);
  }
 button.sort:active::before {
    box-shadow: 0 0 0 2px #b18597, 0 0 #fff;
    transform: translate3d(0, 0, -1em);
  }
 
  @media only screen and (max-width: 600px) {
      main {
      height: 100%;
    
    }
}

</style>
