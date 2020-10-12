//添加地址 张瑄睿作，转载必究
<template>
  <div class="bg">
    <!-- 标题 -->
    <van-nav-bar
      title="修改收货地址"
      left-text="返回"
      right-text="●●●"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="consignee">
      <div class="rows_">
        <div>收货人姓名:</div>
        <div class="input_"><input type="text" value="张小明"></div>
      </div>
      <div class="rows">
        <div>手机号码:</div>
        <div class="input_"><input type="text" value="16987542586"></div>
      </div>
    </div>
    <div class="dashed"><img src="../assets/images/添加收货地址/jiandao.png"></div>
    <div class="address">
      <div class="rows_">
        <div>邮政编码:</div>
        <div class="input_"><input type="text" value="528031"></div>
      </div>
      <div class="rows_">
        <div>省份</div>
        <div class="input_"><img src="../assets/images/积分兑换/icon.png"></div>
      </div>
      <div class="rows_">
        <div>城市</div>
        <div class="input_"><img src="../assets/images/积分兑换/icon.png"></div>
      </div>
      <div class="rows_">
        <div>区县</div>
        <div class="input_"><img src="../assets/images/积分兑换/icon.png"></div>
      </div>
      <div class="add_rows">
        <div class="input_"><input type="text" placeholder="详细地址"></div>
      </div>
    </div>
    <div class="set">
      <div class="add_rows">
          <div class="input_">设置默认收货地址</div>
          <div><van-switch v-model="checked" size="0.3rem" active-color="#234497" inactive-color="#C3C3C3"/></div>
      </div>
    </div>
    <div class="btn" @click="hrefaddress">
      <button>保存</button>
    </div>
  </div>
</template>
<script>
export default {
  name:"Reset_address",
  data(){
    return {
      checked: false,
    }
  },
  methods: {
  onClickLeft() {
    this.$router.go(-1);
  },
  onClickRight() {
    this.$toast('按钮');
  },
  hrefaddress(){
    this.$router.push({name:"My_address"})
  }
  },
}
</script>
<style scoped>
 .bg{
   background: #eeeeee;
   height: 13.35rem;
 }
 .consignee{
   height: 2.1rem;
   margin: 0 auto;
 }
 .address{
   height: 5.65rem;
   margin: 0 auto;
 }
 .set{
   height: 0.91rem;
   color: #666666;
   margin: 0 auto;
 }
 .consignee,.address,.set{
   width: 7.5rem;
   margin-top: 0.21rem;
   font-size: 0.26rem;
   display: flex;
   flex-direction:column;
 }
 .dashed{
   width: 7.5rem;
   height: 0.23rem;
   text-align: center;
   background: url("../assets/images/添加收货地址/img_1.png");
   background-repeat: no-repeat;
   position: relative;
   margin: 0.34rem auto;
 }
 .dashed>img{
   width: 0.3rem;
   height: 0.23rem;
   position: absolute;
   top: 50%;
   left: 50%;
   margin-left:-0.15rem;
   margin-top:-0.23rem;
   
 }
 .rows,.rows_,.add_rows{
   background: #fff;
   padding-left: 0.26rem;
   padding-right: 0.27rem;
   height: 1.1rem;
   line-height: 1.1rem;
   display: flex;
   justify-content:space-between;
 }
 .rows_{
   border-bottom: 0.01rem solid #E1E1E1;
 }
 .input_ input{
   border: none;
   height: 0.5rem;
   text-decoration: none;
   text-align: right;
}
.input_ img{
  width: 0.28rem;
  height: 0.25rem;
}
.add_rows input{
  text-align: left;
}
.btn{
  text-align: center;
  margin-top: 0.8rem;
}
.btn>button{
  width: 6.9rem;
  height:1.01rem;
  font-size: 0.3rem;
  border: none;
  background: #234497;
  color: #fff;
}
</style>