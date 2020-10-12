<template>
  <div>
      <van-nav-bar class="nav"
        title="购物车"
        left-text="返回"
        right-text="●●●"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
  <div class="first_clothes">
    <van-checkbox v-model="checked" class="checkbox"></van-checkbox>
    <div class="background_pic"><img src="../assets/images/结算/pic_1.png"></div>
      <div class="pic_right">
        <p class="word_one">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
        <p class="word_two">￥<span class="word_three">2000.00</span></p> 
        <van-stepper v-model="value"/>   
        <img class="del" src="../assets/images/购物车/del.png">
      </div>
    </div>

    <div class="first_clothes">
    <van-checkbox v-model="checkeds" class="checkbox"></van-checkbox>
      <div class="background_pic"><img src="../assets/images/结算/pic_1.png"></div>
      <div class="pic_right">
        <p class="word_one">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
        <p class="word_two">￥<span class="word_three">2000.00</span></p> 
        <van-stepper v-model="values"/>   
        <img class="del" src="../assets/images/购物车/del.png" >
      </div>
    </div>

    <div class="botton">
        <van-checkbox v-model="checkede" class="end">全选</van-checkbox>
        <p>合计：¥ 2000.00</p>
        <p>数量：1</p>
        <div class="botton_right" @click="$router.push('/Fill')">
            <img src="../assets/images/购物车/icon.png">
            <p>去结算</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Cart',
    data(){
      return {
        checked: false,
        checkeds:false,
        checkede:false,
        value:1,
        values:1,
      };
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









<style>
body{
  background:#f3f4f6;
}
.first_clothes{
  width: 100%;
  height: 2.1rem;
  margin-top: 0.3rem;
  box-sizing: border-box;
  position: relative;
  background:#fff;
}
.checkbox{
  padding-top: 0.8rem;
  margin-left: 0.4rem;
  display: inline-block;
  float:left;
}
.background_pic{
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  margin-top: 0.3rem;
  margin-left: 0.2rem;
}
.background_pic img{
  width:1.5rem;
  height:1.5rem;
}
.pic_right{
  width:4 rem;
  height:1.5rem;
  display: inline-block;
  box-sizing: border-box;
  position: absolute;
  top: 11%;
  left: 36%;
}
.word_one{
  font-size: 0.05rem;
}
.word_two{
  font-size: 0.05rem;
  color: #244498;
}
.del{
  width: 10%;
  position: absolute;
  top: 65%;
  right: 5%;
}
.botton{
  width:100%;
  height:1.5rem;
  background:#fff;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
}
.end{
  padding-top: 0.2rem;
  padding-left: 0.2rem;
  height: 1rem;
  width: 2rem;
}
.botton p{
  font-size: 0.25rem;
  position: relative;
  bottom: 55%;
  padding-bottom: 0.1rem;
  margin-left: 2.3rem;
  color: #000;
}
.botton_right{
  width:2rem;
  height:1.5rem;
  background: #E1E1E1;
  position: absolute;
  right: 0;
  bottom: 0;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.botton img{
  width:40%;
  position: absolute;
  right:30%;
  top:15%;
}
.botton_right p{
  width:40%;
  position: absolute;
  right:30%;
  top:65%;
  color: #234497;
}
</style>