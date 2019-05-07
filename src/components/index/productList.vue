<template>
  <div class="userList">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="search-box">
      <el-col :span="8">
        <el-input placeholder="请输入搜索的商品" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="12" class="add-user">
        <el-button type="primary" icon="el-icon-edit" circle title="新增商品列表"></el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%" class="user-table">
      <el-table-column prop="num" label="序号" width="50"></el-table-column>
      <el-table-column prop="name" label="商品名称" width="180"></el-table-column>
      <el-table-column prop="price" label="商品价格"></el-table-column>
      <el-table-column prop="weight" label="商品重量"></el-table-column>
      <el-table-column prop="time" label="创建时间"></el-table-column>
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
          num: "1",
          name: "王小虎",
          price: 999,
          weight: 100,
          time: 2019-5-5
        },
        {
          num: "2",
          name: "王小虎",
          price: 999,
          weight: 100,
          time: 2019-5-5
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
