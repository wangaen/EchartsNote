<template>
  <div class="chart2">
    <div class="chart-head">
      <div class="title">
        <h2>刻度标签字数过多</h2>
      </div>
      <div class="btn-main">
        <span @click="btnChange(1)" :class="{'btn-bg' : currentIndex === 1}">换行</span>
        <span @click="btnChange(2)" :class="{'btn-bg' : currentIndex === 2}">竖直1</span>
        <span @click="btnChange(3)" :class="{'btn-bg' : currentIndex === 3}">竖直2</span>
      </div>
    </div>
    <div class="LeftChart2" ref="LeftChart2">
    </div>
  </div>
</template>

<script>
import resizeChart from '../../../utils/js/resizeChart'
export default {
    name : "chart2",
    mixins: [resizeChart],
    data(){
      return {
        chart: null,
        currentIndex:1,
        barData: [
          {name: '广州市海珠区赤岗街道', value: 2290},
          {name: '广州市海珠区新港街道', value: 1999},
          {name: '广州市海珠区昌岗街道', value: 1087},
          {name: '广州市海珠区江南中街道', value: 456},
          {name: '广州市海珠区滨江街道', value: 2789},
          {name: '广州市海珠区素社街道', value: 756},
          {name: '广州市海珠区海幢街道', value: 4000},
        ],
        xAxisData: null,
        seriesData: null
      }
    },
    mounted(){
      this.myEchart()
    },
    methods:{
      myEchart (){
        this.xAxisData = this.barData.map(item => item.name)
        this.seriesData = this.barData.map(item => item.value)
        this.chart = this.$Echarts.init(this.$refs.LeftChart2)
        this.chart.setOption(this.$setOption.homeLeft21(this.xAxisData,this.seriesData))
      },
      btnChange (value) {
        this.currentIndex = value
        switch(value) {
          case 1:
            this.chart.clear() //清空实例中的所有组件和图表,防止出现图表错乱
            this.chart.setOption(this.$setOption.homeLeft21(this.xAxisData,this.seriesData))
            break;
          case 2:
            this.chart.clear() //清空实例中的所有组件和图表,防止出现图表错乱
            this.chart.setOption(this.$setOption.homeLeft22(this.xAxisData,this.seriesData))
            break;
          case 3:
            this.chart.clear() //清空实例中的所有组件和图表,防止出现图表错乱
            this.chart.setOption(this.$setOption.homeLeft23(this.xAxisData,this.seriesData))
            break;
        }
      }
    },
  }
</script>

<style scoped lang="less">
  .chart2{
    .chart-head {
      display: flex;
      justify-content: space-between;

      h2 {
      display: inline-block;
      margin: 0 0 0 0.25rem;
      font-size: 0.375rem;
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
          width: 0.75rem;
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

    .LeftChart2 {
      // border: 1px solid yellow;
      height: 3rem;
    }
  }
</style>