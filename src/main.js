import { createApp } from 'vue';
import { setupMatomo } from './plugins/matomo';
import App from './App.vue';

import './assets/main.css';

const app = createApp(App);
setupMatomo(app);
app.mount('#app');

window._paq.push(['trackPageView']);
