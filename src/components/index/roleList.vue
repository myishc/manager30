<template>
  <div class="userList">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="search-box">
      <el-col :span="8">
        <el-input placeholder="请输入搜索的角色" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="12" class="add-user">
        <el-button type="primary" icon="el-icon-edit" circle title="新增角色"></el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%" class="user-table">
      <el-table-column prop="num" label="序号" width="180"></el-table-column>
      <el-table-column prop="name" label="角色名称" width="180"></el-table-column>
      <el-table-column prop="describe" label="角色描述"></el-table-column>
      <el-table-column prop="operation" label="操作"></el-table-column>
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
          describe: "产品经理",
          operation: ''
        },
        {
          num: "2",
          name: "王小虎",
          describe: "项目经理",
          operation: ''
        }
      ]
    }
  }
};
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
