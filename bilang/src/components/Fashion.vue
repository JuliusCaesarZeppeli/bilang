<template>
  <div class="fashion">
    <!-- 导航栏 -->
    <van-nav-bar
    class="nav"
    title="潮流资讯"
    left-text="返回"
    right-text="●●●"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
    
    <!-- 轮播 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <div class="lunbo">
            <div class="lunbo_pic">
              <img src="../assets/images/潮流资讯/fashion.png" />
            </div>
            <div class="lunbo_wz">
                <p class="wz">碎花不是姑娘们的专享,男士也可以拥有。清新的花色设计在男士衬衫上，还可以带来不一样的时尚感。</p>
              </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="lunbo">
            <div class="lunbo_pic">
              <img src="../assets/images/潮流资讯/fashion.png" />
            </div>
            <div class="lunbo_wz">
                <p class="wz">碎花不是姑娘们的专享,男士也可以拥有。清新的花色设计在男士衬衫上，还可以带来不一样的时尚感。</p>
              </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="lunbo">
            <div class="lunbo_pic">
              <img src="../assets/images/潮流资讯/fashion.png" />
            </div>
            <div class="lunbo_wz">
                <p class="wz">碎花不是姑娘们的专享,男士也可以拥有。清新的花色设计在男士衬衫上，还可以带来不一样的时尚感。</p>
              </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="lunbo">
            <div class="lunbo_pic">
              <img src="../assets/images/潮流资讯/fashion.png" />
            </div>
            <div class="lunbo_wz">
                <p class="wz">碎花不是姑娘们的专享,男士也可以拥有。清新的花色设计在男士衬衫上，还可以带来不一样的时尚感。</p>
              </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="lunbo">
            <div class="lunbo_pic">
              <img src="../assets/images/潮流资讯/fashion.png" />
            </div>
            <div class="lunbo_wz">
                <p class="wz">碎花不是姑娘们的专享,男士也可以拥有。清新的花色设计在男士衬衫上，还可以带来不一样的时尚感。</p>
              </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="lunbo">
            <div class="lunbo_pic">
              <img src="../assets/images/潮流资讯/fashion.png" />
            </div>
            <div class="lunbo_wz">
                <p class="wz">碎花不是姑娘们的专享,男士也可以拥有。清新的花色设计在男士衬衫上，还可以带来不一样的时尚感。</p>
              </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="lunbo">
            <div class="lunbo_pic">
              <img src="../assets/images/潮流资讯/fashion.png" />
            </div>
            <div class="lunbo_wz">
                <p class="wz">碎花不是姑娘们的专享,男士也可以拥有。清新的花色设计在男士衬衫上，还可以带来不一样的时尚感。</p>
              </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="lunbo">
            <div class="lunbo_pic">
              <img src="../assets/images/潮流资讯/fashion.png" />
            </div>
            <div class="lunbo_wz">
                <p class="wz">碎花不是姑娘们的专享,男士也可以拥有。清新的花色设计在男士衬衫上，还可以带来不一样的时尚感。</p>
              </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="lunbo">
            <div class="lunbo_pic">
              <img src="../assets/images/潮流资讯/fashion.png" />
            </div>
            <div class="lunbo_wz">
                <p class="wz">碎花不是姑娘们的专享,男士也可以拥有。清新的花色设计在男士衬衫上，还可以带来不一样的时尚感。</p>
              </div>
          </div>
        </van-swipe-item>
        </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fashion',
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
.banner{
  width: 100%;
  height: 12.09rem;
  background: #2b2a30;
}
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    height: 12.09rem;
    background: #2b2a30;
  }
.lunbo{
  width: 6.45rem;
  height: 10rem;
  margin: 0 auto;
  margin-top: 0.5rem;
}
.lunbo_pic{
  width:100%;
  height: 7.8rem;
}
.lunbo_pic>img{
  width:100%;
  height: 7.8rem;
}
.lunbo_wz{
  width: 100%;
  height: 2.2rem;
  background: #fff;
}
.wz{
  float: left;
  margin-top: 0.35rem;
  margin-left: 0.45rem;
  width: 5.5rem;
  height: 1rem;
  line-height: 0.5rem;
  text-align: left;
  font-size: 0.3rem;
  color: #000;
}
</style>
