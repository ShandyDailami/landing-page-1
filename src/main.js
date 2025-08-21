import './assets/main.css'
import { Icon } from "@iconify/vue";

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.component('AppIcon', Icon)

app.mount('#app')
