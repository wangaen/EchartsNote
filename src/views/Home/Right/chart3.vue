<template>
  <div class="chart3">
    <h2>数据过多(竖直滚动)</h2>
    <div class="RightChart3" ref="RightChart3">
    </div>
  </div>
</template>

<script>
import resizeChart from '../../../utils/js/resizeChart'
export default {
    name : "chart3",
    mixins: [resizeChart],
    data(){
      return {
        chart: null,
        barData: [
          {name: '广州市海珠区赤岗街道', value: 2290},
          {name: '广州市海珠区新港街道', value: 1999},
          {name: '广州市海珠区昌岗街道', value: 1087},
          {name: '广州市海珠区江南中街道', value: 1956},
          {name: '广州市海珠区滨江街道', value: 2789},
          {name: '广州市海珠区素社街道', value: 3276},
          {name: '广州市海珠区江海街道', value: 4276},
          {name: '广州市海珠区琶洲街道', value: 2536},
          {name: '广州市海珠区南洲街道', value: 2616},
          {name: '广州市海珠区华洲街道', value: 2816},
          {name: '广州市海珠区官洲街道', value: 2446},
          {name: '广州市海珠区海幢街道', value: 3000},
        ],
        start: 0,
        end: 0,
        dataLen:0,
        timer: null,
        xAxisData: null,
        seriesData: null,
      }
    },
    mounted(){
      this.getData()
    },
    methods:{
      getData (){
        this.xAxisData = this.barData.map(item => item.name)
        this.seriesData = this.barData.map(item => item.value)
        this.dataLen = this.xAxisData.length
        this.chart = this.$Echarts.init(this.$refs.RightChart3)
        this.chart.setOption(this.$setOption.homeRight31())
      },
    }
  }
</script>

<style scoped lang="less">
  .chart3{

    h2 {
      font-size: 0.3rem;
      color: #ffffff;
      font-weight: 400;
      margin: 0rem;
      height: 0.6rem;
      text-align: center;
      line-height: 0.6rem;
    }
    .RightChart3 {
      height: 2.8125rem;
    }
  }
</style>