<template>
  <el-container>
    <el-header height="auto">
      <page-header></page-header>
      <nav-menu :navMenuData="navMenuData"></nav-menu>
    </el-header>
    <el-main>
      <el-row></el-row>
      <el-row>
        <news-content></news-content>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import PageHeader from '../Home/components/Header/Header'
import NavMenu from '../Home/components/Main/components/NavMenu'
import NewsContent from './components/NewsContent'
import axios from 'axios'

export default {
  name: 'News',
  components: {
    PageHeader,
    NavMenu,
    NewsContent
  },
  data() {
    return {
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

<style lang="less" scoped>
.el-container {
  width: 1224px;
  margin: 0 auto;
}
.el-menu-nav {
  margin-top: 20px;
}
.el-header {
  padding: 0;
}
.el-main {
  width: 1224px;
  padding: 0 4px 20px 4px;
  overflow: hidden;
}
.breadcrumb-card {
  margin: 20px 0;
}
</style>
