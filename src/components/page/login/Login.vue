<!-- login page -->
<template>
  <div>
    <el-form ref="loginForm" class="login-box" :model="loginForm" :rules="loginRule">
      <el-form-item prop="username">
        <el-input
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
          v-model="loginForm.username"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          placeholder="请输入密码"
          prefix-icon="el-icon-lock"
          v-model="loginForm.password"
          show-password
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item style="text-align: center">
        <el-button type="primary" v-on:click="onSubmit('loginForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRule: {
        username: [
          {
            required: true,
            message: "请填写用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/home");
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.login-box {
  border: 1px solid #dcdfe6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}
</style>