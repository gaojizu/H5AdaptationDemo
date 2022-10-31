import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
// import less from 'less'
// Vue.use(less)
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
