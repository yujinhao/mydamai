import Vue from 'vue' //自动去node_modules文件夹寻找它的vue.js文件
import App from './App.vue'
import Mint from 'mint-ui';//引入别人的组件库的js，CSS要自己手动引入
import '../node_modules/mint-ui/lib/style.css'//手动引入ui组件库的css
Vue.use(Mint);
import './assets/css/reset.css'
import VueRouter from 'vue-router'
import router from './js/router.js'
Vue.use(VueRouter)//配置每个实例对象可以使用vue
import'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon',Icon)
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
import moment from '../node_modules/moment/min/moment.min.js'
import './assets/icon/iconfont.css'
import axios from 'axios'
import jquery from 'jquery'
Vue.prototype.$http = axios
import MuseUI from 'muse-ui';
import '../node_modules/muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);

new Vue({
	el: '#app',
	router:router,
	render: h => h(App)

})
