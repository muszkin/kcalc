<template>
  <div id="app">
    <div class="container-fluid">
      <Top/>
      <Center/>
      <Bottom ref="bottomComponent"/>
    </div>
  </div>
</template>

<script>

import Top from "@/components/Top";
import Center from "@/components/Center";
import Bottom from "@/components/Bottom";
export default {
  name: 'App',
  components: {
    Bottom,
    Center,
    Top
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
