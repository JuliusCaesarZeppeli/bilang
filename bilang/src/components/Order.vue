<template>
<!-- 我的订单 -->
  <div class="order">
    <!-- 导航栏 -->
    <van-nav-bar
    class="nav"
    title="我的订单"
    left-text="返回"
    right-text="●●●"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
    
    <!-- 订单列表:全部,待付款,待收货,待评价 -->
    <van-tabs v-model="active" class="main_list">
      <van-tab title="全部">
        <!-- 待付款 -->
        <div class="obligation">
          <div class="obligation_one">
            <span class="order_num">订单号:</span>
            <span class="num">1000800245123569</span>
            <span class="state">待付款</span>
          </div>
          <hr>
          <div class="goods" @click="hrefDetail">
            <div class="good_pic">
              <img src="../assets/images/我的订单/pic_1.png" />
            </div>
            <div class="char">
              <p class="char_1">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
              <span class="char_2">￥</span><span class="price">2000</span>
            </div>
            <div class="count">
              <span class="chenghao">×</span><span class="count_num">1</span>
            </div>
          </div>
          <hr>
          <div class="btn">
            <div class="btn_1">取消订单</div>
            <div class="btn_2">去支付
              <img src="../assets/images/我的订单/icon.png" />
            </div>
          </div>
        </div>
        <!-- 待收货 -->
        <div class="obligation">
          <div class="obligation_one">
            <span class="order_num">订单号:</span>
            <span class="num">1000800245123569</span>
            <span class="state">待收货</span>
          </div>
          <hr>
          <div class="goods" @click="hrefDetail">
            <div class="good_pic">
              <img src="../assets/images/我的订单/pic_1.png" />
            </div>
            <div class="char">
              <p class="char_1">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
              <span class="char_2">￥</span><span class="price">2000</span>
            </div>
            <div class="count">
              <span class="chenghao">×</span><span class="count_num">1</span>
            </div>
          </div>
          <hr>
          <div class="btnn">
            <div class="show">立即收货</div>
            <img src="../assets/images/我的订单/icon.png" />
          </div>
        </div>
        
        <div class="obligation">
          <div class="obligation_one">
            <span class="order_num">订单号:</span>
            <span class="num">1000800245123569</span>
            <span class="state">待收货</span>
          </div>
          <hr>
          <div class="goods" @click="hrefDetail">
            <div class="good_pic">
              <img src="../assets/images/我的订单/pic_1.png" />
            </div>
            <div class="char">
              <p class="char_1">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
              <span class="char_2">￥</span><span class="price">2000</span>
            </div>
            <div class="count">
              <span class="chenghao">×</span><span class="count_num">1</span>
            </div>
          </div>
          <hr>
          <div class="btnn">
            <div class="show">立即收货</div>
            <img src="../assets/images/我的订单/icon.png" />
          </div>
        </div>
        <!-- 待评价 -->
        <div class="obligation">
          <div class="obligation_one">
            <span class="order_num">订单号:</span>
            <span class="num">1000800245123569</span>
            <span class="state">待评价</span>
          </div>
          <hr>
          <div class="goods" @click="hrefDetail">
            <div class="good_pic">
              <img src="../assets/images/我的订单/pic_1.png" />
            </div>
            <div class="char">
              <p class="char_1">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
              <span class="char_2">￥</span><span class="price">2000</span>
            </div>
            <div class="count">
              <span class="chenghao">×</span><span class="count_num">1</span>
            </div>
          </div>
          <hr>
          <div class="btnn">
            <div class="show">评价&晒单</div>
            <img src="../assets/images/我的订单/icon.png" />
          </div>
        </div>
        
        <div class="obligation">
          <div class="obligation_one">
            <span class="order_num">订单号:</span>
            <span class="num">1000800245123569</span>
            <span class="state">待评价</span>
          </div>
          <hr>
          <div class="goods" @click="hrefDetail">
            <div class="good_pic">
              <img src="../assets/images/我的订单/pic_1.png" />
            </div>
            <div class="char">
              <p class="char_1">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
              <span class="char_2">￥</span><span class="price">2000</span>
            </div>
            <div class="count">
              <span class="chenghao">×</span><span class="count_num">1</span>
            </div>
          </div>
          <hr>
          <div class="btnn">
            <div class="show">评价&晒单</div>
            <img src="../assets/images/我的订单/icon.png" />
          </div>
        </div>
      </van-tab>
      <van-tab title="待付款">
        <div class="obligation">
          <div class="obligation_one">
            <span class="order_num">订单号:</span>
            <span class="num">1000800245123569</span>
            <span class="state">待付款</span>
          </div>
          <hr>
          <div class="goods" @click="hrefDetail">
            <div class="good_pic">
              <img src="../assets/images/我的订单/pic_1.png" />
            </div>
            <div class="char">
              <p class="char_1">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
              <span class="char_2">￥</span><span class="price">2000</span>
            </div>
            <div class="count">
              <span class="chenghao">×</span><span class="count_num">1</span>
            </div>
          </div>
          <hr>
          <div class="btn">
            <div class="btn_1">取消订单</div>
            <div class="btn_2">去支付
              <img src="../assets/images/我的订单/icon.png" />
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="待收货">
        <div class="obligation">
          <div class="obligation_one">
            <span class="order_num">订单号:</span>
            <span class="num">1000800245123569</span>
            <span class="state">待收货</span>
          </div>
          <hr>
          <div class="goods" @click="hrefDetail">
            <div class="good_pic">
              <img src="../assets/images/我的订单/pic_1.png" />
            </div>
            <div class="char">
              <p class="char_1">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
              <span class="char_2">￥</span><span class="price">2000</span>
            </div>
            <div class="count">
              <span class="chenghao">×</span><span class="count_num">1</span>
            </div>
          </div>
          <hr>
          <div class="btnn">
            <div class="show">立即收货</div>
            <img src="../assets/images/我的订单/icon.png" />
          </div>
        </div>
        
        <div class="obligation">
          <div class="obligation_one">
            <span class="order_num">订单号:</span>
            <span class="num">1000800245123569</span>
            <span class="state">待收货</span>
          </div>
          <hr>
          <div class="goods" @click="hrefDetail">
            <div class="good_pic">
              <img src="../assets/images/我的订单/pic_1.png" />
            </div>
            <div class="char">
              <p class="char_1">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
              <span class="char_2">￥</span><span class="price">2000</span>
            </div>
            <div class="count">
              <span class="chenghao">×</span><span class="count_num">1</span>
            </div>
          </div>
          <hr>
          <div class="btnn">
            <div class="show">立即收货</div>
            <img src="../assets/images/我的订单/icon.png" />
          </div>
        </div>
      </van-tab>
      <van-tab title="待评价">
        <div class="obligation">
          <div class="obligation_one">
            <span class="order_num">订单号:</span>
            <span class="num">1000800245123569</span>
            <span class="state">待评价</span>
          </div>
          <hr>
          <div class="goods" @click="hrefDetail">
            <div class="good_pic">
              <img src="../assets/images/我的订单/pic_1.png" />
            </div>
            <div class="char">
              <p class="char_1">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
              <span class="char_2">￥</span><span class="price">2000</span>
            </div>
            <div class="count">
              <span class="chenghao">×</span><span class="count_num">1</span>
            </div>
          </div>
          <hr>
          <div class="btnn">
            <div class="show">评价&晒单</div>
            <img src="../assets/images/我的订单/icon.png" />
          </div>
        </div>
        
        <div class="obligation">
          <div class="obligation_one">
            <span class="order_num">订单号:</span>
            <span class="num">1000800245123569</span>
            <span class="state">待评价</span>
          </div>
          <hr>
          <div class="goods" @click="hrefDetail">
            <div class="good_pic">
              <img src="../assets/images/我的订单/pic_1.png" />
            </div>
            <div class="char">
              <p class="char_1">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
              <span class="char_2">￥</span><span class="price">2000</span>
            </div>
            <div class="count">
              <span class="chenghao">×</span><span class="count_num">1</span>
            </div>
          </div>
          <hr>
          <div class="btnn">
            <div class="show">评价&晒单</div>
            <img src="../assets/images/我的订单/icon.png" />
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      active: 0,
    }
  },
   methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$toast('按钮');
    },
    hrefDetail(){
      this.$router.push({name:"Detail"})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 导航栏 */
html{
  background: #f3f4f5;
}
.nav{
  background:#000;
}

/* 订单列表:全部,待付款,待收货,待评价 */
.obligation{
  width: 100%;
  height: 3.5rem;
  background: #fff;
}
.obligation_one{
  margin-top:0.15rem;
  width: 100%;
  height: 0.7rem;
  line-height: 0.2rem;
}
hr{
  border: 1px solid #eeeeee;
}
.order_num{
  font-size: 0.22rem;
  color: #666666;
  margin-left: 0.3rem;
}
.num{
  font-size: 0.24rem;
  color: #666666;
}
.state{
  font-size: 0.24rem;
  color: #ff4242;
  margin-left: 2.6rem;
}
.goods{
  width: 100%;
  height: 1.8rem;
}
.good_pic{
  width:1.2rem;
  height:1.2rem;
  float:left;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}
.good_pic>img{
  width:1.2rem;
  height:1.2rem;
}
.char{
  width:4.35rem;
  height:1.2rem;
  float: left;
  margin-top: 0.3rem;
  margin-left: 0.2rem;
}
.char_1{
  font-size: 0.28rem;
  color: #666666;
}
.char_2{
  font-size: 0.2rem;
  float:left;
  margin-top: 0.1rem;
}
.price{
  font-size: 0.28rem;
  margin-top: 0.1rem;
  float:left;
}
.count{
  float:left;
  height: 1.2rem;
  margin-top: 0.3rem;
  margin-left: 0.8rem;
}
.chenghao{
  font-size: 0.2rem;
  float:left;
}
.count_num{
  float:left;
  font-size: 0.28rem;
}
.btn{
  width: 100%;
  height: 1rem;
  display: flex;
}
.btn_1{
  width: 50%;
  height: 100%;
  border: 1px solid #e1e1e1;
  border-top: none;
  border-left: none;
  border-bottom: none;
  text-align: center;
  line-height: 0.9rem;
  font-size: 0.28rem;
  color: #333333;
}
.btn_2{
  width: 50%;
  height: 100%;
  text-align: center;
  line-height: 0.9rem;
  font-size: 0.28rem;
  color: #234497;
}
.btn_1:hover{
  background:#e1e1e1;
}
.btn_2:hover{
  background:#e1e1e1;
}
.btn_2>img{
  float:right;
  width:0.3rem;
  margin-top:0.3rem;
  margin-right:0.3rem;
}

.btnn{
  width: 100%;
  height: 1rem;
  background: #e1e1e1;
}
.show{
  float:left;
  margin-left:3rem;
  width:1.7rem;
  height: 100%;
  color:#234497;
  font-size: 0.28rem;
  line-height: 1rem;
}
.btnn>img{
  float:right;
  width:0.4rem;
  margin-top:0.3rem;
  margin-right:0.3rem;
}
</style>
