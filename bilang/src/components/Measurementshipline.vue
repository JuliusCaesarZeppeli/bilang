<template>
  <div class="hello">
    <van-nav-bar
      title="碧浪"
      left-text="返回"
      right-text="●●●"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="underpainting"
    />
    <div class="chunk">
      <img src="../assets/images/测量尺寸-臀围/测量尺寸-臀围_03.png">
    </div>
    <p class="text">测量方法</p>
    <p class="text">将卷尺放在髋骨上部和胸腔下部中间的地方，贴紧皮肤<br/>
但不要勒紧。在呼气状态下读取测量值，精确到0.1cm</p>
    <div class="end">
      <p class="text2">添加臀围</p>
      <p class="text3">0.0<span>cm</span></p>
      <img  class="pic" src="../assets/images/我的尺寸/ft_pic_2.png">
      <img  class="pic1" src="../assets/images/我的尺寸/ft_pic.png">
      <p class="text4">下一步<img src="../assets/images/我的尺寸/icon.png"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'h5page1',
    data () {
      return {
      }
    },
    methods: {
        onClickLeft () {
          this.$toast('返回')
        },
        onClickRight () {
          this.$toast('按钮')
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0;
  padding:0;
}
.underpainting{
  background-color: black;
}
.chunk{
  width: 7.5rem;
  height: 6.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.chunk img{
  width: 5rem;
  height: 5rem;
}
.text{
  text-align: center;
  font-size: 0.28rem;
  font-family: STXihei;
  font-weight: 400;
  color: #000000;
}
.text2{
  padding-top: 0.2rem;
  text-align: center;
  font-size: 0.28rem;
  font-family: STXihei;
  font-weight: 400;
  color: #000000;
}
.text3{
  padding-top: 1rem;
  text-align: center;
  font-size: 0.5rem;
  font-family: STXihei;
  font-weight: 400;
  color: #000000;
}
.text3 span{
  font-size: 0.2rem;
}
.end{
  margin-top: 0.6rem;
  width: 7.5rem;
  height: 4.15rem;
  background:url(../assets/images/我的尺寸/footer.png) no-repeat;
  background-size: cover;
  position: relative;
}
.pic{
  margin-top: 0.5rem;
  width: 7.5rem;
  height: 1rem;
}
.pic1{
  width: 0.32rem;
  height: 1.47rem;
  position: absolute;
  bottom: 0.2rem;
  left: 3.6rem;
}
.text4{
  font-size: 0.24rem;
  font-family: HiraginoSansGB;
  font-weight: normal;
  color: #244498;
  position: absolute;
  top:1.5rem;
  right: 0.5rem;
}
.text4 img{
  width: 0.28rem;
  height:0.28rem;
  margin-right: 0.3rem;
  vertical-align: middle;
}
</style>
