<!-- item -->
<template>
  <li @mouseenter='handleShow(true)' @mouseleave='handleShow(false)' :style="{background: bgColor}">
    <label>
      <el-checkbox v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <el-button type="danger" v-show="isShow" @click="deleteItem">删除</el-button>
  </li>
</template>

<script>
export default {
  data () {
    return {
      bgColor: 'white', // 默认的背景颜色
      isShow: false // 按钮默认是否显示
    }
  },
  props: {
    todo: Object,
    index: Number,
    deleteTodo: Function
  },
  methods: {
    handleShow (isEnter) {
      if (isEnter) {
        this.bgColor = 'gray'
        this.isShow = true
      } else {
        this.bgColor = 'white'
        this.isShow = false
      }
    },
    deleteItem () {
      const {todo, index} = this
      if (window.confirm(`确认删除${todo.title}吗?`)) {
        this.deleteTodo(index)
      }
    }
  }
}
</script>
<style scoped>
/*item*/
  li {
    list-style: none;
    height: 48px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  .el-button {
    float: right;
    margin-top: 3px;
  }
  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }
</style>
