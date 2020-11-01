<template>
  <div class="areaMap">
    <div class="map"></div>
    <div class="grid"></div>
    <div class="rotate"></div>
    <div class="myChart" ref="centerChart1"></div>
  </div>
</template>

<script>
  export default {
    name : "areaMap" ,
    data(){
      return {
        chart: null,
      }
    },

    components:{},

    created(){},

    mounted(){
      this.charts()
    },

    methods:{
      charts() {
        this.chart = this.$Echarts.init(this.$refs.centerChart1)
        this.chart.setOption(this.$setOption.homeCenter())
      }
    },
  }
</script>

<style scoped lang="less">
  .areaMap{
    height: 8.875rem;
    position: relative;
    overflow: hidden;
    .map {
      height: 8rem;
      width: 8rem;
      background: url('../../../assets/image/map.png') no-repeat;
      background-size: 100% 100%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0.3;
      margin: auto;
    }
    .grid {
      height: 9.0375rem;
      width: 9.0375rem;
      position: absolute;
      background: url('../../../assets/image/grid.png');
      background-size: 100% 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.6;
      // 添加动画: 自定义动画名称 动画时间 匀速 无限循环运行动画
      animation: rotateGrid 15s linear infinite; 
    }
    .rotate {
      height: 9.075rem;
      width: 9.075rem;
      position: absolute;
      background: url('../../../assets/image/rotate.png');
      background-size: 100% 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.8;
      // 添加动画: 自定义动画名称 动画时间 匀速 无限循环运行动画
      animation: rotateRotate 10s linear infinite; 
    }
    .myChart {
      position: absolute;
      height: 8.875rem;
      width: 100%;
    }
    @keyframes rotateGrid {
      form {
        transform: translate(-50%, 50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }

    @keyframes rotateRotate {
      form {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      to {
        transform: translate(-50%, -50%) rotate(-360deg);
      }
    }
  }
</style>