<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form ref="userFormRef" :model="user" status-icon :rules="rules">
        <div class="title">登录</div>
        <el-form-item prop="userName">
          <el-input
            type="text"
            prefix-icon="el-icon-user"
            v-model="user.userName"
          />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input
            type="password"
            prefix-icon="el-icon-view"
            v-model="user.userPwd"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="login(userFormRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from '@vue/reactivity';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import api from '@/api'
let user = reactive({
  userName: "admin",
  userPwd: "123456",
})
let rules = {
  userName: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
  ],
  userPwd: [
    {
      required: true,
      message: "请输入密码",
      trigger: "blur",
    },
  ],
}
const userFormRef = ref()
const store = useStore();
const router = useRouter();
function login(formRef: any) {
  formRef.validate((valid: any) => {
    if (valid) {
      api.login(user).then(async (res: any) => {
        store.commit("saveUserInfo", res);
        router.push("/welcome");
      });
    } else {
      return false;
    }
  });
}
function goHome() {
  router.push("/welcome");
}
</script>

<style lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;
  .modal {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 3px #c7c9cb4d;
    .title {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .btn-login {
      width: 100%;
    }
  }
}
</style>