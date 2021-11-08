require('./bootstrap');

require('alpinejs');

import { createApp } from 'vue';
import router from './router'

import ClientsIndex from './components/clients/ClientsIndex.vue';

createApp({
    components: {
        ClientsIndex
    }
}).use(router).mount('#app')
