<template>
<!-- 个人信息 -->
<div id='body'> 
  <div class="document_nav">
    <p @click="back">
      <span>〈</span>
      <span>返回</span>
    </p>
    <p>个人信息</p>
    <p>● ● ●</p>
  </div>
   <div class="document_text">
    <!-- 头像 -->
    <div class="Avatar">
      <p>头像</p>
      <div>
        <p>
          <img src="../assets/images/个人信息/个人信息(绑定手机）狮子_03.png">
          <img src="../assets/images/个人信息/个人信息(绑定手机）_03.png">
        </p>
      </div>
    </div>
    <!-- 昵称 -->
    <div class="body nickname">
      <p>昵称:</p>
      <p>
        <input type="text" >
      </p>
    </div>
    <!-- 性别 -->
    <div class="body gender">
      <p>性别:</p>
      <p>
        <input type="text" placeholder='请输入性别'>
        <img src="../assets/images/个人信息\个人信息(绑定手机）_03.png">
      </p>
    </div>
    <!-- 生日 -->
    <div class="body birthday">
      <p>生日:</p>
      <p>
        <input type="text">
      </p>
    </div>
    <!-- 地区 -->
    <div class="body area">
      <p>地区:</p>
      <p>
        <input type="text">
        <img src="../assets/images/个人信息\个人信息_11.png">
      </p>
    </div>
    <!-- 手机 -->
    <div class="body CellPhone">
      <p>手机:</p>
      <p>
        <input type="text">
      </p>
    </div>
    <!-- 身高 -->
    <div class="body height">
      <p>身高(cm):</p>
      <p>
        <input type="text">
      </p>
    </div>
    <!-- 体重 -->
    <div class="body bodyWeight">
      <p>体重(kg):</p>
      <p>
        <input type="text">
      </p>
    </div>
  </div>
  <div class="die">
    <button>保存</button>
  </div>
</div>
</template>
<script>
export default {
  name:'PersonalInformation',
  data(){
    return{
    
    }
  },
  methods:{
    back(){
      this.$router.go(-1);
    }
  }
}
</script>
<style scoped>
*{margin:0;padding:0;}
#body{background:#E1E1E1;}
.document_nav{display:flex;align-items:center;color:white;font-size:.34rem;width:100%;height:1rem;background:black;justify-content:space-between;margin-bottom:.2rem;padding-right:.1rem;box-sizing:border-box;}
.document_text{width:100%;padding-left:.15rem;padding-right:.15rem;box-sizing:border-box;background:white;}
.Avatar{border-bottom:.005rem solid #E1E1E1;display:flex;justify-content:space-between;font-size:.26rem;color:#333333;}
.Avatar>p:nth-of-type(1){width:20%;height:1.5rem;display:flex;align-items:center;}
.Avatar>div:nth-of-type(1){width:80%;height:1.5rem;display:flex;align-items:center;padding-right:.5rem;}
.Avatar>div>p{width:1.3rem;display:flex;align-items:center;margin-left:auto;}
.Avatar img:nth-of-type(1){width:.8rem;height:.8rem;margin-right:.2rem;} 
.Avatar img:nth-of-type(2){width:.3rem;height:.27rem;} 
.body{width:100%;height:1rem;display:flex;font-size:.26rem;color:#333333;}
.body>p{height:100%;align-items:center;display:flex;border-bottom:.005rem solid #E1E1E1;}
.body>p:nth-of-type(1){width:20%;}
.body>p>input{width:3rem;border:none;outline:none;color:#333333;}
.body>p:nth-of-type(2)>img{width:.3rem;height:.27rem;}
.body>p:nth-of-type(2){width:80%;display:flex;justify-content:space-between;padding-right:.5rem;box-sizing:border-box;}
.die{width:100%;height:2rem;margin-top:2rem;text-align:center;}
.die>button{width:6.9rem;height:1rem;background:#234497;color:white;font-size:.3rem;border:none;outline:none;}
</style>