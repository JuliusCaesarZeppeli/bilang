<template>
<!-- 粉笔订单 -->
  <div id="body">
    <!-- 导航 -->
    <div class="document_nav">
      <p>
        <span>〈</span>
        <span>返回</span>
      </p>
      <p>粉笔订单</p>
      <p>● ● ●</p>
    </div>
    <!-- 插件导航 -->
    <van-tabs v-model:active="activeName" class="activeName">
      <van-tab title="一级粉笔" name="a" class='activeName_text'> 
        <div class='content'>
          <p>1</p>
          <p><img src='../assets/images/个人信息/个人信息(绑定手机）狮子_03.png'></p>
          <div class="content_right">
            <p>
              <span>昵称:</span>
              <span>董大伟</span>
            </p>
            <p>
              <span>消费金额:</span>
              <span>￥110000</span>
            </p>
          </div>
        </div>
        <div class='content'>
          <p>2</p>
          <p><img src='../assets/images/个人信息/个人信息(绑定手机）狮子_03.png'></p>
          <div class="content_right">
            <p>
              <span>昵称:</span>
              <span>董大伟</span>
            </p>
            <p>
              <span>消费金额:</span>
              <span>￥110000</span>
            </p>
          </div>
        </div>
        <div class='content'>
          <p>3</p>
          <p><img src='../assets/images/个人信息/个人信息(绑定手机）狮子_03.png'></p>
          <div class="content_right">
            <p>
              <span>昵称:</span>
              <span>董大伟</span>
            </p>
            <p>
              <span>消费金额:</span>
              <span>￥110000</span>
            </p>
          </div>
        </div>
      </van-tab>
      <van-tab title="一级粉笔" name="b" class='activeName_text'> 
        <div class='content'>
          <p>1</p>
          <p><img src='../assets/images/个人信息/个人信息(绑定手机）狮子_03.png'></p>
          <div class="content_right">
            <p>
              <span>昵称:</span>
              <span>董大伟</span>
            </p>
            <p>
              <span>消费金额:</span>
              <span>￥110000</span>
            </p>
          </div>
        </div>
        <div class='content'>
          <p>2</p>
          <p><img src='../assets/images/个人信息/个人信息(绑定手机）狮子_03.png'></p>
          <div class="content_right">
            <p>
              <span>昵称:</span>
              <span>董大伟</span>
            </p>
            <p>
              <span>消费金额:</span>
              <span>￥110000</span>
            </p>
          </div>
        </div>
        <div class='content'>
          <p>3</p>
          <p><img src='../assets/images/个人信息/个人信息(绑定手机）狮子_03.png'></p>
          <div class="content_right">
            <p>
              <span>昵称:</span>
              <span>董大伟</span>
            </p>
            <p>
              <span>消费金额:</span>
              <span>￥110000</span>
            </p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>  
</template>
<script>
export default {
  name:'ChalkOrder',
  data() {
    return {
      activeName: 'a',
    };
  },
}
</script>
<style scoped>
*{margin:0;padding:0;}
#body{background:#E1E1E1;}
.document_nav{display:flex;align-items:center;color:white;font-size:.34rem;width:100%;height:1rem;background:black;justify-content:space-between;margin-bottom:.2rem;padding-right:.1rem;box-sizing:border-box;}
.content{display:flex;align-items:center;padding:0 .7rem 0 .7rem;background:white;width:100%;height:1.6rem;border-bottom:1px solid #E1E1E1;box-sizing:border-box;}
.activeName_text{padding-top:.3rem;box-sizing:border-box;}
.content>p{font-size:.3rem;height:100%;display:flex;align-items:center;margin-left:.3rem;color:#999999;}
.content>p>img{width:1rem;height:1rem;}
.content>p:nth-of-type(1){font-size:.3rem;}
.content_right{height:100%;width:100%;}
.content_right>p{height:50%;font-size:.24rem;display:flex;justify-content:space-between;padding-left:.5rem;color:#999999;box-sizing:border-box;}
.content_right>p:nth-of-type(1){line-height:1.2rem;}
.content_right>p:nth-of-type(2){line-height:.5rem;}
.content_right>p:nth-of-type(1)>span:nth-of-type(2){color:#333333;}
.content_right>p:nth-of-type(2)>span:nth-of-type(2){color:#234497}
</style>