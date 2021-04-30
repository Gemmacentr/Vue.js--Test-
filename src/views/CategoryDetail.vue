<template>

  <div class="detail_container">
    <h1>API</h1>
    <p>{{API}}</p>
    <h1>Description</h1>
    <p>{{Description}}</p>
    <h1>Link</h1>
    <p>{{Link}}</p>
    <h1>Category</h1>
    <p>{{Category}}</p>
  </div>
  <div class="flex-container">
    <SingleCategory
        v-for="music_category in random_3"
        v-bind:key="music_category.API"
        v-bind:Category="music_category.Category"
        v-bind:Description="music_category.Description"
        v-bind:Link="music_category.Link"
        v-bind:API="music_category.API"
    ></SingleCategory>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import musicCategoriesApi from "../api/musicApi";
import SingleCategory from '../components/SingleCategory.vue';



  @Options({
    props: {
      Category: String,
      Description: String,
      Link: String,
      API: String,
    },
    components: {
      SingleCategory,
    }
  })
  class CategoryDetail extends Vue {
    private Category : any = "";
    private Description : any = "";
    private Link : any = "";
    private API : any = "";
    private random_3 : any = "";
    mounted() {
      musicCategoriesApi.get3Random().then(
        (response) => {
      
          this.random_3 = response;
        },
        (error) => {
          this.random_3 =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    }
  }
  export default CategoryDetail;
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  .flex-container {
    display: flex;
    flex-wrap: wrap ;
    background-color:rgba(255,163,152,255);
    font-family: 'Roboto', sans-serif;
  }
  .flex-container > div {
    background-color: rgba(229,55,104,255);
    text-align: center;
    width: 20%;
    margin:auto;
    padding:30px;
    margin-bottom:30px;
    border-radius: 50px;
    line-height: 60px;
    box-shadow: 5px 10px #888888;
    font-family: 'Roboto', sans-serif;
  }
  .detail_container{
    background-color:rgba(255,163,152,255);
    padding: 2rem;
  }
 
</style>
