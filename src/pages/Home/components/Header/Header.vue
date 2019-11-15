<template>
  <el-row>
    <el-col>
      <router-link to="/">
        <img src="@/assets/images/logo.png" id="logo" />
      </router-link>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped>
#logo {
  width: 1224px;
  height: 91px;
}
</style>

<script>
export default {
  name: 'homeHeader'
}
</script>
