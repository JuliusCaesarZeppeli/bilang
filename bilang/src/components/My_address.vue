// 我的地址 张瑄睿作，转载必究
<template>
  <div class="bg">
    <!-- 标题 -->
    <van-nav-bar
      title="我的地址"
      left-text="返回"
      right-text="●●●"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="piece_" @click="$router.push('/Reset_address')">
      <div class="piece_left">
        <div class="top">
          <span>李先生</span>
          <span>13423433424</span>
        </div>
        <div class="bottom">广东省佛山市禅城区印象购物中心5号楼b-101122 1902室</div>
      </div>
      <div class="icon">默认</div>
    </div>
    <div class="piece_" @click="$router.push('/Reset_address')">
      <div class="piece_left">
        <div class="top">
          <span>李先生</span>
          <span>13423433424</span>
        </div>
        <div class="bottom">广东省佛山市禅城区印象购物中心5号楼b-101122 1902室</div>
      </div>
    </div>
    <div class="btn" @click="$router.push({name:'Add_address'})">
      <button>添加新地址</button>
    </div>
  </div>
</template>
<script>
export default {
  name:"My_address",
  data(){
    return {

    }
  },
  methods: {
  onClickLeft() {
    this.$router.go(-1);
  },
  onClickRight() {
    this.$toast('按钮');
  },
  },
}
</script>
<style scoped>
 .bg{
   background: #eeeeee;
   height: 13.35rem;
 }
 .piece_{
   width: 7.5rem;
   height: 1.66rem;
   background: #fff;
   margin: 0.27rem auto 0.11rem;
   display: flex;
   justify-content:space-between;
   align-items:center;
   padding-right: 0.28rem;
   padding-left: 0.45rem;
   box-sizing: border-box;
 }
.btn{
  text-align: center;
  margin-top: 0.2rem;
}
.btn>button{
  width: 6.9rem;
  height:1.01rem;
  font-size: 0.3rem;
  border: none;
  background: #234497;
  color: #fff;
  border-radius: 4px;
}
.icon{
  width: 0.62rem;
  height: 0.62rem;
  background: #ffa1a1;
  border: 0.01rem solid #ff4242;
  border-radius: 50%;
  color:#fff;
  font-size: 0.2rem;
  text-align: center;
  line-height: 0.62rem;
}
.top{
  font-size: 0.3rem;
}
.top>span:nth-child(2){
  margin-left: 0.21rem;
}
.bottom{
  width: 5.58rem;
  height: 0.51rem;
  font-size:0.24rem;
  color: #666666;
  margin-top: 0.19rem;
}
</style>