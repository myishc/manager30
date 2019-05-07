<template>
  <div class="userList">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="search-box">
      <el-col :span="8">
        <el-input placeholder="请输入搜索的商品分类" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="12" class="add-user">
        <el-button type="primary" icon="el-icon-edit" circle title="新增商品分类"></el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%" class="user-table">
      <el-table-column prop="name" label="分类名称" width="180"></el-table-column>
      <el-table-column prop="rank" label="级别" width="180"></el-table-column>
      <el-table-column prop="isVild" label="是否有效"></el-table-column>
      <el-table-column prop="operation" label="操作"></el-table-column>
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
          name: "大家电",
          rank: "一级",
          isVild: "有效"
        },
        {
          name: "小家电",
          rank: "一级",
          isVild: "有效"
        },
      ]
    };
  },
  methods: {
  
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
