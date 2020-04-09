import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import App from './App.vue';

Vue.use(VueRouter);

require("./assets/main.scss")

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
