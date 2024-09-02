<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <span>小宇同学</span>
          <div class="avatar">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
          </div>
        </el-header>
        <el-main class="main">
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import Menu from "./components/Menu.vue";
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .avatar {
    margin: 0 10px;
  }
}
.aside {
  width: 200px;
  height: 100vh;
}
:deep(.common-layout) {
  width: 100%;
  height: 100vh;
  display: flex;
}
</style>
