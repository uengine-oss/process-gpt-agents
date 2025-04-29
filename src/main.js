import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import i18n from './i18n'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './global-style.css'

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(i18n)

app.mount('#app') 