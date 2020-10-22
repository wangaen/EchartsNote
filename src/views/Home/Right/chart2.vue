<template>
  <div class="chart2">
    <h2>数据过多(水平滚动)</h2>
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
        dataLength: 0,
        xAxisData: '',
        seriesData: '',
        timer: ''
      }
    },
    mounted(){
      this.getData()
      this.startTime()
    },
    methods:{
      getData (){
        this.xAxisData = this.barData.map(item => item.name)
        this.dataLength = this.xAxisData.length
        this.seriesData = this.barData.map(item => item.value)
        this.chart = this.$Echarts.init(this.$refs.RightChart2)
        this.chart.setOption(this.$setOption.homeRight2(this.xAxisData,this.seriesData))
      },
      myEchart() {
        this.chart = this.$Echarts.init(this.$refs.RightChart2)
        this.chart.setOption(this.$setOption.homeRight2(this.xAxisData,this.seriesData,this.start,this.end))
      },
      startTime(){
        this.timer = setInterval( () => {
          if (this.dataLength > 5) {
            if (this.end === this.dataLength - 5) {
              this.end = 0;
              this.start = 0;
            }else {
              this.end = this.end + 1;
              this.start = this.start + 1;
            }
            this.myEchart()
          }else {
            this.stopInterval()
          }
        }, 2000)
      },
      stopInterval(){
        clearInterval(this.timer)
      }
    },
    beforeDestroy(){
      this.stopInterval()
    }
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
    .RightChart2 {
      height: 2.8125rem;
    }
  }
</style>