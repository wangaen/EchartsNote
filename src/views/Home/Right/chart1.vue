<template>
  <div class="chart1">
    <h2>刻度标签字数过多(竖直)</h2>
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
          {name: '广州市海珠区赤岗街道', value: 2290},
          {name: '广州市海珠区新港街道', value: 1999},
          {name: '广州市海珠区昌岗街道', value: 1087},
          {name: '广州市海珠区江南中街道', value: 1956},
          {name: '广州市海珠区滨江街道', value: 2789},
          {name: '广州市海珠区素社街道', value: 2276},
          {name: '广州市海珠区海幢街道', value: 3000},
        ]
      }
    },
    mounted(){
      this.myEchart()
    },
    methods:{
      myEchart (){
        let xAxisData = this.barData.map(item => item.name)
        let seriesData = this.barData.map(item => item.value)
        this.chart = this.$Echarts.init(this.$refs.RightChart1)
        this.chart.setOption(this.$setOption.homeRight1(xAxisData,seriesData))
      }
    },
  }
</script>

<style scoped lang="less">
  .chart1{
    h2 {
      font-size: 0.3rem;
      color: #ffffff;
      font-weight: 400;
      margin: 0rem;
      height: 0.6rem;
      text-align: center;
      line-height: 0.6rem;
    }
    .RightChart1 {
      height: 2.8125rem;
    }
  }
</style>