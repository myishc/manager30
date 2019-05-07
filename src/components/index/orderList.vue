<template>
  <div class="userList">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row class="search-box">
      <el-col :span="8">
        <el-input placeholder="请输入搜索的订单" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%" class="user-table">
      <el-table-column prop="num" label="序号" width="50"></el-table-column>
      <el-table-column prop="numbar" label="订单编号" width="180"></el-table-column>
      <el-table-column prop="price" label="订单价格"></el-table-column>
      <el-table-column prop="isPayment" label="是否付款"></el-table-column>
      <el-table-column prop="isShipments" label="是否发货"></el-table-column>
      <el-table-column prop="time" label="下单时间"></el-table-column>
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
          numbar: "544686442",
          price: 999,
          isPayment: "未付款",
          isShipments: "未发货",
          time: "2019-5-5 20:00:00"
        },
        {
          num: "2",
          numbar: "544686442",
          price: 999,
          isPayment: "未付款",
          isShipments: "未发货",
          time: "2019-5-5 20:00:00"
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
