<template>
  <main>
    <div class="top">
      <img src="../../assets/images/login/logo.png" alt="">
    </div>
    <div class="input">
      <mu-container>
        <mu-text-field v-model="value1" placeholder="请输入手机号"></mu-text-field><br />
        <mu-text-field v-model="value2" placeholder="请输入密码" label=""  :type="visibility ? 'text' : 'password'"></mu-text-field><br />
        <mu-button color="primary" @click="submit">登陆</mu-button>
      </mu-container>
    </div>
    <div class="chose">
      <span>忘记密码</span>
      <span>
        <router-link to='/register'>
        新用户注册
        </router-link>
      </span>

    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        value1: '',
        value2: '',
        visibility: false,
      }
    }
  }
</script>

<style scoped="">
  .top {
    width: 100%;
    height: 6.25rem;
    overflow: hidden;
    padding: 5% 35%;
    box-sizing: border-box;
  }

  .top img {
    width: 100%;
    height: 100%;
  }

  .input {
    padding: 5%;
  }

  .mu-input {
    width: 100%;
  }

  .mu-input__focus {
    color: deeppink;
  }
  .mu-primary-color{
    background: deeppink;
  }
  .mu-raised-button{
    width: 100%;
  }
  .chose{
    padding: 0 7%;
    color: gray;
  }
  .chose span:nth-of-type(2){
    float: right;
  }
  a{
    color: gray !important;
  }
</style>
