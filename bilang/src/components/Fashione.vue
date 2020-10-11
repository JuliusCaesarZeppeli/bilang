<template>
  <div>
     <van-nav-bar
  title="时装精选"
  left-text="返回"
  right-text="●●●"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<div class="center">
<div class="center_left">
  <img src="../assets/images/时尚精选/pic_01.png">
  <img src="../assets/images/时尚精选/pic_04.png">
  <img src="../assets/images/时尚精选/pic_03.png">
</div>
<div class="center_right">
  <img src="../assets/images/时尚精选/banner.png">
  <img src="../assets/images/时尚精选/pic_02.png">
  <img src="../assets/images/时尚精选/pic_04.png">
  <img src="../assets/images/时尚精选/pic_02.png">
</div>
</div>
  </div>
</template>
<script>
export default {
  name:'Exchange',
   methods: {
    onClickLeft() {
      this.$toast('返回');
    },
    onClickRight() {
      this.$toast('按钮');
    },
}
}
</script>
<style scoped>
.center{
  width: 90%;
  height:14rem;
  margin:0 auto;
  margin-top:0.2rem;
}
.center_left{
  width:49%;
  height:14rem;
  float:left;
}
.center_left img{
  width:100%;
}
.center_right{
  width:49%;
  height:14rem;
  float:right;
}
.center_right img{
  width:100%;
}
</style>