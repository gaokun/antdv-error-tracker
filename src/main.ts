import { createApp } from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app.config.errorHandler = (err) => {};

app.mount('#app');
