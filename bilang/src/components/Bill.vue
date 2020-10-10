<template>
<!-- 账单 -->
  <div class="bill">
    <!-- 导航栏 -->
    <van-nav-bar
    class="nav"
    title="账单"
    left-text="返回"
    right-text="●●●"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
    
    <!-- main -->
    <div class="balance">
      <span class="balance_title">账户余额</span>
      <span class="balance_num">2000</span>
      <span class="rmb">￥</span>
    </div>
    <div class="income">
      <div class="income_1">
        <span class="way">在线支付</span>
        <span class="way_num1">548.58</span>
        <span class="way_num2">￥</span>
        <span class="way_num3">+</span>
      </div>
      <div class="income_2">
        <span class="way_style">微信支付</span>
        <span class="time">2016.01.25</span>
      </div>
    </div>
    <hr>
    <div class="income">
      <div class="income_1">
        <span class="way">在线支付</span>
        <span class="way_num11">548.58</span>
        <span class="way_num22">￥</span>
        <span class="way_num33">+</span>
      </div>
      <div class="income_2">
        <span class="way_style">微信支付</span>
        <span class="time">2016.01.25</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bill',
  data (){
    return {
      
    }
  },
  methods: {
    onClickLeft() {
      this.$toast('返回');
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
.balance{
  background:#fff;
  width: 100%;
  height: 1.25rem;
  margin-top: 0.3rem;
  line-height: 1.2rem;
  margin-bottom: 0.3rem;
}
.balance_title{
  font-size: 0.3rem;
  color: #333333;
  float:left;
  margin-left: 0.3rem;
}
.balance_num{
  float: right;
  font-size: 0.3rem;
  color: #f00;
  margin-right: 0.3rem;
}
.rmb{
  font-size: 0.3rem;
  color: #f00;
  float: right;
}
.income{
  width: 100%;
  padding-top: 0.4rem;
  height: 1.25rem;
  background: #fff;
}
.income_1{
  height:0.5rem;
}
.way{
  float: left;
  margin-left: 0.3rem;
  font-size: 0.3rem;
  color: #333333;
}
.way_num1,.way_num2,.way_num3{
  float:right;
  font-size: 0.3rem;
  color: #f00;
}
.way_num1{
  margin-right: 0.3rem;
}
.way_style{
  float: left;
  margin-left: 0.3rem;
  font-size: 0.24rem;
  color: #999999;
}
.time{
  font-size: 0.24rem;
  color: #999999;
  float: right;
  margin-right: 0.3rem;
}
.way_num11,.way_num22,.way_num33{
  float:right;
  font-size: 0.3rem;
  color: #333333;
}
.way_num11{
  margin-right: 0.3rem;
}
</style>
