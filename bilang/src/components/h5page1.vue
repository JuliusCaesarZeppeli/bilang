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
    <van-swipe class="my-swipe slideshow" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img class="picture1" src="../assets/images/h5页面1/h5页面_1_02.png"></van-swipe-item>
      <van-swipe-item><img class="picture1" src="../assets/images/h5页面1/h5页面_1_02.png"></van-swipe-item>
      <van-swipe-item><img class="picture1" src="../assets/images/h5页面1/h5页面_1_02.png"></van-swipe-item>
      <van-swipe-item><img class="picture1" src="../assets/images/h5页面1/h5页面_1_02.png"></van-swipe-item>
    </van-swipe>
    <div class="location"><img class="picture2" src="../assets/images/h5页面1/h5页面_2_04.png"></div>
    <div class="location2"><img src="../assets/images/h5页面1/h5页面_3_03.png"></div>
    <div class="text">
      <div class="text1">
        <van-divider
          :style="{ color: '#244598', borderColor: '#244598', padding: '0.16rem 0.16rem' }"
          >
            专为您定制
        </van-divider>
      </div>
    </div>
    <div class="end" @click="$router.push('/h5page2')"><button>点击领取现金体验卷200元</button></div>
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
          this.$router.go(-1);
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
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
.slideshow{
  width: 7.5rem;
  height: 7.5rem;
}
.picture1{
  width: 7.5rem;
  height: 7.5rem;
}
.location{
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  top: -0.74rem;
  left: 0.54rem;
}
.picture2{
  width: 1.5rem;
  height: 1.5rem;
}
.location2{
  width: 7.5rem;
  height:0.68rem;
  display: flex;
  flex-direction: row;
  justify-content:center;
}
.location2 img{
  width: 4.36rem;
  height:0.68rem;
}
.text{
  width: 7.5rem;
  display: flex;
  flex-direction: row;
  justify-content:center;
}
.text1{
  width: 4.7rem;
  font-size: 0.24rem;
  font-family: HiraginoSansGB;
  font-weight: normal;
  color: #244598;
  letter-spacing: 0.08rem;
}
.end{
  width: 7.5rem;
  height: 1.04rem;
  margin-top: 0.3rem;
  display: flex;
  flex-direction: row;
  justify-content:center;
}
.end button{
  width: 6.06rem;
  height: 1.04rem;
  font-size: 0.24rem;
  font-family: HiraginoSansGB;
  font-weight: normal;
  color: #FFFFFF;
  background-color: #244598;
  border: 0.01rem solid #E1E1E1;
  background: linear-gradient(0deg, #244498 0%, #4469C4 100%);
  border-radius: 0.1rem;
}
</style>
