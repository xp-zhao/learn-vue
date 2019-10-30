<!-- register page -->
<template>
  <div>
    <el-form
      ref="registerForm"
      :model="registerForm"
      label-width="80px"
      :rules="registerRule"
      class="register-box"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="registerForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="registerForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="registerForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
        <el-button @click="resetForm('registerForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        return true;
      }
    };

    var checkPass = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入密码"));
      }
      return true;
    };

    var checkPassAgain = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      registerForm: {
        name: "",
        pass: "",
        checkPass: ""
      },
      registerRule: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        pass: [{ required: true, message: "密码不能为空", trigger: "blur" }],
        checkPass: [{ validator: checkPassAgain, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/");
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
.register-box {
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
}
</style>