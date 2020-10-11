<template>
  <div>
     <van-nav-bar
  title="我的地址"
  left-text="返回"
  right-text="●●●"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
<van-address-list
  v-model="chosenAddressId"
  :list="list"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
  </div>
</template>
<script>
export default {
   name:'Site',
   data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '李先生',
          tel: '13423433424',
          address: '广东省佛山市禅城区印象购物中心5号楼b-1011221902室',
          isDefault: true,
        },
        {
           id: '2',
          name: '李先生',
          tel: '13423433424',
          address: '广东省佛山市禅城区印象购物中心5号楼b-1011221902室',
        },
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
    onAdd() {
      this.$toast('新增地址');
    },
    onEdit(item, index) {
      this.$toast('编辑地址:' + index);
    },
  },
}
</script>
<style scoped>
body{
  background:#f3f4f6;
}
</style>