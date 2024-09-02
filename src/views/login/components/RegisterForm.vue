<template>
  <el-form
    :model="registerData"
    :rules="rules"
    label-width="auto"
    class="login-form"
  >
    <el-form-item label="账号" prop="account">
      <el-input v-model="registerData.account" placeholder="请输入账号" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        type="password"
        v-model="registerData.password"
        placeholder="请输入密码"
      />
    </el-form-item>
    <el-form-item label="确认密码" prop="rePassword">
      <el-input
        type="password"
        v-model="registerData.rePassword"
        placeholder="请再次输入密码"
      />
    </el-form-item>
    <el-button class="button" type="primary">注册</el-button>
    <div class="footer-tip">
      已有账号？<span class="blue-text" @click="toLogin">点击登录</span>
    </div>
  </el-form>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { Login } from "@/http/interface/login";
import type { FormRules } from "element-plus";

const registerData: Login.RegisterParams = reactive({
  account: "",
  password: "",
  rePassword: "",
});

const rules = reactive<FormRules<Login.RegisterParams>>({
  account: [
    { required: true, message: "请输入账号", trigger: "blur" },
    { min: 6, max: 12, message: "账号格式错误，必须由6-12位字符组成" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    {
      pattern: /^(?![0-9]+$)[a-z0-9]{6,12}$/,
      message: "密码格式错误，必须由长度为6-12位字母和数字组成",
      trigger: "blur",
    },
  ],
  rePassword: [
    { required: true, message: "请再次确认密码", trigger: "blur" },
    {
      pattern: /^(?![0-9]+$)[a-z0-9]{6,12}$/,
      message: "密码格式错误，必须由长度为6-12位字母和数字组成",
      trigger: "blur",
    },
  ],
});

const emit = defineEmits<{
  (event: "tabChange", paneName: string): void;
}>();
const toLogin = () => {
  emit("tabChange", "login");
};
</script>
<style scoped lang="scss">
@import "./LoginForm.scss";
</style>
