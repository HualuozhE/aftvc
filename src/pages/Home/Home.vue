<template>
  <el-container>
    <el-header height="auto">
      <home-header></home-header>
      <nav-menu :navMenuData="navMenuData"></nav-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>安徽财贸职业学校版权所有©</el-footer>
  </el-container>
</template>

<style lang="less" scoped>
.el-container {
  width: 1224px;
  margin: 0 auto;
}
.el-header,
.el-main {
  padding-left: 0;
  padding-right: 0;
}
.el-main {
  padding-left: 4px;
  padding-right: 4px;
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-menu-nav {
  margin-top: 20px;
}
</style>

<script>
import homeHeader from './components/Header/Header'
import navMenu from './components/Main/components/NavMenu'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    homeHeader,
    navMenu
  },
  data() {
    return {
      radio: true,
      navMenuData: []
    }
  },
  async created() {
    let res = await axios.get('/mock.json')
    if (res.status === 200) {
      this.navMenuData = res.data.navmenu
    } else {
      this.$message({
        message: '错误！数据请求失败！请求状态码为' + res.status,
        type: 'error'
      })
    }
  }
}
</script>
