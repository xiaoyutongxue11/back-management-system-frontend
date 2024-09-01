<template>
  <el-form :model="loginData" label-width="auto" class="login-form">
    <el-form-item label="账号">
      <el-input v-model="loginData.account" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input type="password" v-model="loginData.password" />
    </el-form-item>
    <div class="blue-text forget">忘记密码</div>
    <el-button class="button" type="primary">登录</el-button>
    <div class="footer-tip">
      没有账号？<span class="blue-text">点击注册</span>
    </div>
  </el-form>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { Login } from "@/http/interface/login";

const loginData: Login.LoginParams = reactive({
  account: "",
  password: "",
});
</script>
<style scoped lang="scss">
@import "./LoginForm.scss";
.forget {
  display: flex;
  justify-content: flex-end;
}
</style>
