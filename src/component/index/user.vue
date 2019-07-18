<template>
	<main>
		<div class="top">
			<div class="head">
				<img src="../../assets/images/icon/headpic.png" alt="">
			</div>
			<div class="loghead">
				<router-link to='/login'>
					<p>登录/注册</p>
				</router-link>
			</div>
		</div>
		<div class="one">

			<mt-cell title="我的订单" is-link>
				<img slot="icon" src="../../assets/images/icon/1.png" width="24" height="24">
			</mt-cell>

			<mt-cell title="优惠卷" is-link>
				<img slot="icon" src="../../assets/images/icon/2.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="我的票" is-link>
				<img slot="icon" src="../../assets/images/icon/3.png" width="24" height="24">
			</mt-cell>

		</div>
		<div class="divide">
			<mt-cell title="我的关注" is-link>
				<img slot="icon" src="../../assets/images/icon/4.png" width="24" height="24">
			</mt-cell>
		</div>
		<div class="divide">
			<mt-cell title="收货地址" is-link>
				<img slot="icon" src="../../assets/images/icon/5.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="常用购票人" is-link>
				<img slot="icon" src="../../assets/images/icon/6.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="实名认证" is-link>
				<img slot="icon" src="../../assets/images/icon/7.png" width="24" height="24">
			</mt-cell>
			<mt-cell title="意见反馈" is-link>
				<img slot="icon" src="../../assets/images/icon/7.png" width="24" height="24">
			</mt-cell>

		</div>
		<div class="footer">
			<p>关于大麦|联系我们</p>
		</div>

	</main>
</template>

<script>

</script>

<style scoped="">
	.loghead {
		width: 20%;
		height: 100%;
		text-align: center;
		float: left;
		margin-left: 10%;
		position: relative;
	}

	main {
		height: auto;
		background: #E7E7E7;
	}

	.top {
		position: fixed;
		padding: 0 5%;
		box-sizing: border-box;
		top: 0;
		height: 12%;
		width: 100%;
		background: #ff1268;
		z-index: 5;
		max-width: 640px;
	}

	.divide {
		margin-top: 5%;
	}

	.head {
		/* background: url(src/assets/images/icon/headpic.png) no-repeat center; */
		background: #E7E7E7;
		height: 80%;
		width: 20%;
		border-radius: 50%;
		float: left;
		margin-top: 2%;
		overflow: hidden;
	}

	.head img {
		height: 100%;
		width: 100%;
	}

	.top p {
		font-size: 0.9375rem;
		color: white;
		line-height: 100%;
		position: absolute;
		width: 100%;
		height: auto;
		top: 40%;
		left: 50%;
		text-align: center;
	}

	.one {
		margin-top: 21%;
	}

	.footer {
		position: fixed;
		bottom: 0;
		/* margin-top: 20%; */
		width: 100%;
		height: 10%;
		background: #E7E7E7;
		text-align: center;
		max-width: 640px;
	}

	.footer p {
		margin-top: 4%;
		color: grey;
	}

	.mint-cell {
		color: #999999;
	}

	.mint-cell:hover {
		color: #999999;
	}
</style>
