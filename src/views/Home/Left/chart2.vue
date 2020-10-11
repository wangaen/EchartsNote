<template>
  <div class="chart2">
    <h2>就业行业</h2>
    <div class="LeftChart2" ref="LeftChart2">
    </div>
  </div>
</template>

<script>
  export default {
    name : "chart2",
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
  .chart2 {

    h2 {
      font-size: 0.35rem;
      color: #ffffff;
      font-weight: 400;
      margin: 0rem;
      height: 0.65rem;
      text-align: center;
      line-height: 0.65rem;
    }
    .LeftChart2 {
      height: 2.975rem;
      background: gold;
    }
  }
</style>