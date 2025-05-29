import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'  // import router yang sudah kamu buat

createApp(App)
  .use(router)  // pakai router di app
  .mount('#app')
