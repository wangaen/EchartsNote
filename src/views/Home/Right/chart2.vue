<template>
  <div class="chart2">
    <h2>多图结合</h2>
    <div class="RightChart2" ref="RightChart2">
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
          {name: '广州市', value: 2290, value1: 3290},
          {name: '深圳市', value: 1999, value1: 1339},
          {name: '佛山市', value: 1087, value1: 1999},
          {name: '东莞市', value: 2789, value1: 1899},
          {name: '惠州市', value: 2276, value1: 2499},
          {name: '湛江市', value: 3000, value1: 3099},
          {name: '茂名市', value: 2816, value1: 2099},
          {name: '汕头市', value: 2446, value1: 1119},
        ],
        xAxisData: '',
        seriesData1: '',
        seriesData2: '',
        timer: ''
      }
    },
    mounted(){
      this.getData()
    },
    methods:{
      getData (){
        this.xAxisData = this.barData.map(item => item.name)
        this.seriesData1 = this.barData.map(item => item.value)
        this.seriesData2 = this.barData.map(item => item.value1)
        this.chart = this.$Echarts.init(this.$refs.RightChart2)
        this.chart.setOption(this.$setOption.homeRight21(this.xAxisData,this.seriesData1,this.seriesData2))
      },
    }
  }
</script>

<style scoped lang="less">
  .chart2{

    h2 {
      font-size: 0.375rem;
      margin: 0 0 0 0.25rem;
      color: #ffffff;
      font-weight: 400;
      text-align: left;
      line-height: 0.6rem;
    }
    .RightChart2 {
      height: 3rem;
    }
  }
</style>