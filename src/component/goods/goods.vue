<template>
  <main>
    <div class="overflow">
      <div class="head">

        <div class="smpic"><img src="../../assets/images/goodpic/zhou.jpg" alt=""></div>
        <p>【湛江】2019超级巨星（湛江）演唱会</p>
        <span class="headspan">￥380-￥1880</span>

        <div class="service">

          <span>
            <i class='iconfont icon-dui'></i> 可选座
          </span>
          <span>
            <i class='iconfont icon-dui'></i>快递票
          </span>
          <span>
            <i class='iconfont icon-dui'></i>纸质发票
          </span>

        </div>

      </div>
      <div class="timeaddress">
        <p>2019.08.02周五 20:00</p>
        <p class="line">演出时长约120分钟（以现场为主）</p>

      </div>

      <div class="timeaddress">
        <router-link to='/txdw'>
          <p>湛江市|湛江奥体中心体育场</p>
          <p>广东省湛江市坡头区海湾大桥头北侧</p>
          <span><img src="../../assets/images/goodpic/address.png" alt=""></span>
        </router-link>
      </div>

  <a id="act1"><div class="aline"></div></a>
      <nav class="nav" id="searchBar" :class="scrollFixed === true ? 'isFixed' :''">
        <!-- <div class="content"> -->
        <div @click="msg='details'" class="tab">
        <p> <a href="#act1">详情</a></p>
        <span id="pink1" class="tabspan" :class="{pink:msg=='details'}"></span>
        </div>
        <div @click="msg='know'" class="tab">
        <p><a href="#act2">须知</a></p>
        <span id="pink2" class="tabspan" :class="{pink:msg=='know'}"></span>
        </div>
        <div @click="msg='tj'" class="tab">
          <p><a href="#act3">推荐</a></p>
          <span id="pink3" class="tabspan" :class="{ pink:msg=='tj'}"></span>
        </div>
        <!-- </div> -->
      </nav>
      <div id="intd" class="introduce">
        <div class="mytitle">
          <p>演出介绍</p>
        </div>
        <div>
          <h3>购票须知</h3>
          <p>1、避免影响抢票体验，请您升级到大麦App最新版本购票。</p>
          <p>2、请您提前在大麦App后台添加完整个人的购票信息，包括身份证、电话、地址，以方便购票。</p>
          <p>3、不支持合并配送，不支持不同订单号连座安排，敬请谅解。</p>
          <p><strong>【追忆我们逝去的青春】</strong></p>
          <p>周杰伦一直在华语乐坛，坚毅的、蓬勃的积蓄着自己的能量和光芒，从开始的青涩不羁到后来的强势霸气，再到现在的稳重从容；回望来路，他和他的歌声充盈了我们的青春，却又不仅仅止步于我们的青春。如果有一天，有人带你去听周杰伦的演唱会，那么他要带你听的是他整个青春。</p>
          <div class="ppic"><img src="../../assets/images/goodpic/zjl.jpg" alt=""></div>
          <p>周杰伦可谓是天王级别的歌星，有着"流行歌王"的称号，无论演唱会的火热，还是各音乐排行榜的数据都表明，他的歌曲确实是经久不衰，其人气实在是太高了。近日，周杰伦《听见下雨的声音》MV
            播放量在YouTube破亿，使他成为华语首个四首作品破亿的歌手！另外三首分别是《告白气球》、《不该》、《等你下课》，其中《告白气球》的播放量更是华语第一。他每一次的尝试都是华语流行乐坛的开拓，天马行空的创作思路，周杰伦的歌曲与任何一种音乐形式都不完全相同，形成极强的个人风格。8月2日，他即将来到湛江，震撼开唱！</p>
          <p>华丽的舞台效果萦绕，黄金乐团配置重磅出击，全部的舞台、灯光、美术造型甚至伴舞，全程由周杰伦经纪公司台湾巨室文创音乐以个唱的标准制作，品质打造全新品牌演唱会。一首首经典歌曲现场重新演绎，浓郁的情感激荡灵魂之乐。相信这场周杰伦和田馥甄首次在内地的同台演唱会，绝不会辜负您的期待！势必会令大家感受到犹如个唱般的震撼和感动！</p>
          <div class="ppic"> <img src="../../assets/images/goodpic/wutai.webp" alt=""></div>
          <p>超强的明星阵容，全新的主题造型，震撼的视听盛宴。2019超级巨星演唱会湛江站，让我们一起分享彼此的青春吧！</p>
          <p>地点：广东省湛江市坡头区海湾大桥侧湛江奥林匹克体育中心体育场</p>
          <p></p>
          <p></p>
        </div>
      </div>

      <div class="show" v-if="f1">
        <div class="mohu"></div>
        <p @click="show()">展开更多</p>
      </div>

      <actor></actor>

      <div class="know">
        <div class="mytitle">
          <p>须知事项</p>
        </div>
        <ul>
          <li class="mylist">
            <p>
              <icon class='iconfont icon-dui' ></icon><icon class='iconfont icon-dui' ></icon>限购说明
            </p>
            <p>选座购买每单限6张，立即购买每单限20张</p>
          </li>
          <li class="mylist">
            <p>
              <icon class='iconfont icon-dui' ></icon><icon class='iconfont icon-dui' ></icon>实名制
            </p>
            <p>无需实名制购票</p>
          </li>
          <li class="mylist">
            <p>
              <icon class='iconfont icon-dui' ></icon><icon class='iconfont icon-dui' ></icon>儿童购票说明
            </p>
            <p>1.2米以上凭成人票入场，1.2米以下谢绝入场</p>
          </li>
        </ul>
    <a id="act2">     <p class="pbtn">全部8条购票须知</p></a>
      </div>

      <div class="know">
        <div class="mytitle">
      <p>观演须知</p>
        </div>
        <ul>
          <li class="mylist">
            <p>

              <icon class='iconfont icon-dui' ></icon>入场须知
            </p>
            <p>演出前约90分钟</p>
          </li>
          <li class="mylist">
            <p>
             <icon class='iconfont icon-dui' ></icon>禁止携带物品
            </p>
            <p>由于安保和版权的原因，大多数演出、展览及比赛场所禁止携带食品、饮料、专业摄录设备、打火机等物品，请您注意现场工作人员和广播的提示，予以配合</p>
          </li>
          <li class="mylist">
            <p>
             <icon class='iconfont icon-dui' ></icon>寄出说明
            </p>
            <p>无寄存处，请自行保管携带物品</p>
          </li>
        </ul>
       <a id="act3"> <p class="pbtn">全部7条观演须知</p></a>
      </div>

      <div class="bot">
        <div>
          <router-link to='/index'>
            <img class="icon" src="../../assets/images/goodpic/index.png" alt=""> 大麦
          </router-link>
        </div>
        <div>

          <img class="icon" src="../../assets/images/goodpic/love.png" alt=""> 想看

        </div>
        <span @click="buy()">
          <p>选座购买</p>
        </span>
      </div>
      <div class="linetitle">为你推荐</div>
      <moreshowlist>

      </moreshowlist>

      <ul>
        <mt-popup v-model="popupVisible" popup-transition="popup-fade" closeOnClickModal="true"  position="bottom">

              <div class="close-box">
                 <span class="usi-btn-cancel" @click="popupVisible = !popupVisible"><img style="height: 100%;width: 100%;" src="../../assets/icon/close.png" alt=""></span>
              </div>
             <div class="setbox">

               <ul class="mypriceul">
                 <li class="mypriceli"><p>场次</p></li>
                 <li class="mypriceli"><p class="mypricelipp actpp">2019-08-02周五20:00</p></li>
                </ul>
               <ul class="mypriceul">
                   <li class="mypriceli"><p >票档</p></li>
                   <li @click="bg='a'"  class="mypriceli"><p :class="{bggray:bg=='a'}" class="mypricelipp">看台380元</p></li>
                   <li @click="bg='b'" class="mypriceli"><p :class="{bggray:bg=='b'}" class="mypricelipp">看台580元</p></li>
                   <li @click="bg='c'"  class="mypriceli"><p :class="{bggray:bg=='c'}" class="mypricelipp">看台880元</p></li>
                   <li @click="bg='d'" class="mypriceli"><p :class="{bggray:bg=='d'}" class="mypricelipp">内场880元</p></li>
                   <li @click="bg='e'" class="mypriceli"><p :class="{bggray:bg=='e'}" class="mypricelipp">内场1280元</p></li>
                   <li @click="bg='f'" class="mypriceli"><p :class="{bggray:bg=='f'}" class="mypricelipp">内场1580元</p></li>
                   <li @click="bg='g'" class="mypriceli"><p :class="{bggray:bg=='g'}" class="mypricelipp">内场1880元</p></li>
               </ul>

             </div>
             <div class="price-button">
               <p class="price-button-left">更多信息请前往选座页</p>
               <span class="price-button-right">
                 <p><router-link to='/shopcar'>确定</router-link></p>
                 </span>
             </div>
        </mt-popup>
      </ul>
    </div>
  </main>
</template>

<script>
  import buy from './buy.vue'
  import moreshowlist from'../index/moreshowlist.vue'
  export default {
    mounted() {

       // window.addEventListener('scroll', this.menu);
      document.documentElement.scrollTop =0 ;
      document.body.scrollTop=0;
      // 需吸顶元素 距 离浏览器顶端的高度
      this.offsetTop = document.querySelector('#searchBar').offsetTop; //固定值了，如一开始距离500px
      // 滚动监听
      window.addEventListener('scroll', this.windowScroll); //scroll是事件
      // window.addEventListener('scroll', this.changepink);
    },
    //销毁
    destroyed() {
      // 关闭 销毁监听
      window.removeEventListener('scroll', this.windowScroll);
    },
    methods: {
      buy(){
        this.popupVisible = true
      },
//       changepink(){
//         let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//         if(scrollTop>=380){
//           $('#pink1').addClass('pink');
//
//         }else if(scrollTop>=700){
//           // msg='know'
//           $('#pink2').addClass('pink');
//         }else if(scrollTop>=1340){
//           // msg='tj'
//           $('#pink3').addClass('pink');
//         }
//       },
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
      // 监听鼠标滚动事件
      //  menu() {
      //     this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      //     console.log(this.scroll)
      //
      // },
      gb(){
        this.pink=!this.pink
      }
    },
    components: {
      'buy': buy,
      'moreshowlist':moreshowlist,
    },
    data() {
      return {
        bg:'a',
        msg:'details',
        num:0,
        popupVisible: false,
        f1: true,
        scrollFixed: false,
        offsetTop: 0
      }
    }
  }
</script>

<style scoped="">
 .router-link-exact-active,.router-link-active{
   color: #000000;
 }
  .setbox{
    height: 23.75rem;
	  overflow: scroll;
  }
  .iconfont{
    color: deeppink;
  }
  .linetitle{
    margin-left: 5%;
    font-size: 1.125rem;
    font-weight: 800;
  }
  .mypriceli{
    width:30%;
    padding: 0% 0% 5% 5%;
    float: left;
  }
  .mypricelipp{
    float: left;
    width: 100%;
    height: 100%;
    background: lightgray;
    padding: 15%
  }
  .bggray{
    background:pink;
  }
  .mypriceli:nth-of-type(1){
    display: block;
    width: 100%;
    font-size: 1.125rem;
    font-weight: 800;
  }
  .mint-popup{
    width: 100%;
    height: 80%;
    padding: 0 5%;
    box-sizing: border-box;
    border-radius: 1.25rem 1.25rem 0 0;
    max-width: 40rem;
    overflow: hidden;
  }
.price-button{
  position: fixed;
  bottom:0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 5% 0;
  background-color: white;
}
  .close-box{
    width: 100%;
    height: 3.125rem;
  }
  .price-button-left{
    float: left;
    margin-left: 5%;
    padding: 5% 0;
    color: grey;
  }
  .price-button-right{
    float: right;
    margin-right: 5%;
    width: 45%;
    padding: 3% 0;
    display: table;
    overflow: hidden;
    text-align: center;
    height: 100%;
    color: white;
    border-radius: 2.5rem 2.5rem 2.5rem 2.5rem;
    text-align: center;
    background: linear-gradient(to right, #FF7B81, #FF317A);
  }
  .price-button-right p{
    font-size: 0.9375rem;
    vertical-align: middle;
    display: table-cell;
  }
  .actpp{
    background: rgba(255,45,121,.1);
    color: deeppink;
  }
  .close-box span{
    float: right;
    height: auto;
    width: 5%;
    vertical-align:middle;
    display:table-cell;
    margin-top: 5%;
  }
  .overflow {
    overflow: hidden;
    width: 100%;
  }

  .isFixed {
    position: fixed;
    top: 0;
    z-index: 999;
    box-shadow: 0.0625rem 0 0.625rem #A9A9A9;
    transition: all 1s;
    /* margin: 0 auto; */
  }

  #searchBar {
    width: 100%;
    background: white;
    max-width: 40rem;
  }

  .head::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: -1;
    -webkit-filter: blur(15px);
    -moz-filter: blur(15px);
    -o-filter: blur(15px);
    -ms-filter: blur(15px);
    filter: blur(15px);
    color: #fff;
    background-size: cover;
    background-color: rgba(28, 49, 78, 0.35);
    background-image: url(../../assets/images/goodpic/zhou.jpg);
    box-sizing: border-box;
    max-width: 40rem;
  }

  .head {
    position: relative;
    box-sizing: border-box;
    padding: 5% 0;
    height: 30%;
    width: 100%;
    overflow: hidden;
    background-repeat: no-repeat;
    /* background-color: rgba(28, 49, 78, 0.35); */
  }

  .head p {
    font-weight: 700;
    font-size: 1.125rem;
    width: 55%;
    color: white;
    float: left;
    margin: 0 5%;
    vertical-align: middle;
    display: table-cell;
  }

  .headspan {
    font-size: 1rem;
    position: absolute;
    bottom: 0;
    color: white;
    float: left;
    vertical-align: middle;
    display: table-cell;
    margin-left: 40%;
    margin-bottom: 13%;
  }

  .bot {
    position: fixed;
    bottom: 0;
    height: 8%;
    max-width: 640px;
    width: 100%;
    background: white;
    box-sizing: border-box;
    padding: 0.3125rem 0.625rem;
    z-index: 1000;
  }

  .bot div:nth-of-type(1) {
    float: left;
    width: 15%;
    height: 100%;
    text-align: center;
    color: gray;
  }

  .bot img {
    margin: 0 auto;
  }

  .bot div:nth-of-type(2) {
    float: left;
    width: 15%;
    height: 100%;
    text-align: center;
    color: gray;
  }

  .bot div:nth-of-type(1) a {
    color: gray;
  }

  .bot span:nth-of-type(1) {
    display: table;
    overflow: hidden;
    float: right;
    width: 70%;
    height: 100%;
    color: white;
    border-radius: 2.5rem 2.5rem 2.5rem 2.5rem;
    text-align: center;
    background: hotpink;
    background: linear-gradient(to right, #FF7B81, #FF317A);
  }

  .bot span:nth-of-type(1) p {
    font-size: 0.9375rem;
    vertical-align: middle;
    display: table-cell
  }

  .icon {
    display: block;
  }

  .bgpic {
    /* height: 80%; */
    width: 100%;
    display: table;
    overflow: hidden;
    position: relative;
  }

  .smpic {
    margin-bottom: 8%;
    margin-left: 5%;
    height: auto;
    width: 30%;
    float: left;
    vertical-align: middle;
    display: table-cell;
  }

  .smpic img {
    height: 100%;
    width: 100%;
  }

  .service {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    max-width: 40rem;
    bottom: 0;
    background: #F8F8F8;
    padding: 3% 5%;
    border-radius: 1rem 1rem 0 0;
  }

  .service span {
    margin-right: 5%;
  }

  .fa {
    color: deeppink;
    height: 0.75rem;
    width: 0.75rem;
    padding-right: 2%;
  }

  .timeaddress p:nth-of-type(1) {
    font-size: 1.125rem;
    font-weight: 800;
  }

  .timeaddress p:nth-of-type(2) {
    font-size: 0.75rem;
    font-weight: 500;
    color: #A9A9A9;
    margin-top: 2%;
  }

  .timeaddress {
    padding: 3% 3% 2% 5%;
    position: relative;
  }

  .line {
    padding-bottom: 7%;
    border-bottom: 0.03125rem solid #E7E7E7;
  }

  .timeaddress span {
    position: absolute;
    top: 40%;
    right: 5%;
    border-left: 0.03125rem solid #A9A9A9;
    padding-left: 5%;
  }

  .aline {
    margin-top: 3%;
    height: 0.625rem;
    width: 100%;
    background: #F8F8F8;
  }

  .content {
    width: 100%;
    background: white;
  }

  .tab {
    position: relative;
    width: 33%;
    float: left;
    text-align: center;
  }

  .tab p {
    font-size: 0.9375rem;
    padding: 10% 0;
  }

  .tabspan {
    position: absolute;
    top: 68%;
    left: 38%;
    height: 10%;
    width: 25%;
  }
.pink{
   background: linear-gradient(0deg, deeppink, #FF7B81);
}
  .mytitle {
    width: 100%;
  }

  .mytitle p {
    color: #000000 !important;
    padding: 5% 0 3% 5%;
    font-size: 1.25rem;
    font-weight: 800;
  }

  .introduce {
    padding: 0 5%;
    overflow: hidden;
    height: 14.375rem;
  }

  .introduce p {
    color: #808080;
    margin: 2% 0;
  }

  .ppic {
    overflow: hidden;
  }

  .ppic img {
    height: 100%;
    width: 100%;
  }

  .show {
    width: 100%;
    position: relative;
    /* height: 3.125rem; */
    text-align: center;
    /* border-top:1px solid #E7E7E7 ; */
    border-bottom: 1px solid #E7E7E7;
    box-shadow: 0rem -0.0625rem 0.3125rem ghostwhite;
  }

  .show p {
    font-size: 1.125rem;
    color: #FF1493;
    padding: 3% 0 5% 0;
  }

  .mohu {
    position: absolute;
    top: -70%;
    height: 70%;
    width: 100%;
    /* 白色到透明 */
    background: white;
    background: -webkit-gradient(linear, 0 top, 0 bottom, from(hsla(0, 0%, 100%, 0)), to(#fff));
  }

  .know {
    border-bottom: 1px solid gainsboro;
    margin-bottom: 5%;
    /* text-align: center; */
  }

  .mylist p:nth-of-type(1) {
    padding: 5% 5% 0 5%;
    font-size: 0.8125rem;
    color: #000000;
  }

  .mylist p:nth-of-type(2) {
    padding: 2% 0% 0 10%;
    color: gray;
    font-size: 0.8125rem;
  }

  .pbtn {
    padding: 5% 5% 5% 5%;
    color: deeppink;
    text-align: center;
    font-size: 18px;
  }
</style>
