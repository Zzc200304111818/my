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
	},
	{
		path: '/management',
		name: 'dormitoryManagement',
		component: () => import('../views/DormitoryManagement.vue')
	},
	{
		path: '/menber',
		name: 'menber',
		component: () => import('../views/Menber.vue')
	},
	{
		path: '/workList',
		name: 'workList',
		component: () => import('../views/WorkList.vue')
	},
	{
		path: '/calendar',
		name: 'calendar',
		component: () => import('../views/Calendar.vue')
	},
	{
		path: '/message',
		name: 'message',
		component: () => import('../views/Message.vue')
	},
	{
		path: '/mine',
		name: 'mine',
		component: () => import('../views/Mine.vue'),
	},
	{
		path: '/mine/mineMess',
		name: 'mineMess',
		component: () => import('../views/Minemess.vue')
	},
	{
		path: '/mine/setting',
		name: 'setting',
		component: () => import('../views/setting.vue')
	},
	{
		path: '/mine/setting/accountManage',
		name: 'accountManage',
		component: () => import('../views/accountManage.vue')
	}


]
const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router