<template>
  <div class="chart1">
    <div class="chart-head">
      <div class="title">
        <h2>多柱展示</h2>
      </div>
      <div class="btn-main">
        <span @click="btnChange(1)" :class="{'btn-bg' : currentIndex === 1}">一</span>
        <span @click="btnChange(2)" :class="{'btn-bg' : currentIndex === 2}">二</span>
        <span @click="btnChange(3)" :class="{'btn-bg' : currentIndex === 3}">三</span>
      </div>
    </div>
    <div class="RightChart1" ref="RightChart1">
    </div>
  </div>
</template>

<script>
import resizeChart from '../../../utils/js/resizeChart'
export default {
    name : "chart1",
    mixins: [resizeChart],
    data(){
      return {
        chart: '',
        barData: [
          {name: '赤岗街道', value: 2290, value1: 3290},
          {name: '新港街道', value: 1999, value1: 1339},
          {name: '昌岗街道', value: 1087, value1: 1999},
          {name: '滨江街道', value: 2789, value1: 1899},
          {name: '素社街道', value: 2276, value1: 2499},
          {name: '海幢街道', value: 3000, value1: 3099},
          {name: '华洲街道', value: 2816, value1: 2099},
          {name: '官洲街道', value: 2446, value1: 1119},
        ],
        currentIndex: 1,
        xAxisData: null,
        seriesData1: null,
        seriesData2: null,
      }
    },
    mounted(){
      this.myEchart()
    },
    methods:{
      myEchart (){
        this.xAxisData = this.barData.map(item => item.name)
        this.seriesData1 = this.barData.map(item => item.value)
        this.seriesData2 = this.barData.map(item => item.value1)
        this.chart = this.$Echarts.init(this.$refs.RightChart1)
        this.chart.setOption(this.$setOption.homeRight11(this.xAxisData,this.seriesData1,this.seriesData2))
      },
      btnChange (value) {
        this.currentIndex = value
        switch(value) {
          case 1:
            this.chart.clear() //清空实例中的所有组件和图表,防止出现图表错乱
            this.chart.off('legendselectchanged') // 解绑由‘图表二’余留的全局的‘点击图例’事件
            this.chart.setOption(this.$setOption.homeRight11(this.xAxisData,this.seriesData1,this.seriesData2), true)
            break;
          case 2:
            this.chart.clear() //清空实例中的所有组件和图表,防止出现图表错乱
            this.chart.setOption(this.$setOption.homeRight12(this.xAxisData,this.seriesData1,this.seriesData2, this.chart), true)
            break;
          case 3:
            this.chart.clear() //清空实例中的所有组件和图表,防止出现图表错乱
            this.chart.off('legendselectchanged') // 解绑由‘图表二’余留的全局的‘点击图例’事件
            let data2 = []
            for (let i=0; i<this.seriesData2.length; i++) {
              data2.push(-this.seriesData2[i])
            }
            this.chart.setOption(this.$setOption.homeRight13(this.xAxisData,this.seriesData1,data2), true)
            break;
        }
      },
    },
  }
</script>

<style scoped lang="less">
  .chart1{
    .chart-head {
      display: flex;
      justify-content: space-between;

      h2 {
      display: inline-block;
      font-size: 0.375rem;
      margin: 0 0 0 0.25rem;
      color: #ffffff;
      font-weight: 400;
      text-align: left;
      line-height: 0.6rem;
      }
      .btn-main {
        display: flex;
        justify-content: center;
        align-items: center;
        >span {
          cursor:pointer;
          font-size: 0.1875rem;
          font-weight: 550;
          color: #FFFFFF;
          background-color: rgba(0, 255, 252, 0.2);
          display: inline-block;
          height: 0.375rem;
          line-height: 0.375rem;
          font-family: PingFang SC;
          text-align: center;
          width: 0.6875rem;
          border-radius: 0.0625rem
        }
        >span:nth-child(2){
          margin: 0 0.25rem;
        }
        .btn-bg {
          background-color: rgba(0, 255, 252, 0.6);
        }
      }
    }
    .RightChart1 {
      height: 2.8125rem;
    }
  }
</style>