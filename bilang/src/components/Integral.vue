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
  <hr>
  <van-row type="flex" justify="space-around">
  <van-col span="6" class="v_6">积分兑换</van-col>
  <van-col span="6" class="v_6">|</van-col>
  <van-col span="6" class="v_6">积分规则</van-col>
</van-row>
<van-row type="flex" justify="space-around" class="bottom_one">
  <van-col span="6" class="v_6_">2016.01.11</van-col>
  <van-col span="6" class="v_6_">分享积分</van-col>
  <van-col span="6" class="span_three">+5</van-col>
</van-row>
  <hr>
<van-row type="flex" justify="space-around">
  <van-col span="6" class="v_6_">2016.01.11</van-col>
  <van-col span="6" class="v_6_">分享积分</van-col>
  <van-col span="6" class="span_three">+5</van-col>
</van-row>
  <hr>
<van-row type="flex" justify="space-around">
  <van-col span="6" class="v_6_">2016.01.11</van-col>
  <van-col span="6" class="v_6_">分享积分</van-col>
  <van-col span="6" class="span_three">+5</van-col>
</van-row>
  <hr>
<van-row type="flex" justify="space-around">
  <van-col span="6" class="v_6_">2016.01.11</van-col>
  <van-col span="6" class="v_6_">分享积分</van-col>
  <van-col span="6" class="span_three">+20</van-col>
</van-row>
  </div>
</template>
<script>
export default {
  name:'Integral',
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
  background:#fff;
}
.nav_one_{
  width:90%;
  height:2rem;
  margin:0 auto;
}
.nav_one span{
  font-size:0.5rem;
}
.nav_span{
  float:right;
  color:red;
  margin-top:0.5rem;
}
.select{
  width:100%;
  height:1.2rem;
  background:red;
}
.select{
  width:60%;
  height:1.2rem;
}
.span_three{
  color:#FF5858;
  text-align: center;
}
.bottom_one{
   margin-top:0.2rem;
}
.v_6,.v_6_{
  text-align: center;
}
.v_6{
  color:#244498;;
}
</style>