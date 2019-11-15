<template>
  <div>
    <el-tabs type="border-card" tabPosition="left">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-school"></i>&nbsp;校园简介</span>
        <introduction></introduction>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i>&nbsp;现任领导</span>
        <leader></leader>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label">
          <i class="el-icon-picture-outline"></i>
          &nbsp;校园掠影
        </span>
        我的行程
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Introduction from './components/Introduction'
import Leader from './components/Leader'

export default {
  name: 'OverView',
  components: {
    Introduction,
    Leader
  }
}
</script>

<style lang="less" scoped>
.el-tabs {
  min-height: 400px;
}
</style>
