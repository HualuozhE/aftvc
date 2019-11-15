<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="姓名" width="400"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Leader',
  data() {
    return {
      tableData: [
        {
          name: '刘银国',
          date: '2019-3-21'
        },
        {
          name: '汪少清',
          date: '2019-3-21'
        },
        {
          name: '何翔',
          date: '2019-3-21'
        },
        {
          name: '胡戴新',
          date: '2019-3-21'
        },
        {
          name: '罗虹',
          date: '2019-10-9'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped></style>
