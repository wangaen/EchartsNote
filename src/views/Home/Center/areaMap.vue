<template>
  <div class="areaMap">
    <div class="map"></div>
    <div class="grid"></div>
    <div class="rotate"></div>
    <div class="myChart"></div>
  </div>
</template>

<script>
  export default {
    name : "areaMap" ,
    data(){
      return {}
    },

    components:{},

    created(){},

    mounted(){},

    methods:{},
  }
</script>

<style scoped lang="less">
  .areaMap{
    height: 8.875rem;
    position: relative;
    .map {
      height: 6.475rem;
      width: 6.475rem;
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
      height: 8.0375rem;
      width: 8.0375rem;
      position: absolute;
      background: url('../../../assets/image/grid.png') no-repeat;
      background-size: 100% 100%;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      opacity: 0.6;
      // 添加动画: 自定义动画名称 动画时间 匀速 无限循环运行动画
      animation: rotateGrid 15s linear infinite; 
    }
    .rotate {
      height: 7.075rem;
      width: 7.075rem;
      position: absolute;
      background: url('../../../assets/image/rotate.png') no-repeat;
      background-size: 100% 100%;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
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
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes rotateRotate {
      form {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
  }
</style>