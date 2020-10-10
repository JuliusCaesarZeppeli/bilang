<template>
<!-- 限时特惠 -->
  <div class="sale">
    <!-- 导航栏 -->
    <van-nav-bar
    class="nav"
    title="限时特惠"
    left-text="返回"
    right-text="●●●"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
    
    <!-- banner title -->
    <div class="banner_title">
      <div class="title">
        <p class="time">08:00</p>
        <p class="style">抢购中</p>
      </div>
      <div class="title">
        <p class="time">12:00</p>
        <p class="style">即将开始</p>
      </div>
      <div class="title">
        <p class="time">16:00</p>
        <p class="style">即将开始</p>
      </div>
      <div class="title">
        <p class="time">20:00</p>
        <p class="style">即将开始</p>
      </div>
      <div class="title">
        <p class="time">00:00</p>
        <p class="style">即将开始</p>
      </div>
    </div>
  
    <div class="banner">
      <img src="../assets/images/限时特惠/banner.png" />
    </div>
    <div class="banner_bottom">
      <span class="banner_wz">抢购中8:00开抢</span>
      <span class="banner_wz2">距结束</span>
      <van-count-down :time="time">
        <template #default="timeData">
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
    </div>
    <hr>
    <div class="main">
        <div class="pic">
          <img src="../assets/images/我的收藏/pic_1.png" />
        </div>
        <div class="main_wz">
          春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长
        </div>
        <div class="price">
          <span class="price1">￥199.00</span>
          <span class="price2">￥2000.00</span>
        </div>
        <div class="main-right">
          <span class="main_right_wz">去抢购</span>
          <img src="../assets/images/我的订单/icon.png" />
        </div>
    </div>
    
    <div class="main">
        <div class="pic">
          <img src="../assets/images/限时特惠/pic_2.png" />
        </div>
        <div class="main_wz">
          春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长
        </div>
        <div class="price">
          <span class="price1">￥199.00</span>
          <span class="price2">￥2000.00</span>
        </div>
        <div class="main-right">
          <span class="main_right_wz">去抢购</span>
          <img src="../assets/images/我的订单/icon.png" />
        </div>
    </div>
    
    <div class="main">
        <div class="pic">
          <img src="../assets/images/我的收藏/pic_1.png" />
        </div>
        <div class="main_wz">
          春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长
        </div>
        <div class="price">
          <span class="price1">￥199.00</span>
          <span class="price2">￥2000.00</span>
        </div>
        <div class="main-right">
          <span class="main_right_wz">去抢购</span>
          <img src="../assets/images/我的订单/icon.png" />
        </div>
    </div>
    
    <div class="main">
        <div class="pic">
          <img src="../assets/images/我的收藏/pic_1.png" />
        </div>
        <div class="main_wz">
          春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长
        </div>
        <div class="price">
          <span class="price1">￥199.00</span>
          <span class="price2">￥2000.00</span>
        </div>
        <div class="main-right">
          <span class="main_right_wz">去抢购</span>
          <img src="../assets/images/我的订单/icon.png" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sale',
  data (){
    return {
      time: 30 * 60 * 60 * 1000,
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
.banner_title{
  width: 100%;
  height: 1.03rem;
  display: flex;
  background-image: linear-gradient(to right, black , #414141);
}
.title{
  width: 20%;
  height: 100%;
  color: #fff;
  text-align: center;
}
.time{
  margin-top: 0.2rem;
  font-size: 0.35rem;
}
.title:hover{
  background:#234597;
}
.title:hover>.time{
  font-size: 0.4rem;
}
.style{
  font-size: 0.25rem;
}

.banner{
  width: 100%;
  height: 1.8rem;
}
.banner>img{
  width: 100%;
  height: 1.8rem;
}
.banner_bottom{
  width: 100%;
  height: 0.55rem;
  font-size: 0.3rem;
  line-height: 0.5rem;
}
.banner_wz{
  margin-left: 0.2rem;
}
.banner_wz2{
  margin-left: 1.8rem;
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
  border-radius: 0.05rem;
}
.main{
  width: 100%;
  height: 1.84rem;
  margin-top: 0.3rem;
  background: url(../assets/images/限时特惠/background.png) no-repeat;
  background-size: cover;
}
.pic{
  width: 1.2rem;
  height: 1.2rem;
  float: left;
  margin-top: 0.3rem;
  margin-left: 0.27rem;
}
.pic>img{
  width: 1.2rem;
  height: 1.2rem;
}
.main_wz{
  float: left;
  width: 3.15rem;
  height: 0.54rem;
  font-size: 0.3rem;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  margin-left: 0.3rem;
  margin-top: 0.25rem;
}
.price{
  width: 2.7rem;
  height: 0.35rem;
  float: left;
  margin-left: 0.3rem;
  margin-top: -0.3rem;
}
.price1{
  font-size: 0.28rem;
  color: #f00;
}
.price2{
  font-size: 0.2rem;
  color: #333333;
  text-decoration:line-through; 
}
.main-right{
  width: 1.34rem;
  height: 100%;
  float: right;
  margin-top: -0.8rem;
  text-align: center;
  color:#234597;
  font-size: 0.24rem;
  line-height: 0.9rem;
}

</style>
