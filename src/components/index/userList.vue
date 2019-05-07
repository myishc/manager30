<template>
  <div class="userList">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="search-box">
      <el-col :span="8">
        <el-input placeholder="请输入搜索的用户名" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="12" class="add-user">
        <el-button type="primary" icon="el-icon-edit" circle title="新增用户"></el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%" class="user-table">
      <el-table-column prop="num" label="序号" width="70"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="mobile" label="手机"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="status" label="状态">
        <el-switch active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-table-column>
      <el-table-column prop="operation" label="操作">
        
      </el-table-column>
    </el-table>
    <el-pagination
      class="page"
      :current-page="1"
      :page-sizes="[1, 2, 3, 4]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
    ></el-pagination>
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
          mobile: "13322334455",
          email: "563066575@qq.com",
          status: true,
          operation: ""
        },
        {
          num: "2",
          name: "王小虎",
          mobile: "13322334455",
          email: "563066575@qq.com",
          status: true,
          operation: ""
        }
      ]
    };
  },
  methods: {}
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
    tr {
      height: 60px;
    }
  }
  .page {
    margin-top: 10px;
  }
}
</style>
