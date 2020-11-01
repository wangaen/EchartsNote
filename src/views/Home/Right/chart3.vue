<template>
  <div class="chart3">
    <h2>刻度标签字数过多(刻度标签滚动)</h2>
    <div class="chart-main">
      <div class="chart-left">
        <div class="chart-label" v-for="(item,index) in barData" :key="index">
          <span :class="{'if-move-span': ifShowAnimation[index]}">{{item.name}}</span>
        </div>
      </div>
      <div class="RightChart3" ref="RightChart3">
      </div>
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
        ifShowAnimation: [],
        barData: [
          {name: '广东省广州市海珠区赤岗街道测试数据人数', value: 2290},
          {name: '广东省广州市海珠区新港街道测试结果', value: 1999},
          {name: '广东省广州市海珠区江南中街道测试区域', value: 1956},
          {name: '广东省广州市海珠区滨江街道学习人数', value: 2789},
          {name: '广州市海珠区总数', value: 3276},
          {name: '广东省广州市海珠区江海街道', value: 4276},
          {name: '广东省广州市海珠区琶洲街道测试数据汇总', value: 2536},
        ],
      }
    },
    mounted(){
      this.labelSize()
      this.getData()
    },
    methods:{
      getData (){
        let xAxisData = this.barData.map(item => item.name)
        let seriesData = this.barData.map(item => item.value)
        this.chart = this.$Echarts.init(this.$refs.RightChart3)
        this.chart.setOption(this.$setOption.homeRight31(xAxisData, seriesData))
      },
      labelSize() {
        let barData = this.barData
        let len = barData.length
        for (let i=0; i<len; i++) {
          let labelLen = barData[i].name.split('').length
          if (labelLen > 10) {
            this.ifShowAnimation.push(i+1)
          }else {
            this.ifShowAnimation.push('')
          }
        }
      }
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
    .chart-main {
      width: 100%;
      display: flex;

      .chart-left {
        flex: .35;
        height: 2.9rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: #ffffff;
        font-size: 0.2rem;
        margin-right: 0.125rem;
        overflow: hidden;

        .chart-label {
          position: relative;
          height: 0.25rem;
          .if-move-span {
            animation: labelMove 10s linear infinite;
          }
          >span {
            width: 4.125rem;
            position: absolute;
            padding-left: 0.125rem;
            box-sizing: border-box;
          }
        }
      }
      .RightChart3 {
        flex: .65;
        height: 3rem;
      }

      @keyframes labelMove {
        0% {transform: translateX(0%);}
        15% {transform: translateX(0%);}
        85% {transform: translateX(-48%);}
        100% {transform: translateX(-48%);}
      }
    }
  }
</style>