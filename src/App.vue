<template>
  <div id="app">
     <home></home>
  </div>
</template>

<script>
import Home from "./views/Home";
export default {
  name: 'App',
  components: {
      Home,
  },
  created() {
    // console.log($('#app'))
  }
}
</script>

<style>
  @import "assets/css/base.css";

</style>
