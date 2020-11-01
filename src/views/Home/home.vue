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
            <right-chart1></right-chart1>
            <div class=" panel-border-bottom"> </div>
          </div>
        </div>

        <div class="main-panel">
          <div class="panel-border-top">
            <right-chart2></right-chart2>
            <div class=" panel-border-bottom"> </div>
          </div>
        </div>

        <div class="main-panel">
          <div class="panel-border-top">
            <right-chart3></right-chart3>
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
import rightChart1 from './Right/chart1'
import rightChart2 from './Right/chart2'
import rightChart3 from './Right/chart3'
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
    rightChart1,
    rightChart2,
    rightChart3,
    areaMap,
    cards,
  }

}
</script>

<style lang='less'>
  .home{
    background: url('../../assets/image/main-back.png') no-repeat top center;
    background-size: 100% 100%;
    height: 13.5rem;
    width: 24rem;

    .home-main{
      max-width: 1920px;
      height: 11.875rem;
      margin: 0 auto;
      padding-bottom: 0.25rem;
      display: flex;
      box-sizing: border-box;

      .left , .right {
        flex: 5.5;
        margin: 0rem 0.25rem;
        display: flex;
        flex-direction: column;
        // border: 1px solid red;
        justify-content: space-between;
        box-sizing: border-box;

      }
      .center{
        margin: 0rem;
        // border: 1px solid blue;
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