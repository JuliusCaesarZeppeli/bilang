<template>
  <div class="hello">
    <van-nav-bar
      title="碧浪"
      left-text="返回"
      right-text="●●●"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="underpainting"
    />
    <div class="chunk">
      <div class="chunk1">
        <img src="../assets/images/测量尺寸/测量尺寸（无）_03.png">
        <p>领围</p>
        <p class="gang">180<span>cm</span></p>
      </div>
      <div class="chunk1">
        <img src="../assets/images/测量尺寸/测量尺寸（无）_05.png">
        <p>胸围</p>
        <p class="gang">180<span>cm</span></p>
      </div>
      <div class="chunk1">
        <img src="../assets/images/测量尺寸/测量尺寸（无）_07.png">
        <p>腰围</p>
        <p class="gang">180<span>cm</span></p>
      </div>
    </div>
    <div class="chunk">
      <div class="chunk1">
        <img src="../assets/images/测量尺寸/测量尺寸（无）_12.png">
        <p>肩宽</p>
        <p class="gang">180<span>cm</span></p>
      </div>
      <div class="chunk1">
        <img src="../assets/images/测量尺寸/测量尺寸（无）_13.png">
        <p>袖长</p>
        <p class="gang">180<span>cm</span></p>
      </div>
      <div class="chunk1">
        <img src="../assets/images/测量尺寸/测量尺寸（无）_18.png">
        <p>衣长</p>
        <p class="gang">180<span>cm</span></p>
      </div>
    </div>
    <div class="chunk">
      <div class="chunk1">
        <img src="../assets/images/测量尺寸/测量尺寸（无）_23.png">
        <p>袖肥</p>
        <p class="gang">180<span>cm</span></p>
      </div>
      <div class="chunk1">
        <img src="../assets/images/测量尺寸/测量尺寸（无）_25.png">
        <p>袖口</p>
        <p class="gang">180<span>cm</span></p>
      </div>
      <div class="chunk1">
        
      </div>
    </div>
    <div class="enter">
      <button @click="$router.push('/Measurementsnull')">重新测量</button>
      <button>确定尺寸</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Measurements',
    data () {
      return {
      }
    },
    methods: {
        onClickLeft () {
          this.$router.go(-1);
        },
        onClickRight () {
          this.$toast('按钮')
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin:0;
  padding:0;
}
.underpainting{
  background-color: black;
}
.chunk{
  width: 7.5rem;
  height: 3.6rem;
  display: flex;
  justify-content: space-around;
}
.chunk1{
  width: 1.6rem;
  height: 3.6rem;
  text-align: center;
}
.chunk1 img{
  width: 1.2rem;
  height: 1.2rem;
  margin-top:0.8rem;
}
.chunk1 p:nth-of-type(1){
  font-size: 0.33rem;
  font-family: STXihei;
  font-weight: 400;
  color: #000000;
}
.chunk1 p:nth-of-type(2){
  margin-top: 0.2rem;
  font-size: 0.5rem;
  font-family: STXihei;
  font-weight: 400;
  color:#244598;
}
.enter{
  width: 7.5rem;
  height: 1.6rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.enter button{
  width: 3.15rem;
  height: 0.91rem;
  border: 0.02rem solid #244498;
  border-radius: 0.1rem;
  font-size: 0.3rem;
  font-family: HiraginoSansGB;
  font-weight: normal;
  color: #244498;
  background-color: #ffffff;
}
</style>
