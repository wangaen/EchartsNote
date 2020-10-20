<template>
  <div class="chart2">
    <h2>刻度标签字数过多(换行)</h2>
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
        this.chart = this.$Echarts.init(this.$refs.LeftChart2)
        this.chart.setOption(this.$setOption.homeLeft2(xAxisData,seriesData))
      }
    },
  }
</script>

<style scoped lang="less">
  .chart2{

    h2 {
      font-size: 0.3rem;
      color: #ffffff;
      font-weight: 400;
      margin: 0rem;
      height: 0.6rem;
      text-align: center;
      line-height: 0.6rem;
    }
    .LeftChart2 {
      height: 2.5rem; 
    }
  }
</style>