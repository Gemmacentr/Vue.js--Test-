<template>
	<main>
		<button class="sort" @click="generateNewRandom()">Random Item</button>
		<div class="flex-container">
			
				
			
			<SingleCategory
			v-bind:key="music_entry.API"
			v-bind:Category="music_entry.Category"
			v-bind:Description="music_entry.Description"
			v-bind:Link="music_entry.Link"
			v-bind:API="music_entry.API"
			></SingleCategory>
			</div>

		
		
	</main>
</template>

<script lang="ts">
	import { Vue, Options } from 'vue-class-component';
	import MusicApi from "../api/musicApi";
	import SingleCategory from './SingleCategory.vue';

	@Options({
		props: {
			Category: String
		},
		components: {
			SingleCategory,
		}
	})

	class MainRandom extends Vue {
		private music_entry : Array<Object> = [];


		mounted() {
			MusicApi.getRandom().then(
			(response) => {
				this.music_entry = response;
			},
			(error) => {
				this.music_entry =
				(error.response && error.response.data) ||
				error.message ||
				error.toString();
			}
			)
		}

		generateNewRandom(){
			MusicApi.getRandom().then(
			(response) => {
				this.music_entry = response;
			},
			(error) => {
				this.music_entry =
				(error.response && error.response.data) ||
				error.message ||
				error.toString();
			}
			)
		}
	}

	export default MainRandom;

</script>


<style scoped>

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
 
  .flex-container {
    display: flex;
    flex-wrap: wrap ;
	width: 40%;	
	margin:auto;
	background-color:rgba(255,163,152,255);

    
  }
  
	div.singleCategory{
    border-width: medium;
    border-style: solid;
    border-color: black;
    font-family: 'Roboto', sans-serif;
    font-size:20px;
   
	
  }
 
  .flex-container > div {
    background-color: rgba(229,55,104,255);
	margin:auto;
	padding:10px;
	margin-top: 100px;
	text-align: center;
	border-radius: 40px;

  }
	
	
 
	button {
	padding:5px;
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
			height: 100vh;
			widows: 100vw;

		}
	}
</style>
