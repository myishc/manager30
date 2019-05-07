<template>
  <el-container id="index-box" v-cloak>
    <!-- //头部 -->
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <router-link to="/">
              <img class="logo" src="../assets/img/timg.gif" title="回到首页">
            </router-link>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light">
            <h3 class="title">权游后台管理系统</h3>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <a href="#" class="el-icon-loading logout" @click="userLogout" title="退出登录"></a>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- //侧面 -->
      <el-aside class="aside" width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item-group class="nav-ul">
              <el-menu-item index="userList">
                <i class="el-icon-s-order"></i>用户列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group class="nav-ul">
              <el-menu-item index="/roleList">
                <i class="el-icon-s-order"></i>角色列表
              </el-menu-item>
              <el-menu-item index="/rightList">
                <i class="el-icon-s-order"></i>权限列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group class="nav-ul">
              <el-menu-item index="/productList">
                <i class="el-icon-s-order"></i>商品列表
              </el-menu-item>
              <el-menu-item index="/categoryParam">
                <i class="el-icon-s-order"></i>分类参数
              </el-menu-item>
              <el-menu-item index="/productCategory">
                <i class="el-icon-s-order"></i>商品分类
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item-group class="nav-ul">
              <el-menu-item index="/orderList">
                <i class="el-icon-s-order"></i>订单列表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item-group class="nav-ul">
              <el-menu-item index="/datas">
                <i class="el-icon-s-order"></i>数据报表
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- //中心 -->
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index.vue",
  data(){
    return{
      
    }
  },
  
 beforeCreate() {
    const info = JSON.parse(sessionStorage.getItem('userInfo'))
    if(!info){
      location = '/#/login'
      return
    }
  },
  methods: {
    userLogout(){
      sessionStorage.removeItem('userInfo')
      location = '/'
    }
  },
};
</script>

<style lang='scss'>
html,
body {
  height: 100vh;
  #index-box {
    height: 100%;
    .header {
      line-height: 60px;
      padding: 0;
      background-color: teal;
      .logo {
        height: 60px;
        width: 200px;
        border-radius: 5px;
      }
      .title {
        color: #fff;
        text-align: center;
        letter-spacing: 1px;
      }
      .logout {
        // margin-left: 160px;
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 24px;
        text-decoration: none;
        color: #fff;
      }
    }
    > section {
      .aside {
        .nav-ul > div {
          padding: 0;
        }
      }
      .main {
        background-color: palegoldenrod;
      }
    }
  }
}
</style>
