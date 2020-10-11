<template>
  <div>
      <van-nav-bar
  title="个人信息"
  left-text="返回"
  right-text="●●●"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<!-- 个人信息 -->
<div class="center">
  <ul>
    <li><span>头像</span><img class="center_one" src="../assets/images/个人信息/个人信息(绑定手机）狮子_03.png"><img class="center_one_one" src="../assets/images/个人信息/个人信息(绑定手机）_03.png"></li>
    <hr>
    <li><span>昵称:</span></li>
    <hr>
    <li><span>性别</span></li>
    <hr>
    <li><span>生日:</span></li>
    <hr>
    <li><span>地区</span><img class="center_cen" src="../assets/images/个人信息/个人信息_11.png"></li>
    <hr>
    <li><span>手机:</span><span class="word_O">159*******2011</span></li>
    <hr>
    <li><span>身高(cm):</span></li>
    <hr>
    <li><span>体重(kg):</span></li>
  </ul>
</div>
<div class="center_bottom">
<span class="center_bottom_oen">保存</span>
</div>
  </div>
</template>
<script>
export default {
  name:'Message',
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$Toast('按钮');
    },
  },
}
</script>
<style scoped>
.center{
  width:90%;
  height:9.53rem;
  float:right;
  /* background:red; */
  margin-top:0.2rem;
}
.center span{
  font-size:0.3rem;
}
.center_one_one{
  width:5%;
  float:right;
  margin-top:0.2rem;
  display:inline-block;
}
.center_one{
  width:10%;
  float: right;
  margin-top:0.2rem;
  display:inline-block;
  margin-right:0.5rem;

}
.center_cen{
  width:0.5rem;
  float:right;
  margin-right: 0.34rem;
  margin-top:0.25rem;
}
.word_O{
  width:2.2rem;
  float:right;
  margin-top:0.5rem;
}
.center_bottom{
  width:6.9rem;
  height:1.01rem;
  background:#234497;
  border-radius: 2px;
  position:absolute;
  bottom:5%;
  margin-left:0.25rem;
}
.center_bottom_oen{
  color:#fff;
  font-size:0.3rem;
  position:absolute;
  bottom:30%;
  margin-left:3rem;
}
</style>