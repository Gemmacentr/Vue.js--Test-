<template>
	<header>
		<ul class="nav">
			<li>	
				<router-link to="/home"> 
				<i class="fas fa-home fa-3x home">
					<div class = "circle"></div>
				</i>
				<div class = "title">Home</div></router-link>
			</li>
			<li>
				<router-link to="/categories">
				<i class="fas fa-headphones fa-3x">
					<div class = "circle"></div>
				</i>
				<div class = "title">Categories</div>
				</router-link>
			</li>
			<li>
				<router-link to="/random">
				<i class="fa fa-random fa-3x">
					<div class = "circle"></div></i>
				<div class = "title">Random</div>
				</router-link>
			</li>
			<div class="background"></div>
		</ul>
	</header>
</template>

<script lang="ts">
	import { Vue } from 'vue-class-component';

	export default class Navabar extends Vue {
	}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
	.try {
		display: none;
	}
	header {
		font-family: 'Roboto', sans-serif;
		text-transform: uppercase;
		text-shadow: 0.5px 0.5px 0 #ccc;
		background-color: rgba(255,163,152,255);
		position:sticky;
		top:0;
		justify-content: center;
		align-items: center;
		margin:auto;
		display: flex;
	}
	ul {
		list-style-type: none;
	}
	li a {
		padding: 30px;
		float: left;
		width: 100%;
		text-align: center;
		font-family: 'Roboto', sans-serif;
		font-weight: bold;
		font-size: 15px;
		color: #edf5e1;
		text-decoration: none;
	}
	li a:hover .circle {
		position: relative;
		z-index: 1;
		top: -60px;

		width: 80px;
		height: 80px;
		border-radius: 100%;
		animation: illuminate 2s ease-out infinite;

	}
	li i {
		height: 50px;
	}
	li a:hover i {
		transform: translateY(-10px);
	}
	li a .title {
		font-size: 0px;
	}
	li a:hover .title {
		transform: translateY(10px);
		font-size: 15px;
		transition: 0.5s;
	}
	li a.title:hover {
		transform: translateY(-10px);
	}
	.nav li:first-child a {
		background: #05386b !important;
	}
	.nav li:nth-child(2) a {
		background: #379683 !important;
	}
	.nav li:nth-child(3) a {
		background: #5cdb95 !important;
	}
	.nav li:nth-child(4) a {
	background: #8ee4af !important;
	}
	
@media only screen and (max-width: 600px) {
		header {
			height: 100%;
		}

		ul.nav li {
			width: 33%;
		}

		li a.title:hover{
			transform: none;
			transition: none;
			
		}

		li a:hover i{
			transform: none;
			transition: none;

		}

		li a:hover .title {
			transform: none;
			transition: none;
			font-size: 9px;
			
	
		}
		li a:hover .title1 {
			transform: none;
			transition: none;
			font-size: 10px;
			position: relative;
			left:5px,
		
	
		}
		
		li a:hover .circle {
		
			z-index: 0;
			top: 0;
			width: 0;
			height: 0;
			border-radius: none;
			animation: none;

		}
	
		
}
</style>

