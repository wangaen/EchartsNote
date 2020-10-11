<template>
  <div class="chart1">
    <h2>就业行业</h2>
    <div class="LeftChart1" ref="LeftChart1">
    </div>
  </div>
</template>

<script>
  export default {
    name : "chart1",
    data(){
      return {}
    },
    components:{},

    created(){},

    mounted(){},

    computed:{},

    methods:{},

    watch:{},
  }
</script>

<style scoped lang="less">
  .chart1{

    h2 {
      font-size: 0.3rem;
      color: #ffffff;
      font-weight: 400;
      margin: 0rem;
      height: 0.6rem;
      text-align: center;
      line-height: 0.6rem;
    }
    .LeftChart1 {
      height: 2.5rem;
      background: gold;
    }
  }
</style>