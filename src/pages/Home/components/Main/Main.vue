<template>
  <div>
    <el-row type="flex" justify="space-between" class="news">
      <el-col :span="12">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item>
            <a href="#">
              <img src="@/assets/images/carousel-1.jpg" />
            </a>
          </el-carousel-item>
          <el-carousel-item>
            <a href="#">
              <img src="@/assets/images/carousel-2.jpg" />
            </a>
          </el-carousel-item>
          <el-carousel-item>
            <a href="#">
              <img src="@/assets/images/carousel-3.jpg" />
            </a>
          </el-carousel-item>
          <el-carousel-item>
            <a href="#">
              <img src="@/assets/images/carousel-4.jpg" />
            </a>
          </el-carousel-item>
          <el-carousel-item>
            <a href="#">
              <img src="@/assets/images/carousel-5.jpg" />
            </a>
          </el-carousel-item>
          <el-carousel-item>
            <a href="#">
              <img src="@/assets/images/carousel-6.jpg" />
            </a>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="11">
        <news-list headerTitle="学校要闻" :list="newsOne"></news-list>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-between">
      <el-col :span="12">
        <news-list headerTitle="通知公告" :list="newsTwo"></news-list>
      </el-col>
      <el-col :span="11">
        <news-list headerTitle="部门动态" :list="newsThree"></news-list>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <school-shadow></school-shadow>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.el-carousel img {
  width: 100%;
}

.el-row {
  margin-top: 20px;
}

.el-row:nth-of-type(1) {
  margin-top: 0;
}
</style>

<script>
import NewsList from '@/commonComponents/NewsList'
import SchoolShadow from '@/commonComponents/SchoolShadow'

export default {
  name: 'homeMain',
  data() {
    return {
      newsOne: [
        {
          title: '学校获第六届中国零售新星大赛总决赛二等奖',
          date: '2019-11-12'
        },
        {
          title: '以时代楷模为标杆 坚守初心履行使命',
          date: '2019-11-12'
        },
        {
          title: '学校晓庄班举办2017级毕业典礼暨优秀实习生表彰大会',
          date: '2019-11-11'
        },
        {
          title: '学校举办2019年辅导员精彩主题班会比赛',
          date: '2019-11-11'
        },
        {
          title: '学校召开领导班子对照党章党规找差距专题会',
          date: '2019-11-11'
        },
        {
          title: '学校承办1+X智能财税职业技能等级证书全国师资培训',
          date: '2019-11-11'
        }
      ],
      newsTwo: [
        {
          title: '转发安徽财贸职业学院行知管理学院第二实训室建设项目公',
          date: '2019-11-13'
        },
        {
          title: '转发安徽财贸职业学院大数据分析与管理决策信息平台设备',
          date: '2019-11-12'
        },
        {
          title: '关于选送第五批入驻“三创中心”创业项目的通知',
          date: '2019-11-11'
        },
        {
          title: '关于2019-2020学年度学院助学金初审名单的公示',
          date: '2019-11-06'
        },
        {
          title: '关于2019-2020学年度国家助学金初审名单的公示',
          date: '2019-11-06'
        },
        {
          title: '关于2020届毕业生借还图书的通知',
          date: '2019-11-04'
        }
      ],
      newsThree: [
        {
          title: '大位会计学院团总支开展主题教育系列活动',
          date: '2019-11-13'
        },
        {
          title: '宾虹艺术学院举办毕业生求职心理调试及职业道德教育讲座',
          date: '2019-11-12'
        },
        {
          title: '第十六期高管进课堂（三）：从“两康”事件谈审计',
          date: '2019-11-12'
        },
        {
          title: '茂荫财金学院全方位多举措推进毕业生就业创业服务工作',
          date: '2019-11-12'
        },
        {
          title: '朱熹文旅学院举办2019级大学生迎新晚会',
          date: '2019-11-12'
        },
        {
          title: '雪岩贸易学院举办2020届毕业生顶岗实习欢送晚会',
          date: '2019-11-12'
        }
      ]
    }
  },
  components: {
    NewsList,
    SchoolShadow
  }
}
</script>
