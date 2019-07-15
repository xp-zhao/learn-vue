<!-- todofooter -->
<template>
  <div class="todo-footer">
    <label>
      <el-checkbox v-model="isAllCheck"/>
    </label>
    <span>
      <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
    </span>
    <el-button type="danger" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</el-button>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array,
    deleteCompleteTodos: Function,
    selectAllTodos: Function
  },
  data () {
    return {
    }
  },
  computed: {
    completeSize () {
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
    },
    isAllCheck: {
      get () {
        return this.completeSize === this.todos.length && this.completeSize > 0
      },
      set (value) { // value 是当前 checkbox 最新的值
        this.selectAllTodos(value)
      }
    }
  }
}
</script>
<style scoped>
/*footer*/
</style>
