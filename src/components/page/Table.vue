<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },

  mounted() {
    this.getTableData();
  },

  methods: {
    getTableData() {
      let obj = this;
      this.axios.get("http://api-dev.anoah.com/api/knowledge/nwnuKnowledgePoint/getChildren/?nodeId=RJB_SX_KBZSD_1").then(function(res) {
        console.log(res);
        // obj.tableData = res.data;
        // console.log(obj.tableData);
      });
    }
  },
  components: {}
};
</script>

<style scoped>
</style>
