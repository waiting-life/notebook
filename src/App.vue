<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #ddd;
  width: 100vw;
}
input {
  border: none;
  outline: none;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
button {
  outline: none;
  border: none;
  background: none;
}
a, div {
  /* 点击高亮我们需要清除 设置为transparent完全透明 */
  /* 不加这个移动端点击会有高亮 */
  -webkit-tap-highlight-color: transparent;
}
input {
  /* 在移动端浏览器默认的外观在ios上加上这个属性才能给按钮和输入框自定义样式 */
  -webkit-appearance: none;
}
/* 禁用长按页面时的弹出菜单 */
img, a {
  -webkit-touch-callout: none;
}
</style>