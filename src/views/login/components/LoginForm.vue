<template>
  <el-form
    :model="loginData"
    label-width="auto"
    class="login-form"
    :rules="rules"
  >
    <el-form-item label="账号" prop="account">
      <el-input v-model="loginData.account" placeholder="请输入账号" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="loginData.password"
        placeholder="请输入密码"
      />
    </el-form-item>
    <div class="blue-text forget" @click="onForgetPassword">忘记密码</div>
    <el-button class="button" type="primary">登录</el-button>
    <div class="footer-tip">
      没有账号？<span class="blue-text" @click="toRegister">点击注册</span>
    </div>
  </el-form>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { Login } from "@/http/interface/login";
import type { FormRules } from "element-plus";

const emit = defineEmits<{
  (event: "tabChange", paneName: string): void;
  (event: "onForget", val: boolean): void;
}>();

const loginData: Login.LoginParams = reactive({
  account: "",
  password: "",
});

const rules = reactive<FormRules<Login.LoginParams>>({
  account: [{ required: true, message: "请输入您的账号", trigger: "blur" }],
  password: [{ required: true, message: "请输入您的密码", trigger: "blur" }],
});
const toRegister = () => {
  emit("tabChange", "register");
};

const onForgetPassword = () => {
  emit("onForget", true);
};
</script>
<style scoped lang="scss">
@import "./LoginForm.scss";
.forget {
  display: flex;
  justify-content: flex-end;
}
</style>
