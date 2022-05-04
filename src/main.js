import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import modal from './components/modal.vue'
import Toaster from "@meforma/vue-toaster";

const app = createApp(App)

app.use(createPinia())
app.use(Toaster)
app.use(router)

app.component('modal', modal);

app.mount('#app')
