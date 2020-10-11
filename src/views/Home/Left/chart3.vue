<template>
  <div class="chart3">
    <h2>就业行业</h2>
    <div class="LeftChart3" ref="LeftChart3">
    </div>
  </div>
</template>

<script>
  export default {
    name : "chart3",
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
  .chart3{

    h2 {
      font-size: 0.35rem;
      color: #ffffff;
      font-weight: 400;
      margin: 0rem;
      height: 0.65rem;
      text-align: center;
      line-height: 0.65rem;
    }
    .LeftChart3 {
      height: 2.975rem;
      background: gold;
    }
  }
</style>