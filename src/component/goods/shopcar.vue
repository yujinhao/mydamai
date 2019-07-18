<template>
  <div class="shopcar">

            <div class="page-header">购物车</div>
            <div class="table">
                <ul class="topul">
                  <!-- label 元素不会向用户呈现任何特殊效果。
                  不过，它为鼠标用户改进了可用性。如果您在 label 元素内点击文本
                  ，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。 -->
                    <li class="allchose"><label><input class="chosebtn" type="checkbox" @click="check_all" :checked="check_goods.length == cart_list.length"/>全选</label></li>

                </ul>
                <ul class="goodli" v-for="(cart,index) in cart_list" :key="index">

                    <li class="checkbox"><input type="checkbox" :value="cart" v-model="check_goods" /></li>
                    <li class="title">{{cart.goods_name}}</li>
                    <li class="add">{{cart.goods_add}}</li>

                    <li class="pic">
                      <img :src="cart.src" alt="">
                      </li>
                    <li class="jiajian">
                        <span class="" v-on:click="reduce(cart)"><i class="iconfont icon-jian1"></i></span>
                        <input class="inputjj" type="number" v-model="cart.num" />
                        <span class="" v-on:click="add_num(cart)"><i class="iconfont icon-jia"></i></span>
                         <button class="btn " v-on:click="delete_num"><i class="iconfont icon-lajixiang"></i></button>
                    </li>

                     <li class="price">¥{{cart.goods_price}}</li>

                </ul>
            </div>
            <div class="mycarbot">
               <p>总计：共 {{cart_list.length    }}件商品，已选择 {{total_num}} 件</p>
                <div class="pull-right">
                    <span class="total">¥{{total_price}}</span>
                    <span class="buybtn"  :disabled="check_goods.length <= 0">提交订单</span>
                </div>
            </div>

  </div>
</template>

<script>
  export default{
    data() {
    return {
        cart_list: [{
            src:'./data/image/t5.webp',
        　　goods_name: 'MY BEAUTIFUL CURSE侧田演唱会2019-广州站',
            goods_add:'广州 / 广州体育馆',
        　　goods_price: '1800',
        　　num: '2',
        },{
           src:'./data/image/t1.webp',
           goods_name: '雪松国际信托2019林书豪明星赛',
           goods_add: '广州 / 宝能国际体育演艺中心',
           goods_price: '380',
           num: '1',
        },{
           src:'./data/image/t2.webp',
           goods_name: '海阔天空-六月的想念演唱会',
           goods_add: '广州 / 广州海心沙亚运公园亚运看台',
           goods_price: '680',
           num: '1',
        },
        {
           src:'./data/image/t1.webp',
           goods_name: '雪松国际信托2019林书豪明星赛',
           goods_add: '广州 / 宝能国际体育演艺中心',
           goods_price: '380',
           num: '1',
        },
        ],
           check_goods: [] //已选择的商品
          }
    },
    computed: {
//              总价
                total_price() {
                    let price = 0;　　　　　　　　　　　　　　　　　　　　　　　　
                    this.check_goods.forEach(item => {
//                      总价 = 价格 * 数量
                        price += Number(item.goods_price) * Number(item.num)
                    })
                    return price
                },
//              数量
                total_num() {
                    let t_num = 0;
                    this.check_goods.forEach(item => {
                        t_num += Number(item.num);
                    })
                    return t_num
                }
            },
            methods:{
//              商品类减减
                reduce(cart) {
                    if(cart.num <=0) {
                        cart.num = 0
                    } else {
                        cart.num --
                    }
                },
//              商品累加
                add_num(cart) {
                    cart.num++
                },
//              删除商品
                delete_num(cart){
                    this.check_goods.splice(this.check_goods.indexOf(cart),1)
                    this.cart_list.splice(this.cart_list.indexOf(cart),1)
                },
//              全选
                check_all() {
                    if (this.check_goods.length >0) {
                        this.check_goods = []
                    } else {
                        this.cart_list.forEach(item => {
                            this.check_goods.push(item)
                        })
                    }
                }
            }
  }
</script>

<style scoped="">
  .btn-group{
    width: 10%;
    border: 1px solid gainsboro;
    border-radius: 0.3125rem;
  }
  .topul{
    margin-top: 2%;
  }
  .shopcar{
    height: 100%;
    width: 100%;
    background: rgb(242, 243, 244);
  }
  .goodli{
    position: relative;
    background: white;
    border-radius: 0.625rem;
    margin:5% 0;
    padding: 2%;
    overflow: hidden;
  }
.page-header{
  padding: 5%;
  text-align: center;
  font-size: 1.125rem;
  font-weight: 800;
  background: white;
}
.table{
  margin-bottom: 3.4375rem;
  padding: 0 5%;
  overflow: auto;
}
  .mycarbot{
    position: fixed;
    bottom: 0;
    width: 100%;
    background: white;
    padding:0 5%;
    max-width: 40rem;
  }

  .total{
    float: left;
    padding:3% 6% 3% 0%;
    color: deeppink;
    font-size:1.125rem;
  }
  .buybtn{
    float: right;
    padding:3% 6%;
    border-radius:1.25rem;
    background: linear-gradient(to right, #FF7B81, #FF317A);
    color: white;
  }
  .chosebtn{
    border-radius:50% ;
    color: deeppink;
  }
  .inputjj{
    width: 1.5625rem;
    border: 0.0625rem solid gainsboro;
    border-radius: 0.3125rem;
  }
  .btn{
    border: 0;
    background-color: inherit;
  }
  .check{
    position: absolute;
    color: deeppink;
    top: 0;
  }
  .checkbox{
    position: relative;
  }

  .iconfont{
    color: deeppink;
  }
  .title{
  float: left;
  width: 75%;
  /* font-size: 1.125rem; */
  font-weight: 800;
  }
  .add{
    float: left;
    color: gray;
    width: 75%;
  }
  .pic{
   position: absolute;
   top: 15%;
   right: 0%;
    height:65%;
    width: 20%;
    margin-right: 5%;
  }
  .pic img{
    height: 100%;
    width: 100%;
  }
  .jiajian{
    float: left;
    width: 68%;
    margin-bottom: 6%;
  }
  .btn{
    float: right;
  }
  .price{
   position: absolute;
   /* width: 100%; */
   left: 1%;
   bottom: 1%;
    margin-left: 1%;
  }
</style>
