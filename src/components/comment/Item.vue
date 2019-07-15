<!-- 评论详情 -->
<template>
  <li>
    <el-row :gutter="20">
      <el-col :span="12">
        <p class="user"><span >{{comment.name}}</span><span>说:</span></p>
        <p class="centence">{{comment.content}}</p>
      </el-col>
      <el-col :span="12">
        <el-button type="danger" @click="deleteItem" style="margin-top: 30px">删除</el-button>
      </el-col>
    </el-row>
  </li>
</template>

<script>
export default {
  props: { // 指定属性名和属性值的类型
    comment: Object,
    deleteComment: Function,
    index: Number
  },
  methods: {
    deleteItem () {
      const {comment, index, deleteComment} = this
      if (window.confirm(`确定删除${comment.name}的评论吗？`)) {
        deleteComment(index)
      }
    }
  }
}

</script>
<style scoped>
li {
  transition: .5s;
  overflow: hidden;
}
.user {
  font-size: 22px;
}
</style>
