// 胸围 张瑄睿作，转载必究
<template>
  <div class="bg">
    <!-- 标题 -->
    <van-nav-bar
      title="开始测量"
      left-text="返回"
      right-text="●●●"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="pic"><img src="../assets/images/我的尺寸/pic_2.png"></div>
    <div class="words">
      <p>测量方法</p>
      <p>将卷尺放在髋骨上部和胸腔下部中间的地方，贴紧皮肤但不要勒紧。在呼气状态下读取测量值，精确到0.1cm</p>
    </div>
    <div class="footer">
      <p>添加胸围</p>
      <div class="input_">
        <input type="text" value="0.0">
        <span>cm</span>
        <div class="next_" @click="$router.push({name:'Waistline'})"><span>下一步</span><img src="../assets/images/我的尺寸/icon.png"></div>
      </div>
      <div class="scaleplate">
        <img src="../assets/images/我的尺寸/ft_pic.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"Chest",
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
.pic{
  width: 2.83rem;
  height: 2.74rem;
  margin: 1.68rem auto 1.74rem;
}
.pic>img{
  width: 3rem;
  height: 2.9rem;
}
.words{
  width: 6.87rem;
  margin:0 auto ;
  font-size: 0.3rem;
  color: #999;
  text-align: center;
}
.words>p:last-child{
  font-size: 0.28rem;
  margin-top:0.25rem;
}
.footer{
  width: 7.5rem;
  height: 4.19rem;
  background-image: url("../assets/images/我的尺寸/footer.png");
  background-repeat:no-repeat;
  background-size: 7.5rem 4.19rem;
  margin:0.65rem auto 0;
  padding-top: 0.31rem;
  box-sizing: border-box;
}
.footer>P:nth-child(1){
  font-size: 0.3rem;
  text-align: center;
}
.input_{
  margin: 0.7rem auto 0;
  text-align: center;
  position: relative;
}
.input_>input{
  border: none;
  background: none;
  width: 1rem;
  height:0.5rem;
  font-size: 0.6rem;
  font-weight: 900;
  margin-left: 0.5rem;
}
.input_>span{
  font-size: 0.24rem;
  font-weight: 900;
}
.next_{
  color: #234497;
  font-size:0.24rem;
  position: absolute;
  right: 0.73rem;
  top: 0;
}
.next_>img{
  width: 0.27rem;
  height: 0.24rem;
  margin-top: 0.1rem;
  margin-left: 0.09rem;
}
.scaleplate{
  width: 7.5rem;
  height: 1.01rem;
  background-image: url("../assets/images/我的尺寸/ft_pic_2.png");
  background-repeat: no-repeat;
  background-size: 7.5rem 1.01rem;
  position: relative;
  margin-top: 0.38rem;
}
.scaleplate>img{
  width: 0.32rem;
  height: 1.47rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -0.76rem;
  margin-left:-0.17rem;
}
</style>