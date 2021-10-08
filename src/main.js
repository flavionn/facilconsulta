import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

import 'virtual:windi.css'
import './styles/global.sass'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')