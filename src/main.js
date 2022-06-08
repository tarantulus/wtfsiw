import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
firebase.initializeApp({
    apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
    authDomain: process.env.VUE_APP_GOOGLE_AUTH_DOMAIN
})
createApp(App).use(router).mount("#app");
