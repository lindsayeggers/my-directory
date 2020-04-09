import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import Results from './pages/Results.vue'

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
    },
    {
			path: '/results',
			name: 'results',
			component: Results
		}
	]
});
