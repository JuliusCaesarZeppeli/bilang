<template>
<!-- 我的收藏 -->
  <div class="collect">
    <!-- 导航栏 -->
    <van-nav-bar
    class="nav"
    title="我的收藏"
    left-text="返回"
    right-text="●●●"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
    
    <!-- main -->
    <div class="MyCollect">
      <div class="pic">
        <img src="../assets/images/我的收藏/pic_1.png" />
      </div>
      <p class="collect_wz">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
      <p class="collect_wz2">
        <span class="rmb">¥</span><span class="price">2000</span>
        <img src="../assets/images/我的收藏/我的收藏_06.png" />
      </p>
    </div>
    
    <hr>
    
    <div class="MyCollect">
      <div class="pic">
        <img src="../assets/images/我的收藏/pic_1.png" />
      </div>
      <p class="collect_wz">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
      <p class="collect_wz2">
        <span class="rmb">¥</span><span class="price">2000</span>
        <img src="../assets/images/我的收藏/我的收藏_06.png" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Collect',
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
.MyCollect{
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
</style>
