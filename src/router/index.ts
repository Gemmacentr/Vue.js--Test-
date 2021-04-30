import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Random from '../views/Random.vue'
import Categories from '../views/Categories.vue'
import CategoryDetail from '../views/CategoryDetail.vue'

const routes: Array<RouteRecordRaw> = [
  {
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    path: '/',
    name: 'Root',
    component: Home as any
  },
  {
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    path: '/home',
    name: 'Home',
    component: Home as any
  },
  {
    path: '/random',
    name: 'Random',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Random as any
  },
  {
    path: '/categories',
    name: 'Categories',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Categories as any
  },
  {
    path: '/category_detail',
    name: 'CategoryDetail',
    component: CategoryDetail as any,
    props: route => (
      { 
        Category: route.query.Category,
        Description: route.query.Description,
        Link: route.query.Link,
        API: route.query.API
      }
    )
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
