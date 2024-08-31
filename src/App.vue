<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { ElButton } from "element-plus";
</script>

<template>
  <div>
    <ElButton>按钮</ElButton>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div class="div1">
    1111
    <div class="div2">2222</div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.div1 {
  background-color: red;
  .div2 {
    background-color: blue;
  }
}
</style>
