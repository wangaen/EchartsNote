<template>
  <div class="home">
    <div class="home-head">
      <home-head></home-head>
    </div>

    <div class="home-main">
      <div class="left panel-border-top">
        44444444444444
        <div class=" panel-border-bottom"></div>
      </div>

      <div class="center panel-border-top">
        <div class=" panel-border-bottom"></div>
        5444444444444444
      </div>

      <div class="right panel-border-top">
        <div class=" panel-border-bottom"></div>
          544444444444444
      </div>
    </div>
  </div>
</template>

<script>
import homeHead from './Header/homeHeader'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    homeHead
  }

}
</script>

<style lang='less'>
  .home{
    background: url('../../assets/image/背景.png') no-repeat top center;
    height: 12.8rem;
    width: 24rem;

    .home-head {
      margin-bottom: 0.25rem;
    }
    .home-main{
      max-width: 1920px;
      min-width: 1024px;
      margin: 0 auto;
      display: flex;
      box-sizing: border-box;

      .left , .right {
        flex: 3;
        margin: 0rem 0.375rem;
        height: 3.75rem;
        border: 1px solid red;
        box-sizing: border-box;
        padding: 0.125rem;
      }
      .center{
        margin: 0rem 0.375rem;
        flex: 5;
        height: 3.75rem;
        border: 1px solid red;
        box-sizing: border-box;
        padding: 0.125rem;
      }
    }
  }
</style>