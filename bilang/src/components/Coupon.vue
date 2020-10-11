<template>
  <div class="coupon">
    <!-- 导航栏 -->
    <van-nav-bar
    class="nav"
    title="优惠券"
    left-text="返回"
    right-text="●●●"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
    
    <!-- main -->
    
    <van-tabs>
    <van-tab title="有效">
      <div class="quan_1">
        <div class="left">
          <span class="rmb">￥</span><span class="price">200</span>
        </div>
        <div class="right">
          <p class="right_wz1">储蓄卡抵用卷</p>
          <p class="right_wz2">每名用户限用1张本卷</p>
          <p class="right_wz3">订单满899可用</p>
          <p class="right_wz4">精选品牌储蓄卡专用</p>
          <p class="right_wz5">有效时间：2015-11-06至2015-11-17</p>
        </div>
      </div>
      <div class="quan_fot">
        <span class="fot_wz">马上使用</span>
        <img src="../assets/images/我的订单/icon.png" />
      </div>
    </van-tab>
    <van-tab title="无效">
      <div class="quan_2">
        <div class="left">
          <span class="rmb">￥</span><span class="price">200</span>
        </div>
        <div class="right">
          <p class="right_wz1">储蓄卡抵用卷</p>
          <p class="right_wz2">每名用户限用1张本卷</p>
          <p class="right_wz3">订单满899可用</p>
          <p class="right_wz4">精选品牌储蓄卡专用</p>
          <p class="right_wz5">有效时间：2015-11-06至2015-11-17</p>
        </div>
      </div>
      <div class="quan_fot">
        <span class="fot_wz2">优惠券已过使用期限</span>
      </div>
    </van-tab>
    <van-tab title="全部">
      <div class="quan_1">
        <div class="left">
          <span class="rmb">￥</span><span class="price">200</span>
        </div>
        <div class="right">
          <p class="right_wz1">储蓄卡抵用卷</p>
          <p class="right_wz2">每名用户限用1张本卷</p>
          <p class="right_wz3">订单满899可用</p>
          <p class="right_wz4">精选品牌储蓄卡专用</p>
          <p class="right_wz5">有效时间：2015-11-06至2015-11-17</p>
        </div>
      </div>
      <div class="quan_fot">
        <span class="fot_wz">马上使用</span>
        <img src="../assets/images/我的订单/icon.png" />
      </div>
      
      <div class="quan_2">
        <div class="left">
          <span class="rmb">￥</span><span class="price">200</span>
        </div>
        <div class="right">
          <p class="right_wz1">储蓄卡抵用卷</p>
          <p class="right_wz2">每名用户限用1张本卷</p>
          <p class="right_wz3">订单满899可用</p>
          <p class="right_wz4">精选品牌储蓄卡专用</p>
          <p class="right_wz5">有效时间：2015-11-06至2015-11-17</p>
        </div>
      </div>
      <div class="quan_fot">
        <span class="fot_wz2">优惠券已过使用期限</span>
      </div>
    </van-tab>
    </van-tabs>
    
    <!-- 底部 -->
    <div class="foot">
      <span class="explain">抵用券使用说明</span>
      <img src="../assets/images/我的订单/icon.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Coupon',
  data (){
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
.foot{
  width: 100%;
  height: 1.2rem;
  background: #fff;
  font-size: 0.3rem;
  position: fixed;
  top: 12.14rem;
}
.explain{
  float: left;
  margin-left: 0.3rem;
  margin-top:0.44rem;
}
.foot>img{
  float: right;
  margin-right: 0.3rem;
  margin-top: 0.43rem;
  width: 0.5rem;
}
.quan_1{
  width: 6.9rem;
  height: 2.2rem;
  background: url(../assets/images/优惠券/coupon_1.png) no-repeat;
  background-size: cover;
  margin-left:0.3rem;
}
.left{
  padding-top:1.0rem;
  text-align: center;
  width: 2.1rem;
  height: 100%;
  float: left;
}
.rmb{
  font-size: 0.3rem;
  color: #fff;
}
.price{
  font-size: 0.6rem;
  color: #fff;
}
.right{
  width:4.6rem;
  height: 100%;
  float: left;
}
.right_wz1{
  font-size: 0.22rem;
  color: #fff;
  text-align: right;
  margin-top:0.2rem;
}
.right_wz2{
  font-size: 0.22rem;
  margin-top:0.05rem;
  color: #fff;
}
.right_wz3{
  font-size: 0.24rem;
  color: #fff;
}
.right_wz4{
  font-size: 0.24rem;
  color: #fff;
}
.right_wz5{
  font-size: 0.22rem;
  margin-top:0.3rem;
  color: #fff;
}
.quan_fot{
  margin-left: 0.3rem;
  width: 6.9rem;
  height: 0.6rem;
  background: #fff;
}
.fot_wz{
  float: left;
  margin-top:0.1rem;
  margin-left: 0.6rem;
  font-size: 0.24rem;
  color: #666666;
}
.quan_fot>img{
  float:right;
  width: 0.3rem;
  margin-top: 0.15rem;
  margin-right: 0.3rem;
}

.quan_2{
  clear:both;
  width: 6.9rem;
  height: 2.2rem;
  background: url(../assets/images/优惠券/coupon_2.png) no-repeat;
  background-size: cover;
  margin-left:0.3rem;
}
.fot_wz2{
  float: left;
  margin-top:0.1rem;
  margin-left: 0.1rem;
  font-size: 0.24rem;
  color: #666666;
}
</style>
