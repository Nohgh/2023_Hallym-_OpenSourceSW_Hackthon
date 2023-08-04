import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios'
//test
const app = createApp(App);
app.config.globalProperties.$axios = axios;

app.use(store); //다른 컴포넌트에서  vuexStore의 상태,변이,액션,게터등에 접근하여 사용할 수 있다.
app.use(router);
app.mount('#app');


