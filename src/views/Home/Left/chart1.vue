<template>
  <div class="chart1">
    <h2>常见柱状图</h2>
    <div class="LeftChart1" ref="LeftChart1">
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
          {name: '周日', value: 2290},
          {name: '周一', value: 1999},
          {name: '周二', value: 1087},
          {name: '周三', value: 1956},
          {name: '周四', value: 2789},
          {name: '周五', value: 2276},
          {name: '周六', value: 3000},
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
        this.chart = this.$Echarts.init(this.$refs.LeftChart1)
        this.chart.setOption(this.$setOption.homeLeft1(xAxisData,seriesData))
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
    .LeftChart1 {
      height: 2.5rem; 
    }
  }
</style>