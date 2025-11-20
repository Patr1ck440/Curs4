import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
im


const routes = [
    { path: '/', component: App },
    { path: '/about', component: () => import('./components/About.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

createApp(App).use(router).mount('#app')
