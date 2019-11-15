<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-nav"
    mode="horizontal"
    @select="handleSelect"
  >
    <template v-for="item of navMenuData">
      <el-menu-item
        :index="item.index"
        v-if="!item.children.length"
        :key="item.index"
      >
        {{ item.itemName }}
      </el-menu-item>
      <el-submenu
        :index="item.index"
        v-if="item.children.length"
        :key="item.index"
      >
        <template slot="title">{{ item.itemName }}</template>
        <el-menu-item
          :index="more.index"
          v-for="more of item.children"
          :key="more.index"
        >
          {{ more.itemName }}
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<style lang="less" scoped>
.el-submenu__icon-arrow {
  color: #fff;
}
</style>

<script>
export default {
  name: 'MainNavMenu',
  props: {
    navMenuData: Array
  },
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, path) {
      this.activeIndex = key
      if (key === '1') {
        this.$router.push('/')
      } else {
        this.$router.push('/overview')
      }
    }
  }
}
</script>
