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
    color:#fff;
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
</style>
