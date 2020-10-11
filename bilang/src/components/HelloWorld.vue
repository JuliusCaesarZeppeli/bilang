<template>
  <div class="share">
    <!-- 导航栏 -->
    <van-nav-bar
    class="nav"
    title="我的订单"
    left-text="返回"
    right-text="●●●"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  name: 'Share',
  data (){
    return {
      
    }
  }, 
  methods: {
    onClickLeft() {
      this.$toast('返回');
    },
    onClickRight() {
      this.$toast('按钮');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  background: #000;
}
</style>
