<template>
	<div class="recently-show">
		<div class="dk-title">
			<span>近期演出</span>
			<span>演出日期<i class="iconfont icon-iconfontjiantou2"></i></span>
		</div>

		<ul class="showul">
			<li class="nowaday">今天</li>
			<li>明天</li>
			<li>{{showtime}}</li>
			<li>{{showtime}}</li>
			<li>{{showtime}}</li>
			<li>{{showtime}}</li>
			<li>{{showtime}}</li>

		</ul>
		<div class="dk-swipe">

			<swiper :options="swiperOption">
				<swiper-slide v-for='item in list'>
					<div class="myswiper-box">
						<div class="img">
							<img :src="item.src">
						</div>

						<p>{{item.title}}</p>
						<span>¥{{item.price}}起</span>
					</div>
				</swiper-slide>

			</swiper>

		</div>

	</div>
	</div>

</template>

<script>
	export default {

		data() {

			return {
				list: [{
						src: 'src/assets/images/showdata/showdata1.webp',
						title: '《送来飞机》',
						price: '180'
					},
					{
						src: 'src/assets/images/showdata/showdata2.webp',
						title: '《知音号》长江首部漂移式多维体验剧',
						price: '160'
					},
					{
						src: 'src/assets/images/showdata/showdata3.webp',
						title: '《多彩贵州风》大型民族歌舞晚会',
						price: '256'
					},
					{
						src: 'src/assets/images/showdata/showdata4.webp',
						title: '《闽南传奇》',
						price: '180'
					},
					{
						src: 'src/assets/images/showdata/showdata1.webp',
						title: '《送来飞机》',
						price: '180'
					},
					{
						src: 'src/assets/images/showdata/showdata2.webp',
						title: '《知音号》长江首部漂移式多维体验剧',
						price: '160'
					},
					{
						src: 'src/assets/images/showdata/showdata3.webp',
						title: '《多彩贵州风》大型民族歌舞晚会',
						price: '256'
					},
					{
						src: 'src/assets/images/showdata/showdata4.webp',
						title: '《闽南传奇》',
						price: '180'
					}
				],

				showtime: '周一',
				swiperOption: {
					slidesPerView: 2.4,
					spaceBetween: 20,
					freeMode: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true
					}
				}
			}
		}
	}
</script>

<style scoped>
	.recently-show {
		margin-top: 0.625rem;
	}

	.dk-title {
		height: 2.125rem;
		padding: 0 5%;
		margin-bottom: 0.625rem;
	}

	.dk-title span:nth-of-type(1) {
		float: left;
		line-height: 2.125rem;
		font-size: 1.125rem;
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

	.showul {
		height: 1.875rem;
		width: 100%;
		padding: 0 5%;
	}

	.showul li {
		float: left;
		line-height: 1.875rem;
		width: 14%;
		color: #A9A9A9;
	}

	.nowaday {
		color: #000000 !important;
	}

	.dk-swipe {
		/* background: paleturquoise; */
		padding-left: 0.625rem;
		margin-top: 0.625rem;
	}

	.myswiper-box {
		/* height:17.75rem; */
		width: 110%;
		/* border: 1px solid #CD0200; */
	}

	.myswiper-box p {
		margin: 0.625rem 0;
		font-size: 0.875rem;
		font-weight: 700;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.myswiper-box span {
		font-size: 0.875rem;
	}

	.img {
		width: 85%;
		height: auto;
		overflow: hidden;
		border-radius: 0.625rem;
	}

	.img img {
		height: 100%;
		width: 100%;
	}
</style>
