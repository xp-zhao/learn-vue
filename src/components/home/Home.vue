<template>
  <div id="app">

  <el-container>
  <el-header><Header/></el-header>
    <el-container>
        <el-aside width="200px"><Left/></el-aside>
        <el-main><router-view/></el-main>
    </el-container>
  <el-footer><Footer/></el-footer>
</el-container>
  </div>
</template>

<script>
import Left from '../frame/Left.vue'
import Header from '../frame/Header.vue'
import Footer from '../frame/Footer.vue'

export default {
  name: 'app',
  components: {
    Left,
    Header,
    Footer
  }
}
</script>

<style>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0px!important;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
  }
</style>
