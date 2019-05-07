<template>
  <div class="login">
    <div class="center-box">
      <el-form label-position="top"  label-width="80px">
        <i class="el-icon-s-custom user-icon"></i>
        <el-form-item label="用户名">
          <el-input v-model.trim="username" clearable placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model.trim="password" show-password placeholder="请输入用户密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn-login" @click="userLogin" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login.vue",
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    //用户登录逻辑
    userLogin() {
      if (this.username == null || this.password == null) {
        this.$message.warning("账号密码不能为空");
        return;
      }
      this.$axios
        .post("login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          // console.log(res);
          if (res.data.meta.status === 200) {
            sessionStorage.setItem("userInfo", JSON.stringify(res.data.data));
            location = "/";
          } else {
            this.$message.error(res.data.meta.msg);
          }
        });
    }
  }
};
</script>

<style lang='scss'>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  .login {
    background-color: #324152;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .center-box {
      width: 480px;
      height: 350px;
      background-color: #fff;
      border-radius: 10px;
      padding: 30px;
      position: relative;
      .user-icon {
        position: absolute;
        font-size: 100px;
        border-radius: 50%;
        top: -70px;
        left: 50%;
        transform: translateX(-50%);
        color: #324152;
        background-color: #fff;
        box-shadow: 0px 0px 10px 1px gold;
        padding: 10px;
      }
      .btn-login {
        width: 100%;
      }
    }
  }
}
</style>
