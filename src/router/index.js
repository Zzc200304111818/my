import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
	{
		path: '/',
		component: () => import('../views/Index.vue')
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('../views/Register.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('../views/Home.vue')
	}
]
const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router