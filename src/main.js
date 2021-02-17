import { createApp } from 'vue';
import App from './App.vue';
import 'highlight.js/scss/solarized-light.scss';
import hljs from 'highlight.js';

const app = createApp(App);
app.use(hljs.vuePlugin);
app.mount('#app');
