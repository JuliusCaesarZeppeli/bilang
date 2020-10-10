<template>
  <div>
       <van-nav-bar 
  title="填写订单"
  left-text="返回"
  right-text="●●●"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
  <div class="fill_top">
      <div class="fill_top_left"></div>
      <img src="../assets/images/个人信息/个人信息_11.png" >
  <div class="fill_top_right">
    <p class="right_top">李先生 13423433424</p>
    <p class="right_bottom">广东省佛山市禅城区印象购物中心5号楼1902室</p>
  </div>
  </div>
      <p class="fill_p_p">●</p>
    <p class="p_p"> 您定制的商品预计于2016年04月15日寄出。</p>

    <div class="fill_center_one">
        <div class="fill_center_one_img">
          <img src="../assets/images/我的订单/pic_1.png">
          <img src="../assets/images/我的订单/pic_1.png">
          <img src="../assets/images/我的订单/pic_1.png">
        </div>

        <van-row type="flex" justify="space-around" class="fill_center_one_right">
          <van-col span="6" class="one_right_one">●●●</van-col>
          <van-col span="6" class="one_right_two">共6件</van-col>
          <van-col span="6" class="one_right_three"><img src="../assets/images/我的订单/icon.png" alt=""></van-col>
        </van-row>
    </div>
    <hr>
    <div class="fill_center_two">
        <p>测量尺寸</p>
        <img src="../assets/images/我的订单/icon.png">
    </div>
    <hr>

    <div class="fill_center_three">
      <div class="fill_center_three_f">
          <p>支付及配送 </p>
      </div>
      <div class="fill_center_three_m">
          <p class="m_one">微信支付</p>
          <p class="m_two">快递</p>
          <p class="m_three">工作日、双休日与假日均可送货</p>
      </div>
    </div>
    <hr>


    <div class="fill_center_five">
        <div class="fill_center_five_n">
          <p>优惠卷抵扣</p>
        </div>
        <div class="fill_center_five_p">
          <van-switch v-model="checked" class="five_p_one"/>
        </div>
    </div>

      <div class="fill_bottom_">
            <span class="bottom_one">备注留言</span>
      </div>

      <div class="fill_bottom_two">
          <div class="bottom_two_n"> 
              <span class="two_n_">商品金额</span>
              <span class="two_n_n">￥6000.00</span>
          </div>
          <div class="bottom_two_p">
              <span class="two_n_">优惠卷抵扣</span>
              <span class="two_n_n">-￥0.00</span>
          </div>
      </div>


      <div class="bottom_three">
        <div class="bottom_three_one">
            <span>实付款:  </span>
            <span>￥6000.00</span>
        </div>
        <div class="bottom_three_two">
          <img src="../assets/images/结算/icon_1.png">
          <span>提交订单</span>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: true,
    };
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
<style scoped>
.fill_top{
  width: 100%;
  height:1.5rem;
  background: #fff;
  position: relative;
}
.fill_top_left{
  width: 0.1rem;
  height: 1.5rem;
  background: #234497;
}
.fill_top img{
  position: absolute;
  top: 20%;
  left: 5%;
}
.fill_top_right{
  width: 84%;
  height: 1rem;
  position: absolute;
  top: 16%;
  right: 1%;
}
.right_top{
  font-size: 0.4rem;
}
.right_bottom{
  font-size: 0.3rem;
}
.p_p{
  font-size: 0.3rem;
  margin-left: 0.2rem;
  color: #666666;
  display: inline-block;
  float: left;
  margin-left: 1rem;
  margin-top: 0.1rem;
}
.fill_center_one{
  width: 100%;
  height: 1.2rem;
  background: #fff;
  box-sizing: border-box;
  margin-top: 0.8rem;
}
.fill_center_one_img{
  width: 50%;
  height: 1.2rem;
  display: inline-block;
}
.fill_center_one_img img{
  width: 26%;
  float: left;
  margin-top: 0.1rem;
  margin-left: 0.2rem;
}
.fill_center_one_right{
  width: 50%;
  height:1.2rem;
  display: inline-block;
  float: right;
}
.one_right_one{
  font-size: 0.3rem;
  color: #999999;
  margin-top:0.1rem;
}
.one_right_two{
  font-size:0.3rem;
  margin-left:1rem;
  margin-top:0.1rem;
}
.one_right_three{
  width:0.5rem;
  margin-left: 0.2rem;
  margin-top: 0.1rem;
}
.one_right_three img{
  width:60%;
}
.fill_p_p{
  display: inline-block;
  color: red;
  font-size: 0.3rem;
  margin-left: 0.3rem;
  position: absolute;
    margin-top: 0.13rem;
}
.fill_center_two{
  width:100%;
  height:1.5rem;
  background: #fff;
}
.fill_center_two p{
  font-size: 0.4rem;
  color: #656565;
  display: inline-block;
  margin-left: 0.2rem;
}
.fill_center_two img{
  width: 0.3rem;
  float: right;
  margin-top:0.6rem;
  margin-right: 0.4rem;
}
.fill_center_three{
  width: 100%;
  height: 2rem;
  background: #fff;
}
.fill_center_three_f{
  width: 40%;
  height: 2rem;
  font-size: 0.4rem;
  color: #656565;
  float: left;
}
.fill_center_three_f p{
  margin-top: 0.7rem;
  margin-left: 0.2rem;
}
.fill_center_three_m{
  width: 60%;
  height:2rem;
  float: right;
}
.m_one{
  font-size: 0.3rem;
  margin-left: 3rem;
  margin-top: 0.2rem;
}
.m_two{
  font-size: 0.3rem;
  margin-left: 3.6rem;
  margin-top: 0.1rem;
}
.m_three{
  font-size: 0.3rem;
  color: #999999; 
  margin-top: 0.1rem;
}
.fill_center_five{
    width: 100%;
    height: 1rem;
    background: #fff;
}
.fill_center_five_n{
    width: 40%;
    height: 1rem;
    font-size: 0.4rem;
    color: #656565;
    float: left;
}
.fill_center_five_n p{
    margin-top: 0.2rem;
    margin-left: 0.2rem;
}
.fill_center_five_p{
    width: 60%;
    height: 1rem;
    float: right;
}
.five_p_one{
  float: right;
  margin-top: 0.15rem;
  margin-right:0.3rem ;
}
.fill_bottom_{
  width: 100%;
  height: 1rem;
  background: #fff ;
  margin-top: 0.3rem;
}
.bottom_one{
  width: 60%;
  height: 0.5rem;
  float: left;
  font-size: 0.4rem;
  color: #999999;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.fill_bottom_two{
  width: 100%;
  height: 1.4rem;
  background: #fff;
  margin-top: 0.1rem;
}
.bottom_two_n{
  width: 100%;
  height: 0.7rem;
  font-size: 0.4rem;
}
.bottom_two_p{
  width: 100%;
  height: 0.7rem;
  font-size: 0.4rem;
}
.two_n_{
  float: left;
  margin-left: 0.3rem;
  margin-top: 0.1rem;
}
.two_n_n{
  float: right;
  margin-right: 0.3rem;
  margin-top: 0.1rem;
  color: #234497;
}
.bottom_three{
  width: 100%;
  height: 1.2rem;
  background: #fff;
  margin-top: 0.3rem;
}
.bottom_three_one{
  width: 50%;
  height: 0.6rem;
  display: inline-block;
  float: left;
   font-size: 0.4rem;
   margin-top: 0.4rem;
}
.bottom_three_one span{
  color: #234497;
  margin-left: 0.2rem;
}
.bottom_three_two{
  width: 30%;
  height: 1.2rem;
  background: #E1E1E1;
  float: right;
  border-top-left-radius: 0.6rem;
  border-bottom-left-radius: 0.6rem;
}
.bottom_three_two img{
  color: #999999;
  margin-left: 0.6rem;
}
.bottom_three_two span{
  width: 1rem;
  font-size: 0.2rem;
  position: absolute;
  bottom: 0;
  right: 0.6rem;
  color: #999999;
}
</style>