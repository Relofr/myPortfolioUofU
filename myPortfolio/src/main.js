import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import './styles/global.scss'

// import { initializeApp } from "firebase/app";

// const firebaseConfig = {

// };

// initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')