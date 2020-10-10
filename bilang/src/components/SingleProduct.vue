<template>
<!-- 单品图文信息 -->
  <div id='body'>
    <div class="document_nav">
      <p>
        <span>〈</span>
        <span>返回</span>
      </p>
      <p>悠闲型男灰色衬衫</p>
      <p>● ● ●</p>
    </div>
    <div class='document_Carousel'>
      <img src="../assets/images/首页/index_04.png">
    </div>
    <div class='Evaluation'>
      <p>
        <span>商品评价</span>
        <span>(200)</span>
      </p>
    </div>
    <div class='content_nav dis_padd'>
      <img src="../assets/images/个人信息/个人信息(绑定手机）狮子_03.png">
      <span>董大伟</span>
    </div>
    <div class='evaluation dis_padd '>
      <span>产品不错，衣服尺寸很适合，下次还会再来！</span>
    </div>
    <div class='content_img dis_padd '>
      <img src="../assets/images/h5页面2/h5页面_6_03.png">
      <img src="../assets/images/h5页面2/h5页面_4_03.png">
      <img src="../assets/images/h5页面2/h5页面_5_03.png">
    </div>
    <div class='productQuality dis_padd '>
      <P>
        <span>产品质量</span>
        <van-rate
          v-model="value"
          :size="5"
          color='blue'
          void-icon="star"
          void-color=""
          name='1'
        />
      </P>
      <P>
        <span>服务态度</span>
        <van-rate
          v-model="value"
          :size="5"
          color='blue'
          void-icon="star"
          void-color=""
          name='2'
        />
      </P>
      <P>
        <span>尺寸合适</span>
        <van-rate
          v-model="value"
          :size="5"
          color='blue'
          void-icon="star"
          void-color=""
          name='3'
        />
      </P>
    </div>
    <div class='content_nav dis_padd'>
      <img src="../assets/images/个人信息/个人信息(绑定手机）狮子_03.png">
      <span>董大伟</span>
    </div>
    <div class='evaluation dis_padd '>
      <span>产品不错，衣服尺寸很适合，下次还会再来！</span>
    </div>
    <div class='productQuality dis_padd '>
      <P>
        <span>产品质量</span>
        <van-rate
          v-model="value"
          :size="5"
          color='blue'
          void-icon="star"
          void-color=""
          name='4'
        />
      </P>
      <P>
        <span>服务态度</span>
        <van-rate
          v-model="value"
          :size="5"
          color='blue'
          void-icon="star"
          void-color=""
          name='5'
        />
      </P>
      <P>
        <span>尺寸合适</span>
        <van-rate
          v-model="value"
          :size="5"
          color='blue'
          void-icon="star"
          void-color=""
          name='6'
        />
      </P>
    </div>
    <div class='View dis_padd'>
      <p>查看全部评价</p>
    </div>
    <div class='Article'></div>
    <div class='log'>
      <p>
        <span>面料解析</span>
        <span>/</span>
        <span>fabnic</span>
        <span></span>
      </p>
    </div>
    <div class='images'>
      <p><img src="../assets/images/单品-图文信息/单品－图文信息_02.png"></p>
    </div>
    <div class='content_die'></div>
    <!-- 品质分析 -->
    <div class='QualityDetails'>
      <span>品质细节</span>
      <span>DFTALS</span>
    </div>
    <div class='Article'></div>
    <!-- 最后 -->
    <div class='content_die_bottom'>
      <p>悠闲型男灰色衬衫</p>
      <p>Sportsman leisure suit</p>
      <p>¥ 899.00</p>
    </div>
    <!-- 购物车 -->
    <div class='shoppingCart'>
      <img src="../assets/images/单品/单品_03.png">
    </div>
    <!-- 三道杠 -->
    <div class='ThreeBars'>
      <img src="../assets/images/首页/button.png">
    </div>
  </div>
</template>
<script>
export default {
  name:'SingleProduct',
  data(){
    return{
      value:0,
    }
  }
}
</script>
<style scoped>
*{margin:0;padding:0;}
img{width:100%;height:100%;}
#body{position:relative;}
.dis_padd{padding:0 .15rem 0 .15rem;font-size:.24rem;box-sizing:border-box;}
.document_nav{display:flex;align-items:center;color:white;font-size:.34rem;width:100%;height:1rem;background:black;justify-content:space-between;padding-right:.1rem;box-sizing:border-box;}
.document_Carousel{width:100%;}
.Evaluation{font-size:.3rem;padding:0 .15rem 0 .15rem;box-sizing:border-box;margin-bottom:.3rem;box-sizing:border-box;}
.Evaluation>p>span:nth-of-type(2){color:#999999;}
.content_nav{width:100%;height:.6rem;display:flex;align-items:center;margin-bottom:.3rem;}
.content_nav>img{width:.6rem;height:.6rem;}
.content_nav>span{color:#333333;margin-left:.3rem;}
.evaluation{font-size:.26rem;margin-bottom:.3rem;}
.content_img{display:flex;margin-bottom:.3rem;}
.content_img>img{width:1.1rem;height:1.1rem;margin-right:.15rem;}
.productQuality{width:100%;height:.5rem;display:flex;align-items:center;align-items:center;margin-bottom:.3rem;}
.productQuality>p{margin-right:.3rem;}
.productQuality img{width:.17rem;height:.18rem;}
.productQuality span{color:#999999;}
.View{width:2.07rem;height:.53rem;border:.01rem solid #C7C7C7;text-align:center;line-height:.53rem;margin:0 auto;color:red;margin:.8rem auto .3rem;border-radius:.15rem;}
.Article{width:100%;height:.2rem;background:#F3F3F5;}
.log{width:100%;height:.3rem;margin-bottom:.15rem;}
.log>p{font-size:.2rem;display:flex;align-items:center;}
.log>p>span:nth-of-type(1){font-weight:bolder;}
.log>p>span:nth-of-type(3){font-size:.15rem;margin-top:.03rem;}
.log>p>span:nth-of-type(4){width:77%;height:.01rem;border-top:.01rem solid #999999;margin-top:.03rem;}
.images{width:100%;height:3.8rem;}
.QualityDetails{width:100%;height:.5rem;background:Grey;display:flex;padding-left:.4rem;box-sizing:border-box;font-size:.2rem;line-height:.5rem;color:white;margin-bottom:.15rem;}
.QualityDetails>span{margin-right:.2rem;}
.content_die_bottom{font-size:.3rem;text-align:center;margin-bottom:.3rem;}
.content_die_bottom>p{margin:.15rem 0;}
.content_die_bottom>p:nth-of-type(2){font-size:.24rem;}
.content_die_bottom>p:nth-of-type(3){font-size:.34rem;color:#FF4141;font-weight:bolder;}
.shoppingCart{width:1.2rem;height:1.2rem;position:absolute;right:.48rem;bottom:1.5rem;}
.ThreeBars{width:1.2rem;height:1.2rem;position:fixed;top:1.3rem;left:0;}
</style>