<template>
  <div>
        <van-nav-bar
  title="我的积分"
  left-text="返回"
  right-text="●●●"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
  <div class="nav_one">
    <div class="nav_one_">
      <span>积分余额</span>
      <span class="nav_span">200000</span>
    </div>
  </div>
    <div class="coupon">
      <img class="coupon_one" src="../assets/images/积分兑换/pic_01..png">
      <div class="coupon_word_pos">
        <p>￥200</p>
      </div>
    <div class="coupon_word">
      <p class="coupon_word_one">200元储蓄卡抵用卷</p>
      <p class="coupon_word_two">需要积分：100</p>
    </div>
    <img class="coupon_word_" src="../assets/images/积分兑换/icon.png">
    </div>
     <div class="coupon">
      <img class="coupon_one" src="../assets/images/积分兑换/pic_01..png">
      <div class="coupon_word_pos">
        <p>￥200</p>
      </div>
    <div class="coupon_word">
      <p class="coupon_word_one">200元储蓄卡抵用卷</p>
      <p class="coupon_word_two">需要积分：100</p>
    </div>
    <img class="coupon_word_" src="../assets/images/积分兑换/icon.png">
    </div>
    </div>
</template>
<script>
export default {
  name:'Exchange',
   methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$toast('按钮');
    },
}
}
</script>
<style scoped>
body{
  background:#f3f4f6;
}
.nav_one{
  width:100%;
  height:2rem;
  margin-top:0.2rem;
  margin-bottom:0.5rem;
  background:#fff;
}
.nav_one_{
  width:90%;
  height:2rem;
  margin:0 auto;
}
.nav_one span{
  font-size:0.35rem;
}
.nav_span{
  float:right;
  color:red;
  margin-top:0.5rem;
}
.coupon{
  width:100%;
  height:2rem;
  box-sizing: border-box;
  position: relative;
  margin-bottom:0.2rem;
  background:#fff;
}
.coupon_one{
  width:25%;
  margin-left:0.2rem;
  display: inline-block;
}
.coupon_word_two{
  font-size:0.3rem;
}
.coupon_word_one{
  font-size:0.4rem;
}
.coupon_word{
  width:60%;
  display: inline-block;
  position: absolute;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.coupon_word p{
  margin-top:0.2rem;
}
.coupon_word_{
  width: 6%;
    float: right;
    margin-top: 0.8rem;
    margin-right: 0.1rem;
}
.coupon_word_pos{
position:absolute;
top:30%;
left:6%;
color:#fff;
font-size:0.5rem;
}
</style>