import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App)

app.use(router)

app.mount('#app')

fetch('https://live-reviewmattcms.pantheonsite.io/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
