import { createApp } from 'vue'
import App from './App.vue'
import Navabar from './Navabar.vue'
import Footer from './Footer.vue'
import Vue from 'vue'
import Component from 'vue-class-component'
import Router from 'vue-router'
import router from './router'




createApp(App).use(router).mount('#app')

