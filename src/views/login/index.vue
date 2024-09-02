<template>
  <div class="container">
    <div class="login-box">
      <div class="login-left"></div>
      <div class="login-right">
        <h1 class="title">Welcome To YY-Admin</h1>
        <el-card class="card">
          <div v-if="!isForget">
            <el-tabs class="demo-tabs" v-model="activeName" :stretch="true">
              <el-tab-pane label="登录" name="login">
                <LoginForm @tab-change="handleClick" @on-forget="onForget" />
              </el-tab-pane>
              <el-tab-pane label="注册" name="register">
                <RegisterForm @tab-change="handleClick" />
              </el-tab-pane>
            </el-tabs>
          </div>
          <ForgetPassword v-else @on-forget="onForget" />
        </el-card>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";
import ForgetPassword from "./components/ForgetPassword.vue";

const activeName = ref("login");
const isForget = ref(false);
const handleClick = (paneName: string) => {
  activeName.value = paneName;
};

const onForget = (val: boolean) => {
  isForget.value = val;
};
</script>
<style scoped lang="scss">
@import url("./index.scss");
</style>
