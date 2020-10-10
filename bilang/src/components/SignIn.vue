<template>
  <!-- 登陆界面 -->
  <div id="body">
    <div class="document_nav">
      <p>
        <span>〈</span>
        <span>返回</span>
      </p>
      <p>比朗</p>
      <p>● ● ●</p>
    </div>
    <div class="document_content">
      <div class="content_log">
        <p><img src='../assets/images/h5页面1/h5页面_3_03.png'></p>
      </div>
    </div>
    <div class='document_SignIn'>
      <div class='accountNumber'>
        <p><img src='../assets/images/登录/登录54_03.png'></p>
        <p><img src='../assets/images/登录/border.png'></p>
        <p><input type="text" placeholder='请输入手机号'></p>
      </div>
    </div>
    <div class='document_SignIn password'>
      <div class='accountNumber'>
        <p><img src='../assets/images/登录/登录54_07.png'></p>
        <p><img src='../assets/images/登录/border.png'></p>
        <p><input type="password" placeholder='请输入密码'></p>
        <p>忘记密码？</p>
      </div>
    </div>
    <div class='document_SignIn '>
      <div class='accountNumber SignIn_button'>
        <p>登陆</p>
      </div>
    </div>
    <div class='document_SignIn '>
      <div class='accountNumber SignIn_button registered_button'>
        <p>注册</p>
      </div>
    </div>
    <div class='Otherlogin'>
      <p class='Otherlogin_content'>
        <span>——————</span>
        <span>第三方登录</span>
        <span>——————</span>
      </p>
    </div>
    <div class='document_SignIn '>
      <div class='accountNumber SignIn_button WeChatLogin'>
        <p><img src='../assets/images/登录/登录54_11.png'><span>微信登陆</span></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'SignIn', 
}
</script>
<style scoped>
*{margin:0;padding:0;}
img{width:100%;height:100%;}
.document_nav{display:flex;align-items:center;color:white;font-size:.34rem;width:100%;height:1rem;background:black;justify-content:space-between;margin-bottom:.2rem;padding-right:.1rem;box-sizing:border-box;}
.content_log{width:100%;height:4.2rem;display:flex;align-items:center;}
.content_log>p{width:5.72rem;height:.67rem;margin:0 auto;}
.document_SignIn{width:100%;}
.document_SignIn>div{margin:.2rem auto;}
.accountNumber{width:6.1rem;height:1rem;background:#F3F3F5;display:flex;padding:0 .2rem 0 .2rem;box-sizing:border-box;}
.accountNumber>p{height:100%;display:flex;align-items:center;margin-right:.3rem;}
.accountNumber>p:nth-of-type(1)>img{width:.4rem;height:.43rem;}
.accountNumber>p:nth-of-type(2)>img{height:80%;}
.accountNumber>p:nth-of-type(3)>input{width:70%;height:.48rem;font-size:.24rem;background:none;border:none;outline:none;color:#656565;}
.accountNumber>p:nth-of-type(4){font-size:.24rem;color:#656565;margin-right:0;}
.password{margin-bottom:.6rem;}
.SignIn_button{background:#234397;font-size:.3rem;color:white;border-radius:.1rem;}
.SignIn_button>p{line-height:1rem;margin:0 auto;}
.registered_button{font-size:.3rem;background:#F3F3F5;color:#656565;}
#body>div:nth-of-type(6){margin-bottom:1rem;}
.Otherlogin{width:100%;height:.6rem;font-size:.2rem;color:#656565;}
.Otherlogin>p{width:60%;height:100%;margin:0 auto;text-align:center;line-height:.6rem;color:#CBCBCB;}
.Otherlogin>p>span:nth-of-type(2){margin:0 .2rem}
.WeChatLogin{background:white;color:#656565;border:.01rem solid #656565;}
.WeChatLogin>p>img{width:.5rem;height:.5rem;}
.WeChatLogin>p>span{margin-left:.2rem;margin-top:.02rem;}
</style>