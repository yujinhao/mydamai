<template>
  <main>
    <div class="perbox" v-for='item in list'>
      <div class="headtop">
        <img :src="item.main" alt="">
      </div>
      <div class="head">
        <img :src="item.head" alt="">
         <span class="follow"></span>
      </div>

      <div class="headbot">
        <p>{{item.name}} <span class="vip"></span></p>
        <p>{{item.fans}}粉丝</p>
      </div>
      <div class="line"></div>
      <div class="scene">
        <ul class="sceneul" >
          <li v-for='b in item.slist'>
            <p>{{b.time}}</p>
            <p>{{b.title}}</p>
            <p>{{b.address}}</p>
          </li>
        </ul>
      </div>

    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {

        list: []
      }
    },
    mounted() {
      var _this = this;
      this.$http.get('./data/personaldata.json')
        .then(function(res) {

          console.log(_this)
          _this.list = res.data.list
        })
        .catch(() => {

        })
        .finally((f) => {
          console.log('请求结束')
        });
    }
  }
</script>

<style scoped="">
  .line{
    height: 0.625rem;
    width: 100%;
    margin-top: 10%;
    background: lightgray;
  }
  .perbox{
    position: relative;
  }
.headtop{
  width: 100%;
  height: 12.25rem;
  overflow: hidden;
}
.headtop img{
  width: 100%;
  height: auto;
}
.head{

  height: 6.8rem;
  width: 6.8rem;
  /* border-radius: 50%; */
  /* border: 0.125rem solid white; */
  position: absolute;
  top: 7.8125rem;
  left: 35%;
  /* overflow: hidden; */
}
.head img{
  border-radius: 50%;
  height: 100%;
  width: 100%;
  border: 0.09375rem solid white;
}
 .follow{
  background: url(../../../data/image/follow.png) no-repeat;
  background-size:100% 100% ;
  width: 2.125rem;
  height: 2.125rem;
  position: absolute;
  bottom: 0;
  right: 0;
  /* background: red; */
}
.headbot{
  width: 100%;
  margin-top: 10%;
  text-align: center;

}
.headbot p{
  padding: 1% 0;
  font-size: 1.125rem;
  position: relative;
}
.vip{
  background: url(../../../data/image/vip.png) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 20%;
  width: 1.25rem;
  height: 1.25rem;
}
.scene{
  padding: 5% 5%;
}
.sceneul li{
  margin: 5% 0;
  padding-bottom: 5%;
  border-bottom: 0.0625rem solid lightgray;
}
.sceneul p:nth-of-type(1){
  float: left;
  margin-right: 5%;
}
.sceneul p:nth-of-type(2){
  display: block;
    overflow: hidden;/*超出部分隐藏*/
    text-overflow:ellipsis;/* 超出部分显示省略号 */
    white-space: nowrap;/*规定段落中的文本不进行换行 */
    width: 85%;/*需要配合宽度来使用*/
    -webkit-line-clamp: 1;
    font-size: 0.9375rem;
    font-weight: 800;
}
.sceneul p:nth-of-type(3){
  display: block;
  margin-left: 12%;
  margin-top: 5%;
  color: gray;
}
</style>
