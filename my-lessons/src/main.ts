import { createApp } from 'vue'
import router from './router/router'
import './style.scss'
import App from './App.vue'

import { createVCodeBlock } from '@wdns/vue-code-block';

const VCodeBlock = createVCodeBlock({
  // options
});

const app = createApp(App);

app.use(router)

app.use(VCodeBlock);

app.mount('#app');
