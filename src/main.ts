
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import naive from 'naive-ui'

const app = createApp(App);
app.use(naive)
app.use(createPinia()).mount('#app')