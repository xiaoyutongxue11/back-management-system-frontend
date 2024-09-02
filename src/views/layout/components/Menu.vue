<template>
  <div class="title">
    <span>YY-Admin</span>
    <span>
      <el-icon :class="{ 'is-active': !isCollapse }" @click="toggleCollapse">
        <Expand v-if="!isCollapse" />
        <Fold v-else />
      </el-icon>
    </span>
  </div>
  <el-menu
    default-active="home"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <el-menu-item index="home">
      <el-icon><icon-home /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
    <el-menu-item index="6">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
    <el-menu-item index="7">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
    <el-menu-item index="8">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Document,
  Expand,
  HomeFilled as IconHome,
  Location,
  Setting,
  Fold,
} from "@element-plus/icons-vue";

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

:deep(.el-menu) {
  height: 100vh;
}

.title {
  width: 100%;
  height: var(--el-menu-item-height);
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
  font-size: large;
  color: $primary-color;
}
.is-active {
  color: var(--el-menu-active-color);
}
</style>
