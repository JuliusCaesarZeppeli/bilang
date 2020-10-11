<template>
<!-- 我的订单-详情 -->
  <div class="detail">
    <!-- 导航栏 -->
    <van-nav-bar
    class="nav"
    title="订单详情"
    left-text="返回"
    right-text="●●●"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
    
    <div class="main1">
      <div class="main1_left">
        <p class="wz">
          <span class="title">订单状态:</span>
          <span class="zhuangt">已发货</span>
        </p>
        <p class="wz">
          <span class="title">订单单号:</span>
          <span class="num">1000800245</span>
        </p>
        <p class="wz">
          <span class="title">订单金额:</span>
          <span class="maney">￥2000</span>
        </p>
      </div>
      <div class="main1_right">
        <div class="picc">
          <img src="../assets/images/我的订单/icon.png" />
        </div>
        <p class="queren">确认收货</p>
      </div>
    </div>
    
    <div class="MyCollect">
      <div class="pic">
        <img src="../assets/images/我的收藏/pic_1.png" />
      </div>
      <p class="collect_wz">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
      <p class="count">
        <span class="cuo">×</span>
        <span class="coount_num">1</span>
      </p>
      <p class="collect_wz2">
        <span class="rmb">¥</span><span class="price">2000</span>
      </p>
    </div>
    
    <div class="main3">
      <div class="lantiao"></div>
      <div class="icon">
          <img src="../assets/images/我的订单/icon_1.png" />
      </div>
      <div class="dizhi">
        <p class="p1">
          <span class="name">李先生</span>
          <span class="phone">13423433424</span>
        </p>
        <p class="p2">广东省佛山市禅城区印象购物中心5号楼1902室</p>
      </div>
    </div>
    
    <div class="main4">
      <p class="main4_p1">
        <span class="main4_title">支付方式</span>
        <span class="main4_way">微信支付</span>
      </p>
      <p class="main4_p2">
        <span class="main4_title">配送方式</span>
        <span class="main4_way">快通</span>
      </p>
      <p class="main4_p3">工作日、双休日与假日均可送货</p>
    </div>
    
    <div class="main5">
      <span class="main5_wz">测量尺寸</span>
      <img src="../assets/images/我的订单/icon.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
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
.main1{
  width: 100%;
  height: 1.86rem;
  background: #fff;
  margin-top:0.2rem;
}
.main1_left{
  width: 5.4rem;
  height:100%;
  float: left;
}
.wz{
  margin-top: 0.2rem;
  margin-left: 0.3rem;
  font-size: 0.26rem;
  color:#666666;
}
.zhuangt{
  color:red;
}
.maney{
  color:blue;
}
.main1_right{
  width: 2.1rem;
  height: 100%;
  float:right;
}
.picc{
  margin-left: 0.8rem;
  margin-top: 0.4rem;
  width: 0.55rem;
  height: 0.55rem;
  line-height: 0.9rem;
}
.picc>img{
  width: 0.55rem;
}
.queren{
  font-size: 0.26rem;
  color: blue;
  text-align: center;
  margin-top: 0.2rem;
}

.MyCollect{
  margin-top: 0.2rem;
  width: 100%;
  height: 1.8rem;
  background: #fff;
}
.pic{
  width: 1.2rem;
  height: 1.2rem;
  float: left;
  margin-top: 0.3rem;
  margin-left: 0.5rem;
}
.pic>img{
  width: 1.2rem;
  height: 1.2rem;
}
.collect_wz{
  width:4.44rem;
  height: 0.52rem;
  font-size: 0.24rem;
  color: #666666;
  float: left;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}
.collect_wz2{
  width: 5.5rem;
  font-size: 0.24rem;
  color: #666666;
  float: left;
  margin-top: 0.5rem;
  margin-left: 0.3rem;
  color: #234497;
}
.collect_wz2>img{
  width:0.26rem;
  float:right;
  margin-right: 0.3rem;
}
.count{
  margin-top: 0.3rem;
  margin-right: 0.3rem;
  float: right;
  font-size: 0.24rem;
}
.main3{
  width:100%;
  height: 1.17rem;
  background: #fff;
  margin-top: 0.2rem;
}
.lantiao{
  width: 0.08rem;
  height:100%;
  float:left;
  background:#244498;
}
.icon{
  width: 0.8rem;
  height: 100%;
  float:left;
  text-align: center;
  line-height: 1rem;
}
.icon>img{
  width:0.4rem;
}
.dizhi{
  width: 5.6rem;
  height: 100%;
  float: left;
}
.p1{
  font-size: 0.3rem;
  margin-top: 0.25rem;
  color: #333333;
}
.p2{
  font-size: 0.24rem;
  color: #666666;
}
.main4{
  width: 100%;
  height: 1.76rem;
  margin-top: 0.2rem;
  background: #fff;
}
.main4_p1{
  float: left;
  width: 6.9rem;
  font-size: 0.28rem;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}
.main4_p2{
  /* float: left; */
  width: 6.9rem;
  font-size: 0.28rem;
  margin-top: 0.15rem;
  margin-left: 0.3rem;
}
.main4_way{
  float: right;
  color: #244498;
}
.main4_p3{
  margin-left: 0.3rem;
  color: #9a9a9a;
  font-size: 0.24rem;
}
.main5{
  width: 100%;
  height: 1rem;
  background: #fff;
  margin-top: 0.2rem;
  font-size: 0.3rem;
  color: #343434;
  line-height: 1rem;
}
.main5_wz{
  margin-left: 0.3rem;
}
.main5>img{
  margin-top: 0.35rem;
  width:0.4rem;
  float: right;
  margin-right: 0.3rem;
}
</style>
