<template>
  <div>
      <van-nav-bar class="nav"
  title="购物车"
  left-text="返回"
  right-text="●●●"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
  <div class="first_clothes" v-for="(item,index) in Arr" :key="item.id">
    <van-checkbox v-model="item.checked" class="checkbox" @click="radio"></van-checkbox>
      <div class="background_pic"><img src="../assets/images/结算/pic_1.png"></div>
      <div class="pic_right">
        <p class="word_one">春秋商务休闲加肥加大胖子衬衣肥佬宽松中年正装长</p>
        <p class="word_two">￥<span class="word_three">{{item.price}}</span></p> 
        <van-stepper v-model="item.value" @change="changeValue"/>   
        <img class="del" src="../assets/images/购物车/del.png" @click="del(index)">
      </div>
    </div>
<<<<<<< HEAD
    <!-- 下面提交 -->
=======
<<<<<<< HEAD
    <!-- 下面提交 -->
=======

>>>>>>> e0b694c1474ddaeadfd224971b40176e376b8c19
>>>>>>> 8eb3e47e549059b630d28f209d3f3f0430fe0943
    <div class="botton">
        <van-checkbox v-model="checkede" class="end" @click="check_all">全选</van-checkbox>
        <p>合计：￥{{sum}}</p>
        <p>数量：{{total}}</p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> e0b694c1474ddaeadfd224971b40176e376b8c19
>>>>>>> 8eb3e47e549059b630d28f209d3f3f0430fe0943
        <div class="botton_right" @click="$router.push('/Fill')">
            <img src="../assets/images/购物车/icon.png" >
            <p>去结算</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Cart',
<<<<<<< HEAD
      data(){
    return {
      Arr : [{id : 1,price : 1000,checked : false,value:1,subtotal:1000},
             {id : 2,price : 2000,checked : false,value:1,subtotal:2000},
=======
    data(){
    return {
      Arr : [{id : 1,price : 1000,checked : false,value:1,subtotal:1000},
             {id : 2,price : 2000,checked : false,value:1,subtotal:2000},
<<<<<<< HEAD
>>>>>>> 8eb3e47e549059b630d28f209d3f3f0430fe0943

            ],
      checkede:false,
      values:1,
      sum : 2000,
      total : 1,
<<<<<<< HEAD
=======
=======
            ],
      checkede:false,
      values:1,
      sum : 0,
      total : 0,
>>>>>>> e0b694c1474ddaeadfd224971b40176e376b8c19
>>>>>>> 8eb3e47e549059b630d28f209d3f3f0430fe0943
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$toast('按钮');
    },
    // 单选
    radio(){
      this.checkede = true;
      this.total = 0;
      this.sum = 0;
      this.Arr.forEach(data => {
        if(data.checked == false){
          this.checkede =  false;
        }else{
          this.total += data.value;
          this.sum += data.subtotal;
        }
        
      })
    },
    // 全选
    check_all(){
      this.total = 0;
      this.sum = 0;
       this.Arr.forEach(data => {
         data.checked = this.checkede;
         if(this.checkede){
           this.total += data.value;
           this.sum += data.subtotal;
         }
       })
    },
    // 删除
    del(i){
      this.Arr.splice(i,1);
      this.total = 0;
      this.sum = 0;
      this.Arr.forEach(data => {
        if(data.checked){
          this.total += data.value;
          this.sum += data.subtotal;
        }
      })
      if(this.Arr.length == 0){
        this.checkede = false;
      }
    },
    // 加减值
    changeValue(){
      this.total = 0
      this.sum = 0
      this.Arr.forEach(data => {
        if(data.value <= 0){
          data.value = 1;
        }
        data.subtotal = data.value * data.price;
        if(data.checked){
          this.total += data.value;
          this.sum += data.subtotal;
        }
      })
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    },
    xiaojie(){
      
>>>>>>> e0b694c1474ddaeadfd224971b40176e376b8c19
>>>>>>> 8eb3e47e549059b630d28f209d3f3f0430fe0943
    }
  },
}
</script>
<style>
body{
  background:#f3f4f6;
}
.first_clothes{
  width: 100%;
  height: 2.1rem;
  margin-top: 0.3rem;
  box-sizing: border-box;
  position: relative;
  background:#fff;
}
.checkbox{
  padding-top: 0.8rem;
  margin-left: 0.4rem;
  display: inline-block;
  float: left;
}
.background_pic{
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  margin-top: 0.3rem;
  margin-left: 0.2rem;
}
.background_pic img{
  width:1.5rem;
  height:1.5rem;
}
.pic_right{
  width:4rem;
  height:1.5rem;
  display: inline-block;
  box-sizing: border-box;
  position: absolute;
  top: 11%;
  left: 36%;
}
.word_one{
  font-size: 0.05rem;
}
.word_two{
  font-size: 0.05rem;
  color: #244498;
}
.del{
  width: 10%;
  position: absolute;
  top: 65%;
  right: 5%;
}
.botton{
  width:100%;
  height:1.5rem;
  background:#fff;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
}
.end{
  padding-top: 0.2rem;
  padding-left: 0.2rem;
  height: 1rem;
  width: 2rem;
}
.botton p{
  font-size: 0.25rem;
  position: relative;
  bottom: 55%;
  padding-bottom: 0.1rem;
  margin-left: 2.3rem;
  color: #000;
}
.botton_right{
  width:2rem;
  height:1.5rem;
  background: #E1E1E1;
  position: absolute;
  right: 0;
  bottom: 0;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.botton img{
  width:40%;
  position: absolute;
  right:30%;
  top:15%;
}
.botton_right p{
  width:40%;
  position: absolute;
  right:30%;
  top:65%;
  color: #234497;
}
</style>