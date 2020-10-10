<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.van-nav-bar{
  background:#000;
}
.van-nav-bar__text {
    color: #fff;
}
.van-nav-bar__title {
    max-width: 60%;
    margin: 0 auto;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
}
.van-icon::before {
    display: inline-block;
}

.van-tab--active {
    color: #000;
    font-weight: 500;
}

element.style {
    transform: translateX(141px) translateX(-50%);
    transition-duration: 0.3s;
}
.van-tabs__line {
    position: absolute;
    bottom: 15px;
    left: 0;
    z-index: 1;
    width: 60px;
    height: 3px;
    background-color: #234497;
    border-radius: 3px;
}
.van-tabs__wrap {
    overflow: hidden;
    border: 1px solid #f3f4f6;
}
.van-tab__pane, .van-tab__pane-wrapper {
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    width: 100%;
    padding-top:0.15rem;
    background: #f3f4f6;
}
body{
  background: #f3f4f6;
}
.van-nav-bar{
  background:#000;
}
.van-swipe__indicators {
    position: absolute;
    bottom: 0.7rem;
    left: 50%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
.van-count-down {
    color: #323233;
    font-size: 14px;
    line-height: 20px;
    display: inline-block;
}

/* 张博 */
.van-ellipsis{
  color:#fff;
}
.van-radio__icon--round .van-icon {
    border-radius: 100%;
    display:none;
}
.van-icon::before {
    display: inline-block;
}
.van-swipe-item{
  height:3.5rem;
}
.van-icon{
  display:inline-block;
}
.van-address-list__bottom{
  top:41%;
}
.van-button--danger {
    color: #fff;
    background-color:#244497;
    border: 1px solid #244497;
}
.van-address-list__add {
    height: 1rem;
    margin: 5px 0;
    border-radius: 0;
}
.van-col--6{
  font-size:0.4rem;
}
.van-row--flex{
  width:100%;
  height:1.5rem;
  background:#fff;
  box-sizing: border-box;
  padding-top: 0.3rem;
}
.van-checkbox__label {
    margin-left: 21px;
    color: #323233;
    line-height: 20px;
    display: inline-block;
    font-size: 0.7rem;
}
.van-checkbox__label {
    margin-left: 21px;
    color: #323233;
    line-height: 20px;
    display: inline-block;
    font-size: 0.5rem;
}
</style>
