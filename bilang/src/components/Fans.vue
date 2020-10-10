<template>
<!-- 我的粉丝 -->
  <div class="fans">
    <!-- 导航栏 -->
    <van-nav-bar
    class="nav"
    title="我的粉丝"
    left-text="返回"
    right-text="●●●"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    />
    
  <!-- main -->
    
    <van-tabs v-model="active">
    <van-tab title="一级粉丝">
      <div class="fan">
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
      </div>
      <div class="fan">
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
      </div>
    </van-tab>
    <van-tab title="二级粉丝">
      <div class="fan">
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
      </div>
      <div class="fan">
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
        <div class="fans_list">
          <div class="head_pic">
            <img src="../assets/images/我的粉丝&我的代言费/fans.png" />
          </div>
          <p class="name">董大伟</p>
        </div>
      </div>
    </van-tab>
    </van-tabs>
  </div>
  
  
</template>

<script>
export default {
  name: 'Fans',
  data (){
    return {
      active: 2,
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
.fan{
  width: 100%;
  height: 2.3rem;
  background: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.fans_list{
  width: 1.1rem;
  height:2.2rem;
}
.head_pic{
  margin-top: 0.5rem;
  width: 1.06rem;
  height: 1.06rem;
}
.head_pic>img{
  width: 1.06rem;
  height: 1.06rem;
}
.name{
  margin-top: 0.1rem;
  font-size: 0.24rem;
  text-align: center;
}
</style>
