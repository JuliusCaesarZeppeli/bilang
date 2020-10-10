// 我的尺寸 无 张瑄睿作，转载必究
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
    </div>
    <div class="body_">
      <!-- 身高 -->
      <div>
        <img src="../assets/images/我的尺寸/pic_5.png">
        <p>身高</p>
        <p>--</p>
      </div>
      <!-- 体重 -->
      <div>
        <img src="../assets/images/我的尺寸/pic_4.png">
        <p>体重</p>
        <p>--</p>
      </div>
      <!-- 肩宽 -->
      <div>
        <img src="../assets/images/我的尺寸/pic_6.png">
        <p>肩宽</p>
        <p>--</p>
      </div>
      <!-- 胸围 -->
      <div>
        <img src="../assets/images/我的尺寸/pic_2.png">
        <p>胸围</p>
        <p>--</p>
      </div>
      <!-- 腰围 -->
      <div>
        <img src="../assets/images/我的尺寸/pic_1.png">
        <p>腰围</p>
        <p>--</p>
      </div>
      <!-- 臀围 -->
      <div>
        <img src="../assets/images/我的尺寸/pic_3.png">
        <p>臀围</p>
        <p>--</p>
      </div>
    </div>
    <div class="btn"><button>开始测量</button></div>
  </div>
</template>
<script>
export default {
  name:"Size_not_have",
  data(){
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
<style scoped>
.bg{
  background: #f9f9f9;
  height: 13.3rem;
}
.banner{
  display: flex;
  align-items:center;
  width: 7.5rem;
  height: 2rem;
  background:#CCCCCC;
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
  font-size: 0.6rem;
  color: black;
}
.btn{
  margin: 0 auto;
  width: 6.9rem;
  
}
.btn>button{
  width: 6.9rem;
  height: 0.89rem;
  border: 0.01rem solid #234099;
  color: #234099;
  font-size: 0.3rem;
  background: #f9f9f9;
}
</style>