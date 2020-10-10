<template>
  <div>
       <van-nav-bar class="nav"
  title="全部评价"
  left-text="返回"
  right-text="●●●"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>

      <div class="all_top">
        <div class="all_top_o">
            <img src="../assets/images/个人信息/个人信息(绑定手机）狮子_03.png" alt="">
        </div>
        <div class="all_top_p">
          <span>董大伟</span>
        </div>
      </div>
      <p class="all_p">产品不错，衣服尺寸很适合，下次还会再来！</p>



      <div class="all_img">
        <img src="../assets/images/全部评价/pic_01.png" alt="">
        <img src="../assets/images/全部评价/pic_02.png" alt="">
        <img src="../assets/images/全部评价/pic_03.png" alt="">
      </div>

      <div class="all_word">
        <span>产品质量:</span>
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <span>服务态度：</span>
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <span>尺寸合适：</span>
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
      </div>
      <hr>
      <div class="all_top">
        <div class="all_top_o">
            <img src="../assets/images/个人信息/个人信息(绑定手机）狮子_03.png" alt="">
        </div>
        <div class="all_top_p">
          <span>董大伟</span>
        </div>
      </div>


      <div class="all_word">
        <span>产品质量:</span>
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <span>服务态度：</span>
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <span>尺寸合适：</span>
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
        <img src="../assets/images/全部评价/icon_01.png" alt="">
      </div>
  </div>
</template>
<script>
export default {
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
.all_top{
  width: 100%;
  height: 1rem;
}
.all_top_o{
  width: 20%;
  height: 1rem;
  float: left;
}
.all_top_o img{
  width: 1rem;
  margin-top: 0.5rem;
  margin-left: 0.3rem;
}
.all_top_p{
  width: 80%;
  height: 1.3rem;
  float: left;
  margin-top: 0.3rem;
}
.all_top_p span{
  font-size: 0.4rem;
}
.all_p{
  font-size: 0.3rem;
  margin-left: 0.3rem;
}
.all_img img{
  margin-top: 0.3rem;
  width: 1.6rem;
  margin-left: 0.3rem;
}
.all_word{
  font-size: 0.2rem;
  margin-bottom: 0.3rem;
}
.all_word span{
  margin-left: 0.2rem;
}
.all_word img{
  width: 2%;
}
</style>