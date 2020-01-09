<template>
  <div id="app">
    <router-view class="homepage" />
  </div>
</template>

<script>
export default {
  mounted() {
      //异步获取商品列表
      this.$store.dispatch("ActGL");
      //异步获取记录列表
      this.$store.dispatch("ActRL");
      //异步获取用户列表
      this.$store.dispatch("ActUL");
  },
}
</script>

<style>
html,
body,
#app,
.homepage{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
