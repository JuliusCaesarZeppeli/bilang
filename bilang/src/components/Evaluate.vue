<template>
  <div>
      <van-nav-bar class="nav"
  title="评价"
  left-text="返回"
  right-text="●●●"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>

    <van-row type="flex" justify="space-around" class="eva_top">
  <van-col span="6" class="eva_top_img"><img  src="../assets/images/结算/pic_1.png"></van-col>
  <van-col span="6" class="eva_top_p">
    <p class="eva_top_p_one">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
    <p class="eva_top_p_two">¥ 2000.00</p>
  </van-col>
  <van-col span="6" class="eva_top_word">
    <p>×1</p>
  </van-col>
    </van-row>  

    <textarea rows="15" cols="12" placeholder="请说说您的评价">
		</textarea>
      <van-uploader v-model="fileList" multiple class="eva_center_wj"/>


    <div class="eva_bottom"> 
          <p>给商品评价</p>
          <div class="eva_bottom_e">
          <span>产品质量</span><van-rate class="eva_bottom_e_value" v-model="value" />
          </div>
          <div class="eva_bottom_e">
          <span>服务态度</span><van-rate class="eva_bottom_e_value" v-model="valuee" />
          </div>
          <div class="eva_bottom_e">
          <span>尺寸合适</span><van-rate class="eva_bottom_e_value" v-model="valueu" />
          </div>
    </div>
    <!-- //class="eva_buttom" -->
    
    <van-button type="primary" text="提交" @click="show = true"  class="tj"/>
   <van-overlay :show="show" @click="show = false">
    <div class="wrapper" @click.stop>
        <div @click="hideOver" class="block">
          <img class="block_img" src="../assets/images/评价&评价点击分享/icon_01.png" alt="">
          <div class="block_one"></div>
             <p>  感谢您的体验和评价，立即分享至微信朋友圈，即可成为比朗代言人，推荐好友成功消费，可获代言费现金奖励。</p>   
        <div class="block_bottom_left">
          <div class="left_en">
          <img src="../assets/images/评价&评价点击分享/icon_03.png" alt="">
          </div>
          <div class="left_on">
          <span>转发给朋友</span>
          </div>
          
        </div>
        
                <div class="block_bottom_right">
          <div class="right_en">
          <img src="../assets/images/评价&评价点击分享/icon_04.png" alt="">
          </div>
          <div class="right_on">
          <span>转发给朋友</span>
          </div>
          
        </div>
        </div>
    </div>
  </van-overlay>
    
    


  </div>
</template>
<script>
export default {
  data() {
    return {
      show:false,
       value: 3,
       valuee:0,
       valueu:0,
      fileList: [
        { url: '/assets/images/结算/icon_1.png' },
        { url: '../assets/images/结算/icon.png' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: '../assets/images/结算/pic_1.png', isImage: true },
      ],
    };
  },
 methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$toast('按钮');
    },
    hideOver() {
      this.show = false;
    }
  },
}
</script>
<style scoped>
body{
  background: #f3f4f6;
}
.eva_top{
  width: 100%;
  height: 1.8rem;
  background:#fff;
  box-sizing: border-box;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}
.eva_top_img img{
  width:60%;
  margin: 0.15rem 0.25rem auto;
}
.eva_top_p{
  width: 4rem;
}
.eva_top_p_one{
  font-size: 0.2rem;
}
.eva_top_p_two{
  font-size: 0.3rem;
  margin-top: 0.2rem;
}
.eva_top_word p{
  font-size: 0.35rem;
  margin-left: 1.3rem;
}
textarea{
  resize:none;
	border:0.01rem;
	outline:none;
  font-size: 0.2rem;
  width: 100%;
  padding-left: 0.3rem;
  box-sizing: border-box;
}
.eva_center_wj{
  position: absolute;
  left: 0;
  top: 5.91rem;
}
.eva_bottom{
  width:100%;
  height:4rem;
  background: #fff;
  box-sizing: border-box;
}
.eva_bottom p{
  margin-left: 0.3rem;
  font-size: 0.5rem;
  padding-top:0.3rem;
}
.eva_bottom span{
  font-size: 0.35rem;
  margin-left: 0.3rem;
}
.eva_bottom_e{
  width:100%;
  height:0.8rem;
}
.eva_bottom_e_value{
  color: red;
  margin-left: 0.5rem;
}
.eva_buttom{
  width: 90%;
  height: 1rem;
  background: #234497;
  margin-left: 0.35rem;
}
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
.block {
    width: 6rem;
    height: 4rem;
    background-color: #fff;
}
.block p{
  margin-top: 1.5rem;
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  color: #333333;
  font-size: 0.3rem;
}
.block_img{
  width: 60%;
  position: absolute;
  top: 3.8rem;
  left: 1.5rem;
}
.block_one{
  width: 6rem;
  height: 1rem;
  background: #E6E6E6;
  position: absolute;
  top: 4.7rem;
}
.block_bottom_left{
  width: 2.2rem;
  height: 1rem;
  background: #fff;
  position: absolute;
  top: 9rem;
  border-radius: 0.2rem;
}
.block_bottom_left img{
  width: 0.4rem;
  margin-left: 0.3rem;
  position: absolute;
  top: 0.3rem;
}
.left_en{
  width: 30%;
  float: left;
}
.left_on{
  width: 60%;
  height: 0.6rem;
  margin-top: 0.3rem;
  float: right;
  font-size: 0.2rem;
}
.block_bottom_right{
  width: 2.2rem;
  height: 1rem;
  background: #fff;
  position: absolute;
  top: 9rem;
  right: 10%;
  border-radius: 0.2rem;
}
.block_bottom_right img{
  width: 0.4rem;
  margin-left: 0.3rem;
  position: absolute;
  top: 0.3rem;
}
.right_on{
  width: 60%;
  height: 0.6rem;
  margin-top: 0.3rem;
  float: right;
  font-size: 0.2rem;
}
.tj{
  width:90%;
  background: #234497;
  margin-left: 0.4rem;
  }
</style>