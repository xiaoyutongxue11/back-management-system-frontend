<template>
  <div class="container">
    <div class="login-box">
      <div class="login-left"></div>
      <div class="login-right">
        <h1 class="title">Welcome To YY-Admin</h1>
        <el-card class="card">
          <el-tabs class="demo-tabs" v-model="activeName" :stretch="true">
            <el-tab-pane label="登录" name="login">
              <LoginForm />
            </el-tab-pane>
            <el-tab-pane label="注册" name="register">
              <RegisterForm />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import LoginForm from "./components/LoginForm.vue";
import RegisterForm from "./components/RegisterForm.vue";

const activeName = ref("login");
</script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  @include color-change-animation(
    back-color-animation,
    $primary-light-purple,
    $primary-light-blue,
    10s,
    infinite,
    background-color
  );

  position: fixed;
  .login-box {
    width: 70%;
    height: 500px;
    background-color: white;
    border-radius: 10px;
    opacity: 0.8;
    display: flex;
    flex-direction: row;
    .login-left,
    .login-right {
      width: 50%;
      height: inherit;
      .title {
        @include color-change-animation(
          title-color-animation,
          $primary-light-purple,
          $primary-light-blue,
          10s,
          infinite,
          color
        );
      }
    }
    .login-left {
      border-radius: 10px 0px 0px 10px;
      background-image: url("/src/assets/数据分析.png");
      background-size: cover;
    }
    .login-right {
      display: flex;
      flex-direction: column;
      align-items: center;
      .card {
        width: 90%;
        height: fit-content;
      }
    }
    @media screen and (max-width: 600px) {
      .login-left {
        display: none; /* 隐藏元素 */
      }
      .login-right {
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .container {
      width: 60%;
    }
  }
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
