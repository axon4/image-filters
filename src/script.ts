import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Application from './Application.vue';
import './assets/style.css';

const application = createApp(Application);

application.use(createPinia());
application.mount('#root');