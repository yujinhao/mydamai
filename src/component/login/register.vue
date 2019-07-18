<template>
  <main>
   <div class="top">
    <img src="../../assets/images/login/logo.png" alt="">
  </div>
  <div class="box">
  <mu-container>
  <mu-form ref="form" :model="validateForm" class="mu-demo-form">
    <mu-form-item label="用户名" help-text="" prop="username" :rules="usernameRules">
      <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
    </mu-form-item>
    <mu-form-item label="密码" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="isAgree" :rules="argeeRules">
      <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>

    </mu-form-item>
    <p>我已阅读接受<a class="pinka" href="">《大麦网会员服务协议》</a>及<a class="pinka" href="">《隐私专项条款》</a>并同意自动注册成为会员</p>
    <mu-form-item>
      <mu-button color="primary" @click="submit">提交</mu-button>

    </mu-form-item>
  </mu-form>
</mu-container>
</div>
</main>
</template>

<script>
  export default {
  data () {
    return {
      usernameRules: [
        { validate: (val) => !!val, message: '必须填写用户名'},
        { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
      argeeRules: [{ validate: (val) => !!val, message: '必须同意用户协议'}],
      validateForm: {
        username: '',
        password: '',
        isAgree: false
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate().then((result) => {
        console.log('form valid: ', result)
      });
    },

  }
};
</script>

<style scoped="">
  .mu-form-item-label{
    color: gray;
  }
.mu-form-item__error {
    color: gray;
}
  .pinka{
    color: deeppink !important;
  }
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

  .box{
    padding: 5%;
  }
  .mu-demo-form {
  width: 100%;
  max-width: 40rem;
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
    margin: 0;
    margin-top: 5%;
    width: 100%;
  }
</style>
