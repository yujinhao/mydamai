<template>
	<div>
		<mt-header title="地区">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
				<!-- <mt-button @click="handleClose">关闭</mt-button> -->
			</router-link>
			<!-- <mt-button icon="more" slot="right"></mt-button> -->
		</mt-header>

		<mt-index-list>
			<div style="height: 5.25rem;">
				<mt-index-section index="定位城市">

					<div class="fail">定位失败</div>
				</mt-index-section>
			</div>
			<div style="height: 12.5rem;">
				<mt-index-section index="热门城市/区域">

					<div class="fail">全国</div>
					<div class="fail">境外</div>
					<div class="fail">北京</div>
					<div class="fail">上海</div>
					<div class="fail">深圳</div>
					<div class="fail">广州</div>
					<div class="fail">杭州</div>
					<div class="fail">天津</div>
					<div class="fail">香港</div>

				</mt-index-section>
			</div>
			<mt-index-section index="A">
				<mt-cell title="安庆"></mt-cell>
				<mt-cell title="鞍山"></mt-cell>
				<mt-cell title="澳门"></mt-cell>
			</mt-index-section>
			<mt-index-section index="B">
				<mt-cell title="巴彦淖尔"></mt-cell>
				<mt-cell title="保定"></mt-cell>
				<mt-cell title="北海"></mt-cell>
				<mt-cell title="北京"></mt-cell>
				<mt-cell title="滨州"></mt-cell>
			</mt-index-section>
			<mt-index-section index="C">
				<mt-cell title="安庆"></mt-cell>
				<mt-cell title="鞍山"></mt-cell>
				<mt-cell title="澳门"></mt-cell>
			</mt-index-section>
			<mt-index-section index="D">
				<mt-cell title="安庆"></mt-cell>
				<mt-cell title="鞍山"></mt-cell>
				<mt-cell title="澳门"></mt-cell>
			</mt-index-section>
			<mt-index-section index="E">
				<mt-cell title="安庆"></mt-cell>
				<mt-cell title="鞍山"></mt-cell>
				<mt-cell title="澳门"></mt-cell>
			</mt-index-section>
			<mt-index-section index="F">
				<mt-cell title="安庆"></mt-cell>
				<mt-cell title="鞍山"></mt-cell>
				<mt-cell title="澳门"></mt-cell>
			</mt-index-section>
			<mt-index-section index="G">
				<mt-cell title="安庆"></mt-cell>
				<mt-cell title="鞍山"></mt-cell>
				<mt-cell title="澳门"></mt-cell>
			</mt-index-section>
			<mt-index-section index="H">
				<mt-cell title="安庆"></mt-cell>
				<mt-cell title="鞍山"></mt-cell>
				<mt-cell title="澳门"></mt-cell>
			</mt-index-section>
			<mt-index-section index="Z">
				<mt-cell title="Zack"></mt-cell>
				<mt-cell title="Zane"></mt-cell>
			</mt-index-section>
		</mt-index-list>
	</div>
</template>

<script>
</script>

<style>
	.mint-header {
		background: #F5F5F5;
		color: #696969;
	}
	
	.mint-indexlist-nav {
		display: none;
	}
	
	.mint-indexlist-content {
		margin-right: 0;
	}
	
	.fail {
		/* float: left; */
		float: left;
		border: 0.0625rem solid #e7e7e7;
		height: 2.2rem;
		width: 6.125rem;
		text-align: center;
		margin: 0.3125rem 0.625rem;
		line-height: 2.2rem;
		border-radius: 0.2rem;
		color: #A9A9A9;
	}
</style>