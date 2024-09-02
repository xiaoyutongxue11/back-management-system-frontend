<template>
  <p class="title">忘记密码</p>
  <el-form
    :model="forgetData"
    :rules="rules"
    label-width="auto"
    class="login-form"
  >
    <el-form-item label="账号" prop="account">
      <el-input v-model="forgetData.account" placeholder="请输入注册账号" />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="forgetData.email" placeholder="请输入注册邮箱" />
    </el-form-item>
    <el-form-item label="新密码" prop="password">
      <el-input
        type="password"
        placeholder="请输入新密码"
        v-model="forgetData.password"
      />
    </el-form-item>
    <el-form-item label="确认密码" prop="rePassword">
      <el-input
        type="password"
        placeholder="请再次确认密码"
        v-model="forgetData.rePassword"
      />
    </el-form-item>
    <div class="button-group">
      <el-button type="info" @click="closeForget">取消</el-button>
      <el-button type="primary">确定</el-button>
    </div>
    <div class="footer-tip">
      想起来了？<span class="blue-text" @click="closeForget">点击登录</span>
    </div>
  </el-form>
</template>
<script setup lang="ts">
import { reactive } from "vue";
import { Login } from "@/http/interface/login";
import type { FormRules } from "element-plus";

const emit = defineEmits<{
  (event: "onForget", val: boolean): void;
}>();

const forgetData: Login.ForgetParams = reactive({
  account: "",
  email: "",
  password: "",
  rePassword: "",
});

const rules = reactive<FormRules<Login.ForgetParams>>({
  account: [{ required: true, message: "请输入注册账号", trigger: "blur" }],
  email: [{ required: true, message: "请输入注册邮箱", trigger: "blur" }],
  password: [
    { required: true, message: "请输入新密码", trigger: "blur" },
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
const closeForget = () => {
  emit("onForget", false);
};
</script>
<style scoped lang="scss">
@import url("./LoginForm.scss");
.title {
  text-align: center;
}
.button-group {
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 30%;
  }
}
</style>
