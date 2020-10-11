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
    <img src="../assets/images/测量尺寸-袖肥/测量尺寸-袖肥_03.png" alt="">
  </div>
  <!-- 文本 -->
  <div class='content_text'>
    <p>测量方法</p>
    <p>将卷尺放到颌骨上方和胸腔下部中间的地方紧贴皮肤但是不要勒紧。在呼气的状态去测量值，精确到0.1mm。</p>
  </div>
  <!-- 测量尺寸 -->
  <div class="content_die">
    <p class='content_die_one_p'>
      <span>添加袖肥</span>
      <span>(选填)</span>
    </p>
    <p>
      <span @click="show_">点击获取</span>
    </p>
    <p>
      <img src="../assets/images/我的尺寸/ft_pic_2.png" alt="">
      <img src="../assets/images/我的尺寸/ft_pic.png" alt="">
    </p>
    <!-- 下一步箭头 -->
    <div class='die_right'>
      <p>
        <span>下一步</span>
        <img src="../assets/images/限时特惠/icon.png" alt="">
      </p>
    </div>
  </div>
  <!-- 弹窗 -->
  <van-overlay :show="show">
    <div class="wrapper" @click='stop'>
      <van-picker title="标题" :columns="columns" @confirm="onConfirm" @cancel="onCancel" @change="onChange" class='block'>
      </van-picker>
      <!-- 导航 -->
      <div class='block_nav'>
        <p @click="$router.push('/Cuff')">
          <span>添加袖肥</span>
          <span>(选填)</span>
        </p>
        <p>确认</p>
      </div>
    </div>
  </van-overlay>
</div>
</template>
<script>
export default {
  name:'SleeveFat',
  data(){
    return{
      columns: ['130cm','140cm','150cm', '160cm', '170cm', '180cm', '190cm', '200cm'],
      show:false
    }
  },
  methods:{
    onConfirm(value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`);
    },
    onChange(value, index) {
      this.$toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      this.$toast('取消');
    },
    show_(){
      this.show=!this.show;
    },stop(){
      this.show=!this.show; 
    },
    back(){
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
*{margin:0;padding:0;}
.document_nav{display:flex;align-items:center;color:white;font-size:.34rem;width:100%;height:1rem;background:black;justify-content:space-between;padding-right:.1rem;box-sizing:border-box;}
.content_img{width:100%;margin-bottom:.5rem;height:6rem;display:flex;align-items:center;justify-content:center;}
.content_img>img{width:80%;height:80%;}
.content_text{width:100%;padding:0 .2rem 0 .2rem;box-sizing:border-box;font-size:.28rem;color:#d0cccc;margin-bottom:.7rem;}
.content_text>p:nth-of-type(1){text-align:center;font-size:.3rem;margin-bottom:.2rem;}
.content_text>p:nth-of-type(2){letter-spacing:.004rem;padding:0 .11rem 0 .11rem;box-sizing:border-box;}
.content_die{position:relative;overflow:hidden;width:100%;height:4.2rem;background:url(../assets/images/我的尺寸/footer.png);background-size:100% 100%;font-size:.3rem;padding-top:.3rem;box-sizing:border-box;}
.content_die>p{text-align:center;}
.content_die_one_p{text-align:center;margin-bottom:.2rem;}
.content_die_one_p>span:nth-of-type(2){color:grey;font-size:.24rem;}
.content_die_one_p>span:nth-of-type(1){margin:0 .05rem 0 .2rem;}
.content_die>p:nth-of-type(2)>span:nth-of-type(1){width:1.5rem;height:1.5rem;border-radius:50%;font-size:.24rem;font-weight:bolder;display:flex;justify-content:center;align-items:center;color:burlywood;background:white;margin:0 auto;}
.content_die>p:nth-of-type(2){margin-bottom:.3rem;}
.content_die>p:nth-of-type(3){position:relative;}
.content_die>p:nth-of-type(3)>img:nth-of-type(2){width:.3rem;height:1.47rem;position:absolute;left:3.58rem;top:-.1rem;}
.die_right{width:40%;height:70%;position:absolute;right:0;top:0;display:flex;justify-content:center;align-items:center;font-size:.24rem;color:blue;}
.die_right>p{width:40%;height:.3rem;display:flex;align-items:center;margin:0 auto;}
.die_right>p>span{margin-right:.1rem;}
.die_right img{width:.32rem;height:.27rem;}
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .block {
    width: 6.6rem;
    height: 6.2rem;
    background-color: #fff;
    position:absolute;
  }
  .block_nav{width:6.6rem;height:1.1rem;position:relative;background:#CBCBCB;top:-.6rem;border-radius:.1rem .1rem 0 0;font-size:.34rem;display:flex;justify-content:space-between;align-items:center;padding:0 .1rem 0 .1rem;box-sizing:border-box;top:-3.6rem;}
  .block_nav>p{display:flex;align-items:center;}
  .block_nav>p>span:nth-of-type(2){font-size:.26rem;color:coral;margin-left:.2rem;}
</style>