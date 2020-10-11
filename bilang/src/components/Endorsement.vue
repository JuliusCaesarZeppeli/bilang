// 我的代言费 张瑄睿作，转载必究
<template>
  <div class="bg">
    <!-- 标题 -->
    <van-nav-bar
      title="代言费"
      left-text="返回"
      right-text="●●●"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 搜索 -->
    <div class="search">
      <img src="../assets/images/我的粉丝&我的代言费/search.png">
      <input type="text" placeholder="输入关键词">
    </div>
    <!-- 这里是一级粉比块 -->
    <div class="piece">
      <div class="row_one">
        <div>2016-02-25</div>
        <div class="pic_"><img src="../assets/images/我的粉丝&我的代言费/fans.png"><span>董大伟</span></div>
        <div>一级粉比</div>
      </div>
      <div class="row_two">
        <div>消费金额：<span class="money">¥1000.00</span></div>
        <div>收益：<span class="money_">¥10.00</span></div>
      </div>
    </div>
    <!-- 这里是二级粉比块 -->
    <div class="piece">
      <div class="row_one">
        <div>2016-02-25</div>
        <div class="pic_"><img src="../assets/images/我的粉丝&我的代言费/fans.png"><span>董大伟</span></div>
        <div>二级粉比</div>
      </div>
      <div class="row_two">
        <div>消费金额：<span class="money">¥1000.00</span></div>
        <div>收益：<span class="money_">¥10.00</span></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"Endorsement",
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
 .bg{
   background: #eeeeee;
   height: 13.35rem;
 }
 .search{
   width: 6.9rem;
   height: 0.56rem;
   font-size: 0.24rem;
   text-align: center;
   background: #fff;
   border-radius: 0.09rem;
   margin: 0.15rem auto;
   padding-top: 0.16rem;
   box-sizing: border-box;
 }
 .search>img{
   width: 0.22rem;
   height: 0.22rem;
   margin-right: 0.11rem;
 }
 .search>input{
   width:1.20rem;
   height: 0.22rem;
   border: none;
 }
 .piece{
   width: 7.5rem;
   height: 2.1rem;
   margin: 0.15rem auto;
   background:#fff;
   font-size: 0.24rem;
 }
 .row_one,.row_two{
   display: flex;
   justify-content:space-around;
   color: #999999;
   align-items:center;
 }
 .row_one{
   height: 1.24rem;
   border-bottom: 0.01rem solid #E1E1E1;
 }
.row_two{
   height: 0.87rem;
 }
 .pic_{
   display: flex;
   align-items:center;
 }
.pic_>img{
  width: 0.7rem;
  height: 0.7rem;
  margin-right: 0.19rem;
}
.pic_>span{
  color: black;
}
.money{
  color: #000;
}
.money_{
  color: #FF4242;
}
</style>