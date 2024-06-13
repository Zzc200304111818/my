import { createRouter, createWebHistory } from "vue-router"
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
		component: () => import('../views/Setting.vue')
	},
	{
		path: '/mine/setting/accountManage',
		name: 'accountManage',
		component: () => import('../views/AccountManage.vue')
	},
	{
		path: '/management/floorManage',
		name: 'floorManage',
		component: () => import('../views/Floor.vue')
	},
	{
		path: '/management/roomManage',
		name: 'roomManage',
		component: () => import('@/views/Room.vue')
	},
	{
		path: '/workList/task',
		name: 'task',
		component: () => import('@/views/Task.vue')
	},
	{
		path: '/management/feedBack',
		name: 'feedBack',
		component: () => import('@/views/FeedBack.vue')
	},
	{
		path: '/management/expend',
		name: 'expend',
		component: () => import('@/views/Expend.vue')
	},
	{
		path: '/expend/expendList',
		name: 'expendList',
		component: () => import('@/views/ExpengList.vue')
	},
	{
		path: '/DormitoryManagement/Repair',
		name: 'DormitoryManagement/Repair',
		component: () => import('@/views/Repair.vue')
	}



]
const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router