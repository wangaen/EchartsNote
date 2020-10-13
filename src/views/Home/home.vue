<template>
  <div class="home">
    <div class="home-head">
      <home-head></home-head>
    </div>

    <div class="home-main">
      <!-- 左边模块 -->
      <div class="left">
        <div class="main-panel">
          <div class="panel-border-top">
            <left-chart1></left-chart1>
            <div class=" panel-border-bottom"> </div>
          </div>
        </div>

        <div class="main-panel">
          <div class="panel-border-top">
            <left-chart2></left-chart2>
            <div class=" panel-border-bottom"> </div>
          </div>
        </div>

        <div class="main-panel">
          <div class="panel-border-top">
            <left-chart3></left-chart3>
            <div class=" panel-border-bottom"> </div>
          </div>
        </div>
      </div>

      <!-- 中间模块 -->
      <div class="center">
        <div class="center-top">
          <cards></cards>
        </div>
        <area-Map></area-Map>
      </div>
      
      <!-- 右边模块 -->
      <div class="right">
        <div class="main-panel">
          <div class="panel-border-top">
            <left-chart1></left-chart1>
            <div class=" panel-border-bottom"> </div>
          </div>
        </div>

        <div class="main-panel">
          <div class="panel-border-top">
            <left-chart2></left-chart2>
            <div class=" panel-border-bottom"> </div>
          </div>
        </div>

        <div class="main-panel">
          <div class="panel-border-top">
            <left-chart3></left-chart3>
            <div class=" panel-border-bottom"> </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import homeHead from './Header/homeHeader'
import leftChart1 from './Left/chart1'
import leftChart2 from './Left/chart2'
import leftChart3 from './Left/chart3'
import areaMap from './Center/areaMap'
import cards from './Center/cards'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    homeHead,
    leftChart1,
    leftChart2,
    leftChart3,
    areaMap,
    cards,
  }

}
</script>

<style lang='less'>
  .home{
    background: url('../../assets/image/main-back.png') no-repeat top center;
    height: 12.8rem;
    width: 24rem;

    .home-head {
      margin-bottom: 0.125rem;
    }
    .home-main{
      max-width: 1920px;
      margin: 0 auto;
      display: flex;
      box-sizing: border-box;

      .left , .right {
        flex: 5.5;
        margin: 0rem 0.25rem;
        box-sizing: border-box;
      }
      .center{
        margin: 0rem;
        flex: 8;
        box-sizing: border-box;
        padding: 0rem 0.125rem 0.125rem 0.125rem;
        .center-top {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
</style>