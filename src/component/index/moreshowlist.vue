<template>
  <div id="morelist">

    <ul >
      <router-link to='/goods'>
			<li class="box" v-for="(item,index) in list">
				<div class="picbox">
           <img :src="item.src" alt="">
        </div>

				<p>{{item.title}}</p>
        <p>{{item.stitle}}</p>
				<p>￥{{item.price}}起</p>
			</li>
      </router-link>
		</ul>
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading';
export default {
   components: {
            InfiniteLoading,//直接在组件中声明
        },
  data () {
    return {

			list:[]
    }
  },
	mounted() {
     var _this=this;
		this.$http.get('./data/data.json')
  .then(function(res){

    console.log(_this)
    _this.list=res.data.list
  })
  .catch(()=>{

  })
  .finally( (f)=> {
    console.log('请求结束')
  });
	}
}
</script>

<style scoped="">
/* #morelist{
  background: white;
} */
ul{
  padding: 5%;
}
li{
  overflow: hidden;
  margin: 5% 0;
  position: relative;
}
.picbox{
  float: left;
  width: 30%;
  height: auto;
  overflow: hidden;
  border-radius:5% ;

}
.picbox img{
  width: 100%;
  height: 100%;
}
p{
  float: left;
}
li p:nth-of-type(1){
  width: 60%;
  font-size: 1rem;
  font-weight: 800;
  margin-left: 5%;
}
li p:nth-of-type(2){
  width: 60%;
  margin-left: 5%;
  color: darkgray;
  font-size: 0.8125rem;
  padding-top: 5%;
  overflow: hidden;/*超出部分隐藏*/
  text-overflow:ellipsis;/* 超出部分显示省略号 */
  white-space: nowrap;/*规定段落中的文本不进行换行 */
 /* width: 250px; *//*需要配合宽度来使用*/
  -webkit-line-clamp: 1;/* 超出行数 */

}
li p:nth-of-type(3){
  width: 15%;
  position: absolute;
  bottom: 0;
  left: 35%;
  color: deeppink;
  font-size: 0.8125rem;
}
</style>
