<template>
  <div class="userList">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="search-box">
      <el-col :span="8">
        <el-input placeholder="请输入搜索的权限" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="12" class="add-user">
        <el-button type="primary" icon="el-icon-edit" circle title="新增权限"></el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%" class="user-table">
      <el-table-column prop="num" label="序号" width="50"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="path" label="路径" width="300"></el-table-column>
      <el-table-column prop="tier" label="层级" width="300"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "userList.vue",
  data() {
    return {
      tableData: [
        {
          num: "1",
          name: "王小虎",
          path: "goods",
          tier: "goods",
        },
        {
          num: "2",
          name: "王小虎",
          path: "goods",
          tier: "goods",
        },
      ]
    }
  }
}
</script>

<style lang='scss'>
.userList {
  .breadcrumb {
    padding-left: 10px;
  }
  .search-box {
    margin-top: 20px;
    .add-user {
      margin-left: 20px;
    }
  }
  .user-table {
    margin-top: 10px;
     tr{
      height: 60px;;
    }
  }
  .page{
    margin-top: 10px;
  }
}
</style>
