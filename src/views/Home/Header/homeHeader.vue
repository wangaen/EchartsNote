<template>
  <div class="head">
    <div class="head-left">
      <span>广州市越秀区-晴-35℃</span>
    </div>

    <div class="head-center">
      <span>ECharts-柱状图</span>
    </div>

    <div class="head-right">
      <span>{{dateTime}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  data () {
    return {
      dateTime: '',
      timer: ''
    }
  },
  methods: {
    getDateTime () {
      this.timer = window.setInterval( () => {
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth()+1 > 9 ? date.getMonth()+1 : '0' + (date.getMonth()+1)
        let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
        let hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
        let minute = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()
        let second = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()
        this.dateTime = year + '年' + month + '月' + day + '日' + '  ' + hour + ':' + minute + ':' + second
      },1000)
    }
  },
  mounted() {
    this.getDateTime()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }

}
</script>

<style lang='less'>
  .head{
    height: 1.3rem;
    background: url('../../../assets/image/nav.png') no-repeat center;
    position: relative;
    color: #ffffff;

    .head-center {
      height: 1.3rem;
      font-size: 0.6rem;
      line-height: 1.3rem;
      text-align: center;
    }

    .head-left {
      position: absolute;
      top: 0;
      left: 0.625rem;
      font-size: 0.3rem;
      line-height: 0.85rem;
    }

    .head-right {
      position: absolute;
      top: 0;
      right: 0.625rem;
      font-size: 0.3rem;
      line-height: 0.85rem;
    }
  }
</style>