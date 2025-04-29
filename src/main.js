import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './global-style.css'

const app = createApp(App)

app.use(vuetify)
app.use(router)

app.mount('#app') 