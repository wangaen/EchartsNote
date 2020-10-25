<template>
  <div class="chart3">
    <div class="chart-head">
      <div class="title">
        <h2>数据过多</h2>
      </div>
      <div class="btn-main">
        <span @click="btnChange(1)" :class="{'btn-bg' : currentIndex === 1}">水平滚动</span>
        <span @click="btnChange(2)" :class="{'btn-bg' : currentIndex === 2}">竖直滚动</span>
      </div>
    </div>
    <div class="LeftChart3" ref="LeftChart3">
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
        currentIndex: 1,
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
        this.chart = this.$Echarts.init(this.$refs.LeftChart3)
        this.chart.setOption(this.$setOption.homeLeft22(this.xAxisData,this.seriesData,this.start,this.end))
      },
      myEchart () {
        if (this.currentIndex === 1) {
          this.chart.setOption(this.$setOption.homeLeft22(this.xAxisData,this.seriesData,this.start,this.end))
        }else {
          this.chart.setOption(this.$setOption.homeLeft32(this.xAxisData,this.seriesData,this.start,this.end))
        }
      }, 
      startTime(){
        this.timer = setInterval( () => {
          if (this.dataLength > 7) {
            if (this.end === this.dataLength - 7) {
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
      },
      btnChange (value) {
        this.currentIndex = value
        switch(value) {
          case 1:
            this.end = 0;
            this.start = 0;
            this.stopInterval()
            this.chart.clear() //清空实例中的所有组件和图表,防止出现图表错乱
            this.chart.setOption(this.$setOption.homeLeft22(this.xAxisData,this.seriesData,this.start,this.end))
            this.startTime()
            break;
          case 2:
            this.end = 0;
            this.start = 0;
            this.stopInterval()
            this.chart.clear() //清空实例中的所有组件和图表,防止出现图表错乱
            this.chart.setOption(this.$setOption.homeLeft32(this.xAxisData,this.seriesData,this.start,this.end))
            this.startTime()
            break;
        }
      }
    },
    beforeDestroy(){
      this.stopInterval()
    }
  }
</script>

<style scoped lang="less">
  .chart3{
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
          width: 0.875rem;
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
    .LeftChart3 {
      height: 2.8125rem;
    }
  }
</style>