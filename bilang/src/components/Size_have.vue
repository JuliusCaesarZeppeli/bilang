// 我的尺寸 张瑄睿作，转载必究
<template>
  <div class="bg">
    <!-- 标题 -->
    <van-nav-bar
      title="我的尺寸"
      left-text="返回"
      right-text="●●●"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 头像名字 -->
    <div class="banner">
      <img src="../assets/images/我的粉丝&我的代言费/fans.png">
      <span>董大伟</span>
      <div class="remeasure" @click="$router.push({name:'Size_not_have'})"><img src="../assets/images/我的尺寸/icon_1.png"><p>重新测量</p></div>
    </div>
    <div class="body_">
      <!-- 身高 -->
      <div>
        <img src="../assets/images/我的尺寸/pic_5.png">
        <p>身高</p>
        <p>180<span>cm</span></p>
      </div>
      <!-- 体重 -->
      <div>
        <img src="../assets/images/我的尺寸/pic_4.png">
        <p>体重</p>
        <p>176<span>kg</span></p>
      </div>
      <!-- 肩宽 -->
      <div>
        <img src="../assets/images/我的尺寸/pic_6.png">
        <p>肩宽</p>
        <p>91.6<span>cm</span></p>
      </div>
      <!-- 胸围 -->
      <div>
        <img src="../assets/images/我的尺寸/pic_2.png">
        <p>胸围</p>
        <p>86.5<span>cm</span></p>
      </div>
      <!-- 腰围 -->
      <div>
        <img src="../assets/images/我的尺寸/pic_1.png">
        <p>腰围</p>
        <p>33.6<span>cm</span></p>
      </div>
      <!-- 臀围 -->
      <div>
        <img src="../assets/images/我的尺寸/pic_3.png">
        <p>臀围</p>
        <p>91.6<span>cm</span></p>
      </div>
    </div>
    <div class="footer">
      <p>体型分析</p>
      <p>健美型身材。肩很宽、很厚、结实、健壮，腰明显较细，大腿部的肌肉很发达。</p>
    </div>
  </div>
</template>
<script>
export default {
  name:"Size_have",
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
  background: #f9f9f9;
  height: 13.3rem;
}
.banner{
  display: flex;
  align-items:center;
  justify-content:space-between;
  width: 7.5rem;
  height: 2rem;
  background-image:url("../assets/images/我的尺寸/img_111.png");
  background-repeat: no-repeat;
  background-size: 7.5rem 2rem;
  font-size: 0.3rem;
  margin:0 auto;
}
.banner>img{
  width: 1.11rem;
  height: 1.11rem;
  margin-left:0.74rem;
  margin-right: 0.36rem;
}
.body_>div>img{
  width: 1.89rem;
  height: 1.89rem;
}
.body_{
  width: 7.5rem;
  margin: 0 auto;
  display: flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
}
.body_>div{
  text-align: center;
  color: #999999;
  font-size: 0.3rem;
  margin-top: 0.58rem;
  margin-bottom: 0.58rem;
}
.body_>div>p:last-child{
  font-size: 0.4rem;
  color: #234497;
  margin-top:0.2rem;
}
.remeasure{
  text-align: center;
  margin-right: 0.46rem;
  font-size: 0.22rem;
  color: #234497;
}
.remeasure>img{
  width: 0.41rem;
  height: 0.41rem;
  margin-bottom: 0.21rem;
}
.footer{
  width: 6.9rem;
  margin: 0 auto;
  font-size: 0.3rem;
}
.footer>p:last-child{
  color: #999999;
  font-size: 0.28rem;
}
</style>