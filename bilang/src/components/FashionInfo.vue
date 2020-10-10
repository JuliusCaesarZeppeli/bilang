<template>
  <div id='body'>
    <!-- 导航 -->
    <div class="document_nav">
      <p>
        <span>〈</span>
        <span>返回</span>
      </p>
      <p>潮流资讯</p>
      <p>● ● ●</p>
    </div>
    <!-- 内容图片 -->
    <div class='images'>
      <img src="../assets/images/潮流资讯/潮流_02.png" alt="">
    </div>
    <div class='images'>
      <img src="../assets/images/潮流资讯/潮流_04.png" alt="">
    </div>
    <div class='images'>
      <img src="../assets/images/潮流资讯/潮流_05_06.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
*{margin:0;padding:0;}
img{width:100%;height:100%;}
#body{}
.document_nav{display:flex;align-items:center;color:white;font-size:.34rem;width:100%;height:1rem;background:black;justify-content:space-between;padding-right:.1rem;box-sizing:border-box;}
.images{width:100%;height:3.3rem;margin-bottom:.2rem;}
</style>