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
      <div class="end">
        <div class="end_li">
          <p>现金体验卷</p>
          <p>¥<span>300</span></p>
          <p>有效时间：2015-11-06至2015-11-17</p>
        </div>
        <button @click="$router.push('/h5page3')">点击领取<img src="../assets/images/我的尺寸/icon.png"></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'h5page2',
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
.end{
  width: 7.5rem;
  height: 3.5rem;
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  align-content: center;
}
.end button{
  width: 6.76rem;
  height: 0.6rem;
  font-size: 0.24rem;
  font-family: HiraginoSansGB;
  font-weight: normal;
  color: #666666;
}
.end button img{
  width: 0.28rem;
  height:0.28rem;
  float: right;
  margin-right: 0.3rem;;
}
.end_li{
  width: 6.76rem;
  height: 2.2rem;
  background:url(../assets/images/h5页面2/h5页面_1_03.png) no-repeat;
  background-size: cover;
}
.end_li p:nth-of-type(1){
  font-size: 0.22rem;
  font-family: HiraginoSansGB;
  font-weight: bold;
  color: #FFFFFF;
  text-align: right;
  position: relative;
  top: 0.2rem;
  right: 0.2rem;
}
.end_li p:nth-of-type(2){
  font-size: 0.6rem;
  font-family: Arial;
  font-weight: 900;
  color: #FFFFFF;
  text-align: center;
}
.end_li p:nth-of-type(2) span{
  font-size: 1rem;
}
.end_li p:nth-of-type(3){
  font-size: 0.22rem;
  font-family: HiraginoSansGB;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
}
</style>
