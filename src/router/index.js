import Vue from 'vue'
import VueRouter from 'vue-router'
import NavigationView from '../views/demo/NavigationView.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'navigation',
		meta: {
			name: '导航页面'
		},
		component: NavigationView
	},
	{
		path: '/popup',
		name: 'popup',
		meta: {
			name: '中心弹框'
		},
		component: () => import( /* webpackChunkName: "popup" */ '../views/demo/PopupView.vue')
	},
	{
		path: '/anchorpoint',
		name: 'anchorpoint',
		meta: {
			name: '锚点定位'
		},
		component: () => import( /* webpackChunkName: "anchorpoint" */ '../views/demo/AnchorpointView.vue')
	},
	{
		path: '/watchscroll',
		name: 'watchscroll',
		meta: {
			name: '监听滚动'
		},
		component: () => import( /* webpackChunkName: "watchscroll" */ '../views/demo/WatchscrollView.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
