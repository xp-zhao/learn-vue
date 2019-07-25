<!-- Tree -->
<template>
  <el-tree
    :data="data"
    :props="defaultProps"
    :load="loadNode"
    lazy
    show-checkbox
    @node-click="handleNodeClick"
  ></el-tree>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      defaultProps: {
        children: "child",
        label: "name"
      }
    };
  },

  mounted() {
    this.getTreeData();
  },

  methods: {
    loadNode(node, resolve) {
      if (node.level === 0) {
        this.axios.get("http://localhost:8080/getTree").then(function(res) {
          //   console.log(res.data);
          resolve(res.data);
        });
      } else {
        this.axios
          .get("http://localhost:8080/getChild/" + node.data.nodeId)
          .then(function(res) {
            resolve(res.data);
          });
      }
    },

    handleNodeClick(data) {
      console.log("click:" + data);
      // this.axios.get("http://localhost:8080/getChild/"+data.nodeId).then(function(res) {
      //     console.log(res);
      //     data.children = res.data;
      // });
    },

    getTreeData() {
      //   let obj = this;
      //   this.axios.get("http://localhost:8080/getTree").then(function(res) {
      //     console.log(res);
      //     obj.data = res.data;
      //     // console.log(obj.tableData);
      //   });
    }
  }
};
</script>
<style scoped>
</style>