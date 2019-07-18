<template>
  <main>
    <div class="recently-show">
      <div class="dk-title">
        <span>更多演出</span>
        <span>演出日期 <i class="iconfont icon-iconfontjiantou2"></i></span>
      </div>
  <nav @click="changetop()" class="nav" id="searchBar" :class="scrollFixed === true ? 'isFixed' :''">
      <ul class="showul">
    <a id="sb">
          <li @click="showchose()">全部推荐 <i class="iconfont icon-plus-select-down"></i></li>
          <li @click="showchose()">全部时间 <i class="iconfont icon-plus-select-down"></i></li>
          <li class="actint">推荐排序</li>
          <li>距离最近</li>
          </a>
      </ul>

   </nav>


    <mt-popup v-model="popupVisible" popup-transition="popup-fade" closeOnClickModal="true"  position="top">
    <div>
      <ul class="showul">
        <li>全部推荐<i class="iconfont icon-plus-select-up"></i></li>
        <li>全部时间<i class="iconfont icon-plus-select-up"></i></li>
        <li @click="close()" class="actint">推荐时间</li>
        <li>距离最近</li>
      </ul>
       <ul>
         <!-- <component :is='msg'></component> -->

       </ul>

    </div>
    </mt-popup>

<moreshowlist></moreshowlist>
    </div>


  </main>
</template>

<script>
  import moreshowlist from './moreshowlist.vue'
  // import allclass from './allclass.vue'
  // import alltime from './alltime.vue'
  export default {
   components:{
     'moreshowlist':moreshowlist,
     // 'allclass':allclass,
     // 'alltime':alltime
   },
  mounted() {
     // window.addEventListener('scroll', this.menu);
    // 需吸顶元素 距 离浏览器顶端的高度
    this.offsetTop = document.querySelector('#searchBar').offsetTop; //固定值了，如一开始距离500px
    // 滚动监听
    window.addEventListener('scroll', this.windowScroll); //scroll是事件

  },

  //销毁
  destroyed() {
    // 关闭 销毁监听
    window.removeEventListener('scroll', this.windowScroll);
  },
  methods: {
    menu() {
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(this.scroll)
        // 监听鼠标滚动事件
    },
   showchose(){
     this.popupVisible = true
   },
   changetop(){
      document.documentElement.scrollTop =1000 ;
     document.body.scrollTop=1000;
   },
   close(){
       this.popupVisible =!this.popupVisible
   },
    windowScroll() {
      // 滚动条顶部 距 滚动原点的高度,是变量
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      /**
       * 三目运算
       * 两个高度比较
       * 如果滑动距离 > 吸顶元素到页面顶端距离  动态添加
       */

      //滚动的变量继续变大，当>500px时就吸顶
      scrollTop >= this.offsetTop ? this.scrollFixed = true : this.scrollFixed = false;
    },
    show() {
      this.f1 = !this.f1;
      intd.style.height = '100%'

    },
  },
  data() {
      return {
        popupVisible: false,
        scrollFixed: false,
        offsetTop: 0,
        msg:'allclass'
      }
    }
  }
</script>

<style scoped="">
  .mint-popup-top{
	  margin-top: 3.4375rem;
    width: 100%;
    height: 50%;
    padding: 0 5%;
    box-sizing: border-box;
    max-width: 40rem;
    overflow: hidden;
  }

  .isFixed {
    position: fixed;
    top: 3.4375rem;;
    z-index: 999;
    /* box-shadow: 0 0.0625rem 0.125rem #A9A9A9; */
    /* transition: all 1s; */
    font-size: 0.875rem;
    /* margin: 0 auto; */
  }

  #searchBar {
    width: 100%;
    background: white;
    max-width: 40rem;
    font-size: 0.875rem;
  }
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
    font-size: 1.125rem;
    line-height: 2.125rem;
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

  .showul {
    height: 2.875rem;
    width: 100%;
    padding: 0 5%;
    /* box-sizing: border-box; */
  }

  .actint {
    color: deeppink !important;
  }

  .showul li {
    float: left;
    line-height: 2.875rem;
    width: 25%;
    color: #A9A9A9;
  }
</style>
