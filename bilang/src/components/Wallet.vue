<template>
<!-- 我的钱包 -->
  <div class="wallet">
    <!-- 导航栏 -->
    <van-nav-bar
    class="nav"
    title="我的钱包"
    left-text="返回"
    right-text="●●●"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
    
    <!-- main -->
    <div class="wallet_head">
      <div class="head_top">
        <div class="headpic">
          <img src="../assets/images/我的钱包/headPic.png" />
        </div>
        <p class="head_wz1">
          <span class="headwz">账户余额</span>
          <span class="rmb">￥</span>
          <span class="headnum">0.00</span>
        </p>
        <p class="head_wz2">
          <span class="headwz">累计积分收益</span>
          <span class="headnum2">1000</span>
        </p>
      </div>
      <div class="head_bot">
        <span class="fot_wz">余额提现</span>
        <img src="../assets/images/我的订单/icon.png" />
      </div>
    </div>
    
    <div class="main">
      <div class="mainlist">
        <div class="icon">
          <img src="../assets/images/我的钱包/icon_1.png" />
        </div>
        <p class="wz">我的粉丝</p>
      </div>
      <div class="mainlist">
        <div class="icon">
          <img src="../assets/images/我的钱包/icon_2.png" />
        </div>
        <p class="wz">我的订单</p>
      </div>
      <div class="mainlist">
        <div class="icon">
          <img src="../assets/images/我的钱包/icon_3.png" />
        </div>
        <p class="wz">我的代言费</p>
      </div>
    </div>
    <div class="main">
      <div class="mainlist">
        <div class="icon">
          <img src="../assets/images/我的钱包/icon_4.png" />
        </div>
        <p class="wz">我的私享卡</p>
      </div>
      <div class="mainlist">
        <div class="icon">
          <img src="../assets/images/我的钱包/icon_5.png" />
        </div>
        <p class="wz">我的积分</p>
      </div>
      <div class="mainlist">
        <div class="icon">
          <img src="../assets/images/我的钱包/icon_6.png" />
        </div>
        <p class="wz">我的优惠券</p>
      </div>
    </div>
    <div class="main">
      <div class="mainlist">
        <div class="icon">
          <img src="../assets/images/我的钱包/icon_7.png" />
        </div>
        <p class="wz">账单查询</p>
      </div>
      <div class="mainlist">
        <div class="icon">
          <img src="../assets/images/我的钱包/icon_8.png" />
        </div>
        <p class="wz">粉丝权益</p>
      </div>
      <div class="mainlist">
        <div class="icon">
          <img src="../assets/images/我的钱包/icon_9.png" />
        </div>
        <p class="wz">比朗学院</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wallet',
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
.wallet_head{
  width: 100%;
  height: 3.25rem;
}
.head_top{
  width: 100%;
  height: 2.25rem;
  background: #f8f8f8;
}
.head_bot{
  width: 100%;
  height: 1rem;
  background:#e1e1e1;
}
.fot_wz{
  float: left;
  margin-top:0.35rem;
  margin-left: 3.2rem;
  font-size: 0.24rem;
  color: #666666;
}
.head_bot>img{
  float:right;
  width: 0.3rem;
  margin-top: 0.35rem;
  margin-right: 0.3rem;
}
.headpic{
  width: 1.3rem;
  height: 1.3rem;
  float: left;
  margin-top: 0.5rem;
  margin-left: 0.8rem;
}
.headpic>img{
  width: 1.3rem;
  height: 1.3rem;
}
.head_wz1{
  width: 4.2rem;
  height: 0.3rem;
  margin-left: 1rem;
  float: left;
}
.head_wz2{
  width: 4.2rem;
  height: 0.3rem;
  margin-left: 1rem;
  float: left;
  margin-top: 0.3rem;
}
.headwz{
  font-size: 0.24rem;
}
.headnum2{
  margin-left: 1.5rem;
  font-size: 0.24rem;
}
.headnum{
  font-size: 0.24rem;
  color: #f00;
}
.rmb{
  margin-left:1.5rem ;
  font-size: 0.24rem;
  color: #f00;
}
.main{
  width: 100%;
  height: 2.5rem;
  display:flex;
}
.mainlist{
  width:250rem;
  height: 100%;
}
.icon{
  margin-top:0.7rem;
  margin-left:0.85rem;
  width:0.77rem;
  height: 0.77rem;
}
.icon>img{
  width: 0.77rem;
  height:0.77rem
}
.wz{
  text-align: center;
  font-size: 0.24rem;
  color: #666666;
  margin-top:0.2rem;
}
</style>
