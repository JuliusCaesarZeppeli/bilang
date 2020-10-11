// 注册页面 张瑄睿作，转载必究
<template>
  <div>
    <!-- 标题 -->
    <van-nav-bar
      title="比朗"
      left-text="返回"
      right-text="●●●"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="banner">
      <img src="../assets/images/注册/logo.png">
    </div>
    <div class="form_">
      <div class="input_">
        <img src="../assets/images/注册/login_icon_1.png" >
        <img src="../assets/images/注册/border.png">
        <input type="text" placeholder="请输入手机号码">
        <button class="auth_code">发送验证码</button>
      </div>
      <div class="input_">
        <img src="../assets/images/注册/login_icon_2.png" >
        <img src="../assets/images/注册/border.png">
        <input type="text" placeholder="请输入验证码">
      </div>
      <div class="input_">
        <img src="../assets/images/注册/login_icon_3.png" >
        <img src="../assets/images/注册/border.png">
        <input type="text" placeholder="请输入手机号码">
        <img src="../assets/images/注册/login_icon_4.png">
      </div>
    </div>
    <div class="please_read"><img src="../assets/images/注册/iconfont.png"><span>请阅读</span><span>《注册须知》</span></div>
    <div class="btn" @click="$router.push({name:'SignIn'})">
      <button >注册</button>
    </div>
  </div>
</template>
<script>
export default {
  name:"Register",
  data(){
    return {

    }
  },
  methods: {
  onClickLeft() {
    this.$router.go(-1);
  },
  onClickRight() {
    this.$toast('按钮');
  },
  },
}
</script>
<style scoped>
.banner{
  width: 5.12rem;
  height: 0.67rem;
  margin: 1.98rem auto 1.52rem;
}
.banner>img{
  width: 5.12rem;
  height: 0.67rem;
}
.input_{
  width: 6.1rem;
  height: 1rem;
  background: #F3F4F6;
  margin: 0 auto;
  padding-left: 0.33rem;
  box-sizing: border-box;
  display: flex;
  align-items:center;
  margin-top: 0.1rem;
}
.input_>img:nth-child(1){
  width: 0.3rem;
  height: 0.3rem;
  margin-right: 0.33rem;
}
.input_>img:nth-child(2){
  width: 0.02rem;
  height: 0.5rem;
  margin-right: 0.31rem;
}
.input_>input{
  font-size: 0.24rem;
  color: #BBBBBB;
  border: none;
  background: none;
}
.auth_code{
  width:1.9rem;
  height:1rem;
  font-size:0.24rem;
  color: #fff;
  background: #234497;
  border: none;
}
.input_>img:last-child{
  width: 0.36rem;
  height: 0.28rem;
  float: right;
  margin-left: 1rem;
}
.please_read{
  width: 6.1rem;
  height: 0.23rem;
  font-size: 0.24rem;
  color: #999999;
  margin: 0.32rem auto ;
}
.please_read>img{
  width: 0.24rem;
  height: 0.24rem;
  margin-right: 0.1rem;
}
.please_read>span:last-child{
  color: #234497;
  font-weight: normal;
}
.btn{
  width: 6.1rem;
  height: 1rem;
  margin: 0 auto;
}
.btn>button{
  width: 6.1rem;
  height: 1rem;
  border: none;
  font-size: 0.3rem;
  color: #fff;
  background: #234497;
  border-radius: 0.1rem;
}
</style>