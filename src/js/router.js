import VueRouter from 'vue-router'
import index from '../component/index/index.vue'
import search from '../component/index/search.vue'
import address from '../component/index/address.vue'
import user from '../component/index/user.vue'
import goods from '../component/goods/goods.vue'
import txdw from '../component/goods/txdw.vue'
import personal from '../component/index/personal.vue'
import login from '../component/login/login.vue'
import register from '../component/login/register.vue'
import shopcar from '../component/goods/shopcar.vue'
export default new VueRouter({
	routes:[
		{
			path:'/index',component:index,
			children:[

						]
		},
		 {
			path:'/shopcar',component:shopcar
		},
    {
    	path:'/register',component:register
    },
    {
    	path:'/login',component:login
    },
    {
    	path:'/personal',component:personal
    },
		{
			path:'/search',component:search
		},
		{
			path:'/address',component:address
		},
		{
			path:'/user',component:user
		},
		{
			path:'/goods',component:goods
		},
		{
			path:'/txdw',component:txdw
		},
		{
			path:'/*',redirect:'index'
		}
	]
})
