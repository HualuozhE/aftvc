<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ headerTitle }}</span>
      <el-button style="float: right; padding: 0" type="text">More</el-button>
    </div>
    <div v-for="(item, index) of list" :key="index" class="news-list">
      <router-link to="/news">
        <el-link type="primary" class="title">
          {{ item.title }}
        </el-link>
      </router-link>
      <el-link type="info" class="date">【{{ item.date }}】</el-link>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
.news-list {
  line-height: 28px;

  .date {
    float: right;
  }
  .fa-line-chart {
    color: #f56c6c;
  }
}
</style>

<script>
export default {
  name: 'NewsList',
  props: {
    headerTitle: {
      type: String,
      default: '学校新闻'
    },
    list: {
      type: Array,
      default: () => [
        {
          title: '这是一条新闻',
          date: '2019年11月22日'
        }
      ]
    }
  }
}
</script>
