<template>
  <div class='body'>
    <!-- 导航  -->
    <div class="document_nav">
      <p @click="back">
        <span>〈</span>
        <span>返回</span>
      </p>
      <p>休闲型男套装</p>
      <p>● ● ●</p>
    </div>
    <!-- 导航下轮播那块 -->
    <div class='content_center'>
    <!-- 轮播 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="../assets/images/时尚精选/pic_01.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/时尚精选/pic_02.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/时尚精选/pic_03.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/时尚精选/pic_04.png" alt="">
        </van-swipe-item>
      </van-swipe>
      <!-- 语言栏 -->
      <div class='LanguageBar'  v-show="remove">
        <div>
          <p>设计师：vickin_hro</p>
          <p>设计理念：纵横二千之零售店及产品均不断创新，并在市 场上获得一致的良好口碑。</p>
          <p @click='none'><img src="../assets/images/产品列表/产品列表__03.png" alt=""></p>
        </div>
        <div>
          <img src="../assets/images/个人信息/个人信息(绑定手机）狮子_03.png" alt="">
        </div>
      </div>
    </div>
    <!-- 跑马灯底部 -->
    <div class='content_Marquee_content'>
      <transition name='my'>
        <div class='content_Marquee'>
          <div>
            <p><img src="../assets/images/产品列表/产品列表_01.png" alt=""></p>
            <p>Sportsman leisure suit</p>
            <p>灰色衬衫</p>
            <p>
              <span>¥</span>
              <span>899</span>
            </p>
          </div>
          <div>
            <p><img src="../assets/images/产品列表/产品列表_03_03.png" alt=""></p>
            <p>Sportsman leisure suit</p>
            <p>灰色衬衫</p>
            <p>
              <span>¥</span>
              <span>899</span>
            </p>
          </div>
          <div>
            <p><img src="../assets/images/产品列表/产品列1_03.png" alt=""></p>
            <p>Sportsman leisure suit</p>
            <p>灰色衬衫</p>
            <p>
              <span>¥</span>
              <span>899</span>
            </p>
          </div>
          <div>
            <p><img src="../assets/images/产品列表/产品列1_03.png" alt=""></p>
            <p>Sportsman leisure suit</p>
            <p>灰色衬衫</p>
            <p>
              <span>¥</span>
              <span>899</span>
            </p>
          </div>
          <div>
            <p><img src="../assets/images/产品列表/产品列1_03.png" alt=""></p>
            <p>Sportsman leisure suit</p>
            <p>灰色衬衫</p>
            <p>
              <span>¥</span>
              <span>899</span>
            </p>
          </div>
        </div>
      </transition>
    </div>
    <!-- 三道杠 -->
    <div class='ThreeBars'>
      <img src="../assets/images/首页/button.png">
    </div>
   </div>
</template>
<script>
export default {
  name:'ProductList',
  data(){
    return{
      remove:true,
    }
  },
  methods:{
    none(){
      this.remove=false;
    },
    back(){
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
*{margin:0;padding:0;}
img{width:100%;height:100%;}
.document_nav{display:flex;align-items:center;color:white;font-size:.34rem;width:100%;height:1rem;background:black;justify-content:space-between;padding-right:.1rem;box-sizing:border-box;}
.content_center{position:relative;}
.van-swipe .van-swipe-item {width:100%;height:8.7rem;color: #fff;font-size: 20px;line-height: 150px;text-align: center;background-color: #39a9ed;}
.ThreeBars{width:1.2rem;height:1.2rem;position:fixed;top:1.3rem;left:0;}
.LanguageBar{width:100%;height:2.9rem;position:absolute;bottom:0;}
.LanguageBar>div:nth-of-type(1){position:relative;width:90%;height:1.8rem;margin:0 auto;background:url(../assets/images/产品列表/产品列表_03.png) no-repeat;background-size:100% 90%;padding:.2rem .3rem .2rem .3rem;box-sizing:border-box;color:#234497;font-size:.24rem;}
.LanguageBar>div:nth-of-type(1)>p:nth-of-type(2){color:#333333;margin-top:.1rem;}
.LanguageBar>div:nth-of-type(1)>p:nth-of-type(3){position:absolute;width:.4rem;height:.4rem;top:-.2rem;right:-.2rem;}
.LanguageBar>div:nth-of-type(2){width:90%;height:.8rem;margin:0 auto;}
.LanguageBar>div:nth-of-type(2)>img{width:.8rem;height:.8rem;float:right;}
.content_Marquee_content{width:100%;overflow:hidden;}
.content_Marquee{width:165%;height:3.3rem;display:flex;justify-content:space-around;padding-top:.45rem;box-sizing:border-box;}
.content_Marquee>div>p:nth-of-type(1){font-size:.2rem;}
.content_Marquee>div>p{display:flex;justify-content:center;margin-bottom: .1rem;text-align:Center;font-size:.24rem;}
.content_Marquee p>img{width:1.2rem;height:1.53rem;}
.my-enter{transform:translateX(0);}
.my-leave-active{transition:all 10s ease;}
</style>