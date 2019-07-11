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
import HelloWorld from './components/HelloWorld.vue'
import Left from './components/frame/Left.vue'
import Header from './components/frame/Header.vue'
import Footer from './components/frame/Footer.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
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
    text-align: center;
    line-height: 160px;
  }
</style>
