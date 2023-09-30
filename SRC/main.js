import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// If you are using Vue Router, uncomment and configure it here
import { createRouter, createWebHistory } from 'vue-router';
import YourComponent from './components/YourComponent.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: YourComponent },
    // Define other routes as needed
  ],
});
app.use(router);

// If you are using Vuex for state management, uncomment and configure it here
import { createStore } from 'vuex';
import storeConfig from './store';
const store = createStore(storeConfig);
app.use(store);

app.mount('#app');
