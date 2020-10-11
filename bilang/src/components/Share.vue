<template>
<!-- 我的私享卡 -->
  <div class="share">
    <!-- 导航栏 -->
    <van-nav-bar
    class="nav"
    title="我的订单"
    left-text="返回"
    right-text="●●●"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
    
    <!-- 分享 -->
    <div class="main">
      <div class="logo">
        <img src="../assets/images/我的私享卡/logo_03.png" />
      </div>
      <p class="share_wz1">比朗让定制回归大众</p>
      <p class="share_wz2">&nbsp;&nbsp;LOGO</p>
      <p class="share_wz3">
        <img src="../assets/images/我的私享卡/icon.png" />
        识别二维码，成为会员
      </p>
      <div class="erweima">
        <img src="../assets/images/我的私享卡/erweima.png" />
      </div>
      <p class="share_wz4">Concerned about the public, to get more benefits</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Share',
  data () {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  background: #000;
}
.main{
  width: 100%;
  height: 12REM;
  background: url(../assets/images/我的私享卡/background.png) no-repeat;
  background-size:cover;
  padding-top: 0.3rem;
}
.logo{
  margin:0 auto;
  width:6.2rem;
  height: 1.3rem;
}
.logo>img{
  width:6.2rem;
  height:1.3rem;
}
.share_wz1{
  margin-top:0.3rem;
  text-align: center;
  font-size: 0.34rem;
  color: #e8e8e8;
}
.share_wz2{
  margin-top: 1.6rem;
  font-size: 0.62rem;
  color: #fff;
  text-align: center;
}
.share_wz3{
  margin-top:1.5rem;
  font-size: 0.3rem;
  color: #fff;
  text-align: center;
}
.share_wz3>img{
  width:0.5rem;
}
.erweima{
  /* width: 2.9rem; */
  height:2.9rem;
  margin-top: 0.3rem;
  text-align: center;
}
.erweima>img{
  width: 2.9rem;
}
.share_wz4{
  margin-top: 0.3rem;
  text-align: center;
  font-size: 0.19rem;
  color: #fff;
}
</style>
