<template>
  <div class="home">
    <h1><span style="color:#42b983">虾哔哔</span>FM</h1>
    <div class="fm">
    </div>
  </div>
</template>

<script>
import { getPrivateFM } from "../../api/index";

export default {
  mounted() {
    getPrivateFM()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="less">
.home {
}
</style>
