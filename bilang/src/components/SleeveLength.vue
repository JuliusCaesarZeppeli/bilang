<template>
<div id='body'>
  <!-- 导航 -->
  <div class="document_nav">
    <p @click="back">
      <span>〈</span>
      <span>返回</span>
    </p>
    <p>开始测量</p>
    <p>● ● ●</p>
  </div>
  <!-- 图片 -->
  <div class='content_img'>
    <img src="../assets/images/测量尺寸-袖长/测量尺寸-袖长_03.png" alt="">
  </div>
  <!-- 文本 -->
  <div class='content_text'>
    <p>测量方法</p>
    <p>将卷尺放到颌骨上方和胸腔下部中间的地方紧贴皮肤但是不要勒紧。在呼气的状态去测量值，精确到0.1mm。</p>
  </div>
  <!-- 测量尺寸 -->
  <div class="content_die">
    <p>添加袖长</p>
    <p>
      <span>0.0</span>
      <span>cm</span>
    </p>
    <p>
      <img src="../assets/images/我的尺寸/ft_pic_2.png" alt="">
      <img src="../assets/images/我的尺寸/ft_pic.png" alt="">
    </p>
    <!-- 下一步箭头 -->
    <div class='die_right'>
      <p @click="$router.push('/Length')">
        <span>下一步</span>
        <img src="../assets/images/限时特惠/icon.png" alt="">
      </p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
*{margin:0;padding:0;}
#body{background:cdcbcb;}
/* img{width:100%;height:100%;} */
.document_nav{display:flex;align-items:center;color:white;font-size:.34rem;width:100%;height:1rem;background:black;justify-content:space-between;padding-right:.1rem;box-sizing:border-box;}
.content_img{width:100%;margin-bottom:.5rem;height:6rem;display:flex;align-items:center;justify-content:center;}
.content_img>img{width:80%;height:80%;}
.content_text{width:100%;padding:0 .2rem 0 .2rem;box-sizing:border-box;font-size:.28rem;color:#d0cccc;margin-bottom:.7rem;}
.content_text>p:nth-of-type(1){text-align:center;font-size:.3rem;margin-bottom:.2rem;}
.content_text>p:nth-of-type(2){letter-spacing:.004rem;padding:0 .11rem 0 .11rem;box-sizing:border-box;}
.content_die{position:relative;overflow:hidden;width:100%;height:4.2rem;background:url(../assets/images/我的尺寸/footer.png);background-size:100% 100%;font-size:.3rem;padding-top:.3rem;box-sizing:border-box;}
.content_die>p{text-align:center;}
.content_die>p:nth-of-type(1){text-align:center;margin-bottom:.8rem;}
.content_die>p:nth-of-type(2)>span:nth-of-type(1){font-size:.6rem;font-weight:bolder;margin-left:.4rem;}
.content_die>p:nth-of-type(2)>span:nth-of-type(2){font-size:.24rem;font-weight:bolder;}
.content_die>p:nth-of-type(2){margin-bottom:.6rem;}
.content_die>p:nth-of-type(3){position:relative;}
.content_die>p:nth-of-type(3)>img:nth-of-type(2){width:.3rem;height:1.47rem;position:absolute;left:3.58rem;top:-.1rem;}
.die_right{width:40%;height:70%;position:absolute;right:0;top:0;display:flex;justify-content:center;align-items:center;font-size:.24rem;color:blue;}
.die_right>p{width:40%;height:.3rem;display:flex;align-items:center;margin:0 auto;}
.die_right>p>span{margin-right:.1rem;}
.die_right img{width:.32rem;height:.27rem;}
</style>