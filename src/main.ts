import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LButton from './components/LButton.vue'

const app = createApp(App)
app.component(LButton.name,LButton)
app.use(router)
app.use(store)
app.mount('#app')