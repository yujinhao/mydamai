<template>
	<main>
		<div class="header"> <P>地址详情</P></div>
		<div id="thmap">
			<div id="info">
				<!--里面调用文字-->
			</div>
		</div>
	</main>
</template>

<script>
	export default{
		mounted() {
            //直接加载地图

		var init = function() {
			var center = new qq.maps.LatLng(21.206330, 110.356820);
			var map = new qq.maps.Map(document.getElementById('thmap'), {
				center: center,
				zoom: 14
			});
			var infoWin = new qq.maps.InfoWindow({
				map: map
			});
			infoWin.open();
			//tips  自定义内容
			infoWin.setContent('<div style="width:200px;padding-top:10px;">' +

				'广东省湛江市坡头区海湾大桥桥头北侧</div>');
			infoWin.setPosition(center);
		}
		//调用初始化函数地图
		init();

	}
        
		
			
		
	}
</script>

<style scoped="">
	.header{
		height: 8%;
		width: 100%;
		max-width: 40rem;
		text-align: center;
		position: fixed;
		top: 0;
		z-index: 1;
		background: ghostwhite;
		box-shadow: 0.0625rem 0.0625rem 0.625rem #A9A9A9;
		display:table;overflow:hidden;
	}
	.header p{
		vertical-align:middle;display:table-cell;
	}
	#thmap{
		top:10% ;
		max-height:50rem ;
		min-height: 41.25rem;
		height: 100%;
		width: 100%;
		max-width: 40rem;
		/* background: red; */
	}
</style>
