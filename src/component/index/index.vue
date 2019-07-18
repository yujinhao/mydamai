<template>
	<div>
		<div class="header">

			<div class="head1">
				<router-link to='/address'>
					<img src="assets/images/icon/address.png" />
				</router-link>
			</div>
			<div class="head2">
				全国
			</div>

			<div class="head3">
				<router-link to='/search'>
          <i class="iconfont icon-sousuo"></i>&nbsp;搜索明星、演出比赛、场馆</span>
				</router-link>
			</div>

			<div class="head4">
				<router-link to='/user'>
					<img src="assets/images/icon/user.png" />
				</router-link>
			</div>
		</div>

		<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">

			<div class="banner">
				<mt-swipe :auto="4000">
					<!-- <mt-swipe-item><img src="../../assets/images/banner/banner0.webp"></mt-swipe-item> -->
					<mt-swipe-item v-for="item in swipeList">

						<router-link to='/goods'>
							<img :src="item.img" />
						</router-link>

					</mt-swipe-item>

					<!-- 这里的src是变量，前面加冒号： -->
				</mt-swipe>
			</div>

			<div class="menu">
				<div class="menu-box" v-for="i in menulist">
					<div class="menupic">
						<img :src="i.icon">
					</div>
					<p>{{i.title}}</p>
				</div>
			</div>
			<span class="actpic">
			<img src="assets/images/icon/active.webp" alt="">
		</span>

			<div class="dk-box">
				<div class="dk-title">
					<span>大咖在大麦</span>
					<span>查看更多<i class="iconfont icon-iconfontjiantou2"></i></span>
				</div>
				<div class="dk-swipe">

					<swiper :options="swiperOption">
						<swiper-slide>
							<div class="myswiper-box">
								<div class="myswiper-top">
									<div class="headpic">
										<img src="../../assets/images/dkswiper/dk1.webp">

									</div>

									<div class="myswiper-star">
										 <router-link to="/personal">
                       <p>周杰伦</p>
										<p>158.3万粉丝</p>
                    </router-link>
									</div>

									<span>+关注</span>

								</div>
								<div class="myswiper-bot">
									<span>最近{{pnum}}场演出</span>
									<i><icon name='angle-right'></icon></i>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="myswiper-box">
								<div class="myswiper-top">
									<div class="headpic">
										<img src="../../assets/images/dkswiper/dk2.webp">

									</div>
									<div class="myswiper-star">
										 <router-link to="/personal">
                    <p>林俊杰</p>
										<p>108.3万粉丝</p>
                    </router-link>
									</div>

									<span>+关注</span>

								</div>
								<div class="myswiper-bot">
									<span>最近2场演出</span>
									<i><icon name='angle-right'></icon></i>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="myswiper-box">
								<div class="myswiper-top">
									<div class="headpic">
										<img src="../../assets/images/dkswiper/dk3.webp">

									</div>
									<div class="myswiper-star">
										 <router-link to="/personal">
                    <p>薛之谦</p>
										<p>188.6万粉丝</p>
                     </router-link >
									</div>

									<span>+关注</span>

								</div>
								<div class="myswiper-bot">
									<span>最近{{pnum}}场演出</span>
									<i><icon name='angle-right'></icon></i>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="myswiper-box">
								<div class="myswiper-top">
									<div class="headpic">
										<img src="../../assets/images/dkswiper/dk4.webp">

									</div>
									<div class="myswiper-star">
                     <router-link to="/personal">
										<p>陈奕迅</p>
										<p>158.3万粉丝</p>
                    </router-link>
									</div>

									<span>+关注</span>

								</div>
								<div class="myswiper-bot">
									<span>最近3场演出</span>
									<i><icon name='angle-right'></icon></i>
								</div>
							</div>
						</swiper-slide>

					</swiper>

				</div>

			</div>

			<recently></recently>

			<moreshow></moreshow>

		</mt-loadmore>
	</div>
</template>

<script>
	import moreshow from './moreshow.vue'
	import recently from './myswiper.vue'

	export default {

		components: {
			'recently': recently,
			'moreshow': moreshow,

		},

		methods: {
			loadTop() {

				this.$refs.loadmore.onTopLoaded();
			},
			loadBottom() {

				this.allLoaded = true; // 若数据已全部获取完毕
				this.$refs.loadmore.onBottomLoaded();
			}
		},
		data() {
			return {
				allLoaded: true,
				pnum: '5',
				swiperOption: {
					slidesPerView: 1.5,
					spaceBetween: 50,
					freeMode: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				},
				swipeList: [{
						img: 'assets/images/banner/banner0.webp',
						link: '/goods'
					},
					{
						img: 'assets/images/banner/banner1.webp',
						link: '/goods'
					},
					{
						img: 'assets/images/banner/banner2.webp',
						link: '/goods'
					}
				],
				menulist: [{
						icon: 'assets/images/icon/icon1.webp',
						title: '演唱会'
					},
					{
						icon: 'assets/images/icon/icon2.webp',
						title: '话剧歌剧'
					},
					{
						icon: 'assets/images/icon/icon3.webp',
						title: '音乐会'
					},
					{
						icon: 'assets/images/icon/icon4.webp',
						title: '体育'
					},
					{
						icon: 'assets/images/icon/icon5.webp',
						title: '曲苑杂坛'
					},
					{
						icon: 'assets/images/icon/icon6.webp',
						title: '亲子'
					},
					{
						icon: 'assets/images/icon/icon7.webp',
						title: '展览休闲'
					},
					{
						icon: 'assets/images/icon/icon8.webp',
						title: '境外'
					},
				]
			};
		}
	};
</script>

<!-- mintui轮播有些样式是全局的，要写在全局 -->
<style>
	.mint-swipe-items-wrap {
		padding-bottom: 37%;
	}
  a{
    color: black;
  }
</style>

<style scoped="">
  .mint-loadmore{
    background: white;
  }
	.myswiper-top span {
		float: right;
		height: 1.5rem;
		width: 20%;
		border: 0.0625rem solid deeppink;
		border-radius: 1.4125rem;
		color: deeppink;
		text-align: center;
		line-height: 1.5rem;
		margin-top: 1.5rem;
		margin-right: 0.3125rem;
	}

	.myswiper-star {
		float: left;
		margin-top: 1rem;
		margin-left: 0.5rem;
	}

	.myswiper-star p:nth-of-type(1) {
		font-size: 1.125rem;
		color: #000000;
	}

	.myswiper-star p:nth-of-type(2) {
		font-size: .2rem;
		color: #808080;
	}

	.headpic {
		width: 3rem;
		height: auto;
		border-radius: 50%;
		float: left;
		margin-top: 0.7rem;
		margin-left: 1rem;
		overflow: hidden;
	}

	.headpic img {
		width: 100%;
		height: 100%;
	}

	.dk-swipe {
		padding: 0 0.625rem;
	}

	.myswiper-box {
		height: 7rem;
		border: 0.03125rem solid ghostwhite;
		border-radius: 0.3125rem;
		box-shadow: 0.0625rem 0.0625rem 0.625rem #E7E7E7;
		margin-bottom: 0.3125rem;
	}

	.myswiper-top {
		height: 70%;
		width: 100%;
		border-bottom: 0.0625rem solid ghostwhite;
	}

	.myswiper-bot {
		margin-top: 0.5125rem;
		height: 20%;
		width: 100%;
	}

	.myswiper-bot span {
		margin-left: 1rem;
		font-size: .32rem;
	}

	.myswiper-bot i {
		float: right;
		margin-right: 0.3125rem;
		color: darkgray;
	}

	.dk-box {
		width: 100%;
		margin-top: 5%;
	}

	.dk-title {
		height: 2.125rem;
		padding: 0 5%;
		margin-bottom: 5%;
	}

	.dk-title span:nth-of-type(1) {
		float: left;
		line-height: 2.125rem;
		font-size: 1rem;
		color: black;
		font-weight: 800;
		font-family: sans-serif;
	}

	.dk-title span:nth-of-type(2) {
		float: right;
		line-height: 2.125rem;
		color: #999;
    font-size: 0.9375rem;
	}
	/* 轮播 */

	.banner {
		margin-top: 3.4375rem;
	}

	.mint-swipe-items-wrap {
		padding-bottom: 37%;
	}

	.mint-swipe img {
		width: 100%;
		padding-bottom: 37%;
	}
	/* 菜单 */

	.menu {
		margin: 0.3125rem 0;
		/* height: 9.375rem; */
		/* background: chartreuse; */
		overflow: hidden;
	}

	.menu-box {
		float: left;
		width: 25%;
		height: 50%;
		margin-bottom: 0.4rem;
		text-align: center;
		/* background: #A9A9A9; */
	}

	.menupic {
		height: 70%;
		padding: 0% 30%;
	}

	.menupic img {
		width: 100%;
		margin-top: 0.625rem;
	}

	.menu-box p {
		color: dimgray;
	}

	.actpic {
		display: block;
		width: 100%;
		overflow: hidden;
		/* height: 9.2rem; */
	}

	.actpic img {
		width: 100%;
	}

	.header {
		position: fixed;
		box-sizing: border-box;
		width: 100%;
		height: 3.4375rem;
		background: #f5f5f5;
		padding: 0 4%;
		top: 0;
		z-index: 10000;
		max-width: 640px;
		margin: 0 auto;
	}

	.head1 {
		float: left;
		line-height: 3.4375rem;
		font-size: 1rem;
		width: 5%;
		height: 100%;
		/* margin-left: 0.625rem; */
		overflow: hidden;
		text-align: center;
	}

	.head1 img {
		width: 100%;
	}

	.head2 {
		float: left;
		text-align: center;
		line-height: 3.4375rem;
		font-size: 1rem;
	}

	.head3 {
		overflow: hidden;
		float: left;
		line-height: 1.5rem;
		font-size: 0.8rem;
		background: white;
		border-radius: 1.625rem;
		height: 1.5rem;
		margin-left: 3%;
		color: darkgray;
		width: 65%;
		margin-top: 1rem;
		text-align: center;
	}

	.head3 a {
		color: #A9A9A9;
	}

	.head3 p {
		float: left;
		text-align: center;
		line-height: 3.4375rem;
	}

	.head4 {
		float: right;
		line-height: 3.4375rem;
		font-size: 1rem;
		width: 6%;
		height: 100%;
		overflow: hidden;
		text-align: center;
		/* margin-right: 0.625rem; */
	}

	.head4 img {
		width: 100%;
	}
  .mint-loadmore-bottom{
        display: none !important;
  }

</style>
