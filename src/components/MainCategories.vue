<template>
  <main>
    <div class="flex-container">
      

    <SingleCategory
      v-for="music_category in music_categories"
      v-bind:key="music_category.API"
      v-bind:Category="music_category.Category"
      v-bind:Description="music_category.Description"
      v-bind:Link="music_category.Link"
      v-bind:API="music_category.API"
    ></SingleCategory>
    
    </div>
  </main>
</template>

<script lang="ts">
  import { Vue, Options } from 'vue-class-component';
  import musicCategoriesApi from "../api/musicApi";
  import SingleCategory from './SingleCategory.vue';

  @Options({
    props: {
      Category: String
    },
    components: {
      SingleCategory
    }
  })
  class MainCategories extends Vue {
    private music_categories : any = "";
    mounted() {
      musicCategoriesApi.getMusic().then(
        (response) => {
         
          this.music_categories = response;
        },
        (error) => {
          this.music_categories =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    }
    
  }
export default MainCategories;


</script>


<style scoped>

main {
    height: 100vh;
    background-color:rgba(255,163,152,255);
   }
  a{
    color: #fff!important;
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
    padding:0.3em;
    text-align: center;
    margin-top:130px;
    width: 100%;
    border-radius: 20px;
    box-shadow: 5px 10px #888888;
  }
 .flex-container> * {
    flex: 20 10 200px;
  }
@media only screen and (max-width: 600px) {
  main {
    height: 100%;
}
}
</style>
