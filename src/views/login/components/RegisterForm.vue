<template>
  <el-form :model="registerData" label-width="auto" class="login-form">
    <el-form-item label="账号">
      <el-input v-model="registerData.account" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="registerData.password" />
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input type="password" v-model="confirmPassword" />
    </el-form-item>
    <el-button class="button" type="primary">注册</el-button>
    <div class="footer-tip">
      已有账号？<span class="blue-text">点击登录</span>
    </div>
  </el-form>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { Login } from "@/http/interface/login";

const confirmPassword = ref("");
const registerData: Login.LoginParams = reactive({
  account: "",
  password: "",
});
</script>
<style scoped lang="scss">
@import "./LoginForm.scss";
</style>
