import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import vue3GoogleLogin from 'vue3-google-login'

createApp(App)
    .use(store)
    .use(router)
    .use(vue3GoogleLogin,{
        clientId: '234488550973-9pmhcd7r8pd8u5jkskt1ml49h1n3kasd.apps.googleusercontent.com'
    })
    .mount('#app')
