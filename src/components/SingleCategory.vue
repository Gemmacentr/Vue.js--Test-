<template>
    <div @click="goToDetails(Category)" class="singleCategory">
      <div class="post">     
        <p><b> Category: </b>{{Category }} </p>
        <p><b> Description: </b> {{Description }} </p>      
        <p><b>Title: </b> <a :href="`${Link}`">{{ API }}</a></p>
      </div>
    </div>
</template>

<script lang="ts">
  import { Vue, Options } from 'vue-class-component';

  @Options({
    props: {
      Category: String,
      Description: String,
      Link: String,
      API: String,
    },
    components: {
      SingleCategory
    }
  })
  class SingleCategory extends Vue {
    private Category : any = "";
    private Description : any = "";
    private Link : any = "";
    private API : any = "";

    goToDetails(){
      // router.push({ path: './category_detail', query: { q: this.Category } });
      window.location.href = `./category_detail?Category=${this.Category}&Description=${this.Description}&Link=${this.Link}&API=${this.API}`;
    }
  }
  export default SingleCategory;

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  .singleCategory{
    border-width: medium;
    border-style: solid;
    border-color: black;
    font-family: 'Roboto', sans-serif;
    font-size:18px;
    margin:auto,
  }
    p {
    line-height: 18px;
    padding:0.3em;
    }

  .singleCategory:hover {
    background-color: #379683;
    cursor: pointer;
   
  }
   a{
    color: #fff;
    text-decoration: none;
    font-weight:bold;
    font-size:1em;
    font-family: 'Roboto', sans-serif;
  }
    @media only screen and (max-width: 600px) {
  main {
      height: 100vh;
      }
  .flex-container >  .singleCategory {
    background-color: rgba(229,55,104,255);
    padding:0.2em;
    text-align: center;
    font-size:15px;
    width: 35%;
    height: 30%;
    border-radius: 20px;
    box-shadow: 5px 10px #888888;
  }
    
    }
@media only screen and (max-width: 1024px) {
  main {
      height: 100vh;
      }
  .flex-container >  .singleCategory {
    background-color: rgba(229,55,104,255);
    padding:0.2em;
    text-align: center;
    font-size:15px;
    width: 35%;
    height: 30%;
    border-radius: 20px;
    box-shadow: 5px 10px #888888;
  }
    
    }

</style>
