<template>
  <el-card class="box-card">
    <div slot="header">
      <span>校园掠影</span>
    </div>
    <el-carousel :interval="1200" type="card" height="200px">
      <el-carousel-item v-for="item in 2" :key="item">
        <img src="@/assets/images/2.jpg" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/3.jpg" />
      </el-carousel-item>
    </el-carousel>
  </el-card>
</template>

<script>
export default {
  name: 'SchoolShadow'
}
</script>

<style lang="less" scoped>
.box-card img {
  width: 100%;
}
</style>
