import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  

   {
    path: '/connexion',  // This is the new route path
    name: 'connexion',   // A unique name for the route
    component: () => import('../views/connexionView.vue')  // Lazy-load the AccueilView.vue component
  },

  {
    path: '/personnalisation',  // This is the new route path
    name: 'personnalisation',   // A unique name for the route
    component: () => import('../views/personnalisationView.vue')  // Lazy-load the AccueilView.vue component
  },

  {
    path: '/map',  // This is the new route path
    name: 'map',   // A unique name for the route
    component: () => import('../views/mapView.vue')  // Lazy-load the AccueilView.vue component
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
