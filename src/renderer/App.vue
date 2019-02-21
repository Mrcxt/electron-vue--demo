<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
#app {
  display: flex;
  height: 100vh;
  width: 100vw;
  & > div {
    flex: auto;
  }
}
</style>

