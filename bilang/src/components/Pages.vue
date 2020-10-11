<template>
  <div class="index">
    <!-- 导航nav -->
      <van-nav-bar
      class="header"
      title="比朗"
      left-text="返回"
      right-text="..."
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />

    <!-- banner -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>
      <img src="../assets/images/首页/index_01.png" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="../assets/images/首页/index_02.png" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="../assets/images/首页/index_03.png" />
    </van-swipe-item>
    <van-swipe-item>
      <img src="../assets/images/首页/index_04.png" />
    </van-swipe-item>
    </van-swipe>

    <!-- main -->
        <!-- main_one -->
    <div class="main_one">
      <div class="main_one_right">
        <div class="main_one_right_wz">
          <p class="one_wz1">时尚精选</p>
          <p class="one_wz2">Style Collocation</p>
          <img src="../assets/images/首页/icon_01.png" />
        </div>
        <div class="lantiao"></div>
      </div>
    </div>

        <!-- main_two -->
    <div class="main_two">
      <div class="main_two_right">
        <div class="main_two_right_wz">
          <p class="two_wz1">潮流资讯</p>
          <p class="two_wz2">Fashion Trend</p>
          <img src="../assets/images/首页/icon_01.png" />
        </div>
        <div class="lantiao"></div>
      </div>
    </div>

            <!-- main_three -->
    <div class="main_three">
      <div class="main_three_right">
        <div class="main_three_right_wz">
          <p class="three_wz1">潮流资讯</p>
          <p class="three_wz2">Fashion Trend</p>
          <img src="../assets/images/首页/icon_01.png" />
        </div>
        <div class="lantiao"></div>
      </div>
    </div>

                <!-- main_four -->
    <div class="main_four">
      <div class="main_four_right">
        <div class="main_four_right_wz">
          <p class="four_wz1">潮流资讯</p>
          <p class="four_wz2">Fashion Trend</p>
          <img src="../assets/images/首页/icon_01.png" />
        </div>
        <div class="lantiao"></div>
      </div>
    </div>

    <!-- 悬浮按钮 -->
    <div class="btn" is-link @click="showPopup">
      <img src="../assets/images/首页/button.png"/>
    </div>
    <van-popup class="center" v-model="show" closeable position="left" :style="{ height: '100%',width:'5.8rem'}" >
      <div class="photo">
        <div class="touxiang">
          <div class="touxiang2"></div>
        </div>
        <p class="nichen">vicncncn</p>
      </div>
      <van-divider class="divider" dashed><img src="../assets/images/添加收货地址/jiandao.png"/></van-divider>
      <div class="list">
        <li>
          <img src="../assets/images/个人中心/icon_01.png">
          <span>首页</span>
        </li>
        <li>
          <img src="../assets/images/个人中心/icon_02.png">
          <span>我的信息</span>
        </li>
        <li>
          <img src="../assets/images/个人中心/icon_03.png">
          <span>我的订单</span>
        </li>
        <li>
          <img src="../assets/images/个人中心/icon_04.png">
          <span>我的购物车</span>
        </li>
        <li>
          <img src="../assets/images/个人中心/icon_05.png">
          <span>我的尺寸</span>
        </li>
        <li>
          <img src="../assets/images/个人中心/icon_06.png">
          <span>我的钱包</span>
        </li>
        <li>
          <img src="../assets/images/个人中心/icon_07.png">
          <span>我的收藏</span>
        </li>
        <li>
          <img src="../assets/images/个人中心/icon_08.png">
          <span>我的地址</span>
        </li>

      </div>
      <div class="back">
        <img src="../assets/images/个人中心/incon_09.png">
          <span>返回</span>
      </div>

    </van-popup>

  </div>
</template>

<script>
export default {
  name: 'Pages',
  data () {
    return {
      show: false
    }
  },
  methods: {
    onClickLeft () {
      this.$toast('返回')
    },
    onClickRight () {
      this.$toast('按钮')
    },
    showPopup () {
      this.show = true
    }
//     back () {
// this.$router.push({name: '/'})
//     }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0 auto;
  padding:0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.header{
  width: 100%;
  height:1.2rem;
  color: #fff;
  background:#212025;
}

/* banner */
.my-swipe .van-swipe-item {
  width:7.5rem;
  height: 3.4rem;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
.van-swipe-item>img{
  width:7.5rem;
  height:3.4rem;
}

/* main */
        /* main-one */
.main_one{
  width:7.5rem;
  height:2.6rem;
  margin-top: 0.1rem;
  background:url(../assets/images/首页/index_01.png) no-repeat;
  background-size: cover;
}
.main_one >img{
  width:7.5rem;
  height:2.6rem;
}
.main_one_right{
  width:2.8rem;
  height: 2.6rem;
  float: right;
}
.main_one_right_wz{
  width: 2.72rem;
  height: 2.6rem;
  float: left;
}
.main_one_right_wz>img{
  margin-left: 2.1rem;
  padding-bottom:0.4rem ;
  width:0.25rem;
  height: 0.25rem;
}
.one_wz1{
  float: right;
  margin-right: 0.32rem;
  margin-top:1.17rem ;
  font-size: 0.28rem;
  color: #333333;
}
.one_wz2{
  float: right;
  margin-right: 0.32rem;
  margin-top:0.08rem ;
  font-size: 0.16px;
  color: #333333;
}

        /* main-two */
.main_two{
  width:7.5rem;
  height:2.6rem;
  margin-top: 0.1rem;
  background:url(../assets/images/首页/index_02.png) no-repeat;
  background-size: cover;
}
.main_two >img{
  width:7.5rem;
  height:2.6rem;
}
.main_two_right{
  width:2.8rem;
  height: 2.6rem;
  float: right;
}
.main_two_right_wz{
  width: 2.72rem;
  height: 2.6rem;
  float: left;
}
.main_two_right_wz>img{
  margin-left: 2.1rem;
  padding-bottom:0.4rem ;
  width:0.25rem;
  height: 0.25rem;
}
.two_wz1{
  float: right;
  margin-right: 0.32rem;
  margin-top:1.17rem ;
  font-size: 0.28rem;
  color: #fff;
}
.two_wz2{
  float: right;
  margin-right: 0.32rem;
  margin-top:0.08rem ;
  font-size: 0.16px;
  color: #fff;
}

        /* main-three */
.main_three{
  width:7.5rem;
  height:2.6rem;
  margin-top: 0.1rem;
  background:url(../assets/images/首页/index_03.png) no-repeat;
  background-size: cover;
}
.main_three >img{
  width:7.5rem;
  height:2.6rem;
}
.main_three_right{
  width:2.8rem;
  height: 2.6rem;
  float: right;
}
.main_three_right_wz{
  width: 2.72rem;
  height: 2.6rem;
  float: left;
}
.main_three_right_wz>img{
  margin-left: 2.1rem;
  padding-bottom:0.4rem ;
  width:0.25rem;
  height: 0.25rem;
}
.three_wz1{
  float: right;
  margin-right: 0.32rem;
  margin-top:1.17rem ;
  font-size: 0.28rem;
  color: #fff;
}
.three_wz2{
  float: right;
  margin-right: 0.32rem;
  margin-top:0.08rem ;
  font-size: 0.16px;
  color: #fff;
}

        /* main-four */
.main_four{
  width:7.5rem;
  height:2.6rem;
  margin-top: 0.1rem;
  background:url(../assets/images/首页/index_04.png) no-repeat;
  background-size: cover;
}
.main_four >img{
  width:7.5rem;
  height:2.6rem;
}
.main_four_right{
  width:2.8rem;
  height: 2.6rem;
  float: right;
}
.main_four_right_wz{
  width: 2.72rem;
  height: 2.6rem;
  float: left;
}
.main_four_right_wz>img{
  margin-left: 2.1rem;
  padding-bottom:0.4rem ;
  width:0.25rem;
  height: 0.25rem;
}
.four_wz1{
  float: right;
  margin-right: 0.32rem;
  margin-top:1.17rem ;
  font-size: 0.28rem;
  color: #fff;
}
.four_wz2{
  float: right;
  margin-right: 0.32rem;
  margin-top:0.08rem ;
  font-size: 0.16px;
  color: #fff;
}

.lantiao{
  width:0.08rem;
  height: 2.6rem;
  background: #234497;
  float: right;
}

/* 悬浮按钮 */
.btn{
  width: 0.8rem;
  height: 0.8rem;
  position: fixed;
  top:8rem;
  background-size: #f00;
}
.btn>img{
  width: 0.8rem;
  height: 0.8rem;
}
.center{
  background:#354067;
}

/* 弹出导航 */
.photo{
  width: 5.8rem;
  height:1.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.divider>img{
  height:0.3rem;
}
.touxiang{
  width: 1rem;
  height: 1rem;
  background: #777d95;
  border-radius: 50%;
  margin-left: 0.25rem;
}
.touxiang2{
  width: 0.9rem;
  height: 0.9rem;
  background:#fff;
  border-radius: 50%;
  margin-top: 0.05rem;
  margin-left: 0.05rem;
}
.nichen{
  font-size: 0.2rem;
  color: #fff;
  margin-left: -3rem;
}
.list{
  display: flex;
  flex-direction: column;
}
.list img{
  width:0.3rem;
  height:0.3rem;
  margin-left:0.3rem;
}
.list span{
  font-size: 0.3rem;
  color: #fff;
}
.back{
  width: 5.8rem;
  height: 1.4rem;
  margin-top: 0.5rem;
}
.back>img{
  width:0.3rem;
  height:0.3rem;
  margin-left:0.5rem;
}
.back>span{
  font-size: 0.3rem;
  color: #fff;
}

</style>
