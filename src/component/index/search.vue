<template>

	<div>
		<button @click="back()">取消</button>
		<mt-search v-model="value">
			<mt-cell v-for="item in result" :title="item.title" :value="item.value">
				
			</mt-cell>
		</mt-search>
	</div>

</template>

<script>
	export default {
			methods:{
				back(){
							this.$router.go(-1)
						},
			},
		data() {
			return {
				value: '余锦豪，周杰伦，薛之谦',
				result: [{
						title: '【余锦豪】2020歌迷见面会',
						value: '2020.12.18'
					},
					{
						title: '【周杰伦】演唱会（湛江站）',
						value: '2019.08.02'
					},
					{
						title: '【卫兰】世界巡回演唱会（佛山站）',
						value: '2019.10.21'
					},
					{
						title: '【吴亦凡】爱奇艺嘉年华',
						value: '2020.05.16'
					},
				]
			}
		}
	}
</script>

<style>
	.mint-searchbar-cancel{
		display: none;
	}
</style>

<style scoped="">
	button{
		border: none;
		background: #F8F8FF;
		position: fixed;
		z-index: 100;
		right: 4%;
		top: 2%;
	}
	.mint-searchbar {
		background: white;
	}
	
	.mint-searchbar-inner {
		background: #F5F5F5;
		border-radius: 1.25rem;
	}
	
	.mint-searchbar-core {
		background: #F5F5F5;
	}
	
	.mint-cell-text {
		color: gray;
	}
</style>