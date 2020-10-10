<template>
  <div id = 'body'>
    <!-- 导航 -->
    <div class="document_nav">
      <p>
        <span>〈</span>
        <span>返回</span>
      </p>
      <p>悠闲型男灰色衬衫</p>
      <p>● ● ●</p>
    </div>
    <!-- 图片 -->
    <div class='images'>
      <img src="../assets/images/单品/单品_02.png" alt="">
      <img src="../assets/images/单品/单品_03.png" alt="">
    </div>
    <!-- 三道杠 -->
    <div class='ThreeBars'>
      <img src="../assets/images/首页/button.png">
    </div>
    <!-- 星星 -->
    <div class="star">
      <img src="../assets/images/单品/xing_03.png" alt="">
    </div>
    <!-- 底部文字 -->
    <div class='content_die'>
      <p>悠闲型男灰色衬衫</p>
      <p>Sportsman leisure suit</p>
      <p>¥ 899.00</p>
    </div>
  </div>  
</template>
<script>
export default {
  
}
</script>
<style scoped>
*{margin:0;padding:0;}
img{width:100%;}
#body{position:relative;}
.document_nav{display:flex;align-items:center;color:white;font-size:.34rem;width:100%;height:1rem;background:black;justify-content:space-between;padding-right:.1rem;box-sizing:border-box;}
.images{width:100%;height:10rem;position:relative;}
.images>img:nth-of-type(2){position:absolute;bottom:-.6rem;right:.6rem;width:1.2rem;height:1.2rem;}
.ThreeBars{width:1.3rem;height:1.3rem;position:fixed;top:1.1rem;left:0;}
.star{width:1.3rem;height:1.3rem;position:fixed;top:1.1rem;right:0;text-align:center;}
.star>img{width:.36rem;height:.36rem;}
.content_die{font-size:.3rem;text-align:Center;margin-top:.5rem;}
.content_die>p{margin-bottom:.2rem;color:#333333;}
.content_die>p:nth-of-type(2){font-size:.26rem;}
.content_die>p:nth-of-type(3){font-size:.4rem;color:red;font-weight:bolder;}
</style>