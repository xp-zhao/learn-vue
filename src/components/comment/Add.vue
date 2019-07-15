<!-- 添加评论 -->
<template>
  
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input placeholder="用户名" v-model="name"/>
      </el-form-item>
      <el-form-item label="评论内容" style="width: 480px">
        <el-input type="textarea" placeholder="评论内容" v-model="content"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">提交</el-button>
      </el-form-item>
    </el-form>
     
</template>

<script>
export default {
  props: {
    addComment: { // 指定属性名/属性值的类型/必要性
      type: Function,
      required: true
    }
  },
  data () {
    return {
      name: '',
      content: ''
    }
  },
  methods: {
    add () {
      // 1. 检查输入的合法性
      const name = this.name.trim()
      const content = this.content.trim()
      if (!name || !content) {
        alert('姓名和内容不能为空')
        return
      }
      // 2. 根据输入的数据，封装成一个 comment 对象
      const comment = {
        name,
        content
      }
      // 3. 添加到 comments 中
      this.addComment(comment)
      // 4. 清除输入
      this.name = ''
      this.content = ''
    }
  }
}

</script>
<style scoped>
.el-input{
  width: 320px;
}
</style>
