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
    <div class="setting">
      <div class="layout">
        <img class="pic1" src="../assets/images/h5页面2/h5页面x2_03.png">
        <p class="text1">vickin_hro</p>
        <p class="text2">感受比朗定制的独特魅力</p>
        <div class="teshu">
          <p class="text3"> “做工精美，优质布料，服务态度超棒！”</p> 
        </div>
      </div>
      <div class="layout2">
        <img src="../assets/images/h5页面2/h5页面_6_03.png">
        <img src="../assets/images/h5页面2/h5页面_6_03.png">
        <img src="../assets/images/h5页面2/h5页面x2_05.png">
      </div>
      <p class="text4">产品图</p>
      <div class="layout2">
        <img src="../assets/images/h5页面2/h5页面_3_03.png">
        <img src="../assets/images/h5页面2/h5页面_4_03.png">
        <img src="../assets/images/h5页面2/h5页面_5_03.png">
        <img src="../assets/images/h5页面2/h5页面2_03.png">
      </div>
      <p class="text4">用户晒图</p>
      <p class="end-text">●恭喜您获得200元现金体验卷</p>
      <img class="end-img" src="../assets/images/h5页面3/h5页面x3_04.png" @click="$router.push('/h5page4')">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'h5page3',
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
.setting{
  width:7.5rem;
  height:12.06rem;
  background:url(../assets/images/h5页面6/h5页面x6_03.png) no-repeat;
  background-size: cover;
  position: relative;
}
.layout{
  text-align: right;
}
.pic1{
  width:1.3rem;
  height:1.3rem;
  position: relative;
  top: 0.25rem;
  right: 0.35rem;
}
.text1{
  height:0.5rem;
  line-height:0.5rem ;
  font-size:0.24rem;
  font-family: HiraginoSansGB;
  font-weight: bold;
  color: #EEEEEE;
  letter-spacing: 0.08rem;
  position: relative;
  right: 0.35rem;
}
.text2{
  height:0.6rem;
  font-size:0.24rem;
  font-family: HiraginoSansGB;
  font-weight: normal;
  color: #EEEEEE;
  letter-spacing: 0.08rem;
  position: relative;
  right: 0.35rem;
}
.teshu{
  width: 7.5rem;
  height:1.2rem;
}
.text3{
  width: 4rem;
  font-size: 0.22rem;
  font-family: HiraginoSansGB;
  font-weight: bold;
  color: #FFFFFF;
  letter-spacing: 0.08rem;
  position: relative;
  right: 0.35rem;
  float: right;
}
.layout2{
  width: 7.1rem;
  height: 1.5rem;
  margin-left: 0.4rem;
}
.layout2 img{
  width: 1.5rem;
  height: 1.5rem;
}
.text4{
  height: 0.7rem;
  font-size:0.22rem;
  font-family: HiraginoSansGB;
  font-weight: normal;
  color: #FFFFFF;
  letter-spacing: 0.08rem;
  line-height: 0.7rem;
  margin-left: 0.4rem;
}
.end-text{
  font-size:0.2rem;
  font-family: HiraginoSansGB;
  font-weight: normal;
  color: #FFFFFF;
  position: absolute;
  left: 0.4rem;
  bottom: 0.45rem;
  letter-spacing: 0.03rem;
}
.end-img{
  width: 2.87rem;
  height: 2.25rem;
  position: absolute;
  right: 0rem;
  bottom: 0rem;
}
</style>
