<template>
  <div>
    <el-row>
      <el-col :span="9">
        <el-card :body-style="cardBodyStyle" shadow="hover">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">当前时间</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6"> 1</el-col>
      <el-col :span="9">
        <el-card :body-style="cardBodyStyle" shadow="hover" class="last-card">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">当前时间</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.el-card {
  &:hover {
    transform: translateY(-8px);
  }
  &.last-card {
    margin-left: auto;
  }
}
</style>

<script>
export default {
  name: 'RelatedLink',
  data() {
    return {
      cardBodyStyle: {
        padding: 0
      }
    }
  }
}
</script>
