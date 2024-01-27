import { createApp } from 'vue'
import './style.css'



import { createRouter, createWebHashHistory } from 'vue-router';
import ExternalPageVue from './pages/ExternalPage.vue';
import HelloWorldVue from './components/HelloWorld.vue';
import AppVue from './App.vue';
 

const app = createApp(AppVue);

const routes = [
    { path: '/', component: HelloWorldVue },
    { path: '/external', component: ExternalPageVue },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes
  }) 

  


app.use(router)
  
app.mount('#app')
