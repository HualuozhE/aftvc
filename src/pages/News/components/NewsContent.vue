<template>
  <div>
    <el-card class="breadcrumb-card">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>学校新闻</el-breadcrumb-item>
      </el-breadcrumb>
    </el-card>

    <el-card class="box-card">
      <div>
        <h4 class="title">学校召开领导班子对照党章党规找差距专题会</h4>
        <el-row>
          <el-col :span="8">
            日期：2019-11-11
          </el-col>
          <el-col :span="8" style="text-align: center">
            来源： 作者：主题教育办公室
          </el-col>
          <el-col :span="8" style="text-align: right">
            字体：
            <el-button type="primary" circle @click="changeFontSize(14)">
              小
            </el-button>
            <el-button type="success" circle @click="changeFontSize(16)">
              中
            </el-button>
            <el-button type="info" circle @click="changeFontSize(18)">
              大
            </el-button>
          </el-col>
        </el-row>
        <div class="text-content" :style="contentSize">
          <p>{{ content[0] }}</p>
          <img src="~@/assets/images/news-pic.png" />
          <p>{{ content[1] }}</p>
          <p>{{ content[2] }}</p>
          <div class="more">
            <span>阅读：269 次</span>
            <br />
            <span>录入：admin_ybgs</span>
          </div>
        </div>
        <el-backtop :visibility-height="50"></el-backtop>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'NewsContent',
  data() {
    return {
      content: [
        `根据中央、省委部署要求，按照学校“不忘初心、牢记使命”主题教育工作方案的安排，11月8日上午，学校召开“不忘初心 牢记使命”主题教育领导班子对照党章党规找差距专题会，会议由学校党委副书记、校长刘银国主持。党委副书记、副校长汪少清，党委委员、纪委书记何翔，党委委员、副校长胡戴新参加会议，党委委员吴晓光、邓庆安列席会议，省委第十二巡回指导组成员陈玉、陈永到会指导。`,
        `会上，在前期理论学习、交流研讨和调查研究的基础上，刘银国、汪少清、何翔、胡戴新逐条对照《党章》、《准则》、《条例》，聚焦“18个是否”，紧扣实际，从思想、政治、作风、能力、廉政等方面进行了发言，以刀刃向内的自我革命精神，把自己摆进去、把职责摆进去、把工作摆进去，认真剖析原因，并提出整改方向和措施，达到了深化认识、查找差距、明确方向的效果。`,
        `此次对照党章党规找差距专题会为下一步主题教育抓好整改落实奠定了基础。学校领导班子成员表示将不忘初心，勇担使命，进一步增强“四个意识”、坚定“四个自信”、做到“两个维护”，坚持学习不放松，时刻对标对照，努力把遵守党章党规的体现到行动中，真正在政治过硬上作表率、在担当担责上作表率、在转变作风上作表率、在清正廉洁上作表率，从更高的站位去认识学校开展的各项工作，继续落实边学、边查、边改的工作要求，把问题找实、找准、找全，以扎实有效的举措抓好整改落实，为学校的改革发展做出新的贡献，使广大师生共享学校发展成果。`
      ],
      contentSize: {
        fontSize: '16px'
      }
    }
  },
  methods: {
    changeFontSize(size = 16) {
      this.contentSize.fontSize = size + 'px'
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 68px;
}
.breadcrumb-card {
  margin-bottom: 20px;
}
.text-content {
  margin: 30px 0;

  img {
    display: block;
    margin: 20px auto;
  }

  p {
    line-height: 28px;
    text-indent: 2em;
    margin: 14px 0;
  }

  .more {
    float: right;
    line-height: 28px;
    padding-bottom: 20px;
    padding-top: 40px;
  }
}
</style>
