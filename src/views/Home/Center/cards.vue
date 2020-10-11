<template>
  <div class="cards">
    <h2>学习ECharts人数分布情况</h2>
    <div class="main-cards">
      <div class="card1">
        <span class="font-one">20k</span>
        <span>前端必学人数</span>
      </div>
      <div class="card2">
        <span class="font-one">100k</span>
        <span>前端必学人数</span>
      </div>
      <div class="card3">
        <span class="font-one">990</span>
        <span>单纯想理解人数</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : "cards" ,
    props:{},

    data(){
      return {}
    },

    created(){},

    mounted(){},

    computed:{},

    methods:{}
  }
</script>

<style scoped lang="less">
  .cards{
    height: 2.3125rem;
    width: 9rem;
    h2 {
      color: #ffffff;
      margin: 0; 
      font-weight: 400;
      line-height: 0.6rem;
      height: 0.6rem;
      text-align: center;
      font-size: 0.3rem;
      background: url('../../../assets/image/cards-title.png') no-repeat;
      background-size: 100% 100%;
    }
    .main-cards {
      display: flex;
      justify-content: space-between;
      color: #ffffff;
      margin-top: 0.25rem;
      .card1 {
        width: 2.85rem;
        height: 1.325rem;
        box-sizing: border-box;
        padding: 0rem 0rem 0.1875rem 0.625rem;
        background: url('../../../assets/image/center-left.png') no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        >span:nth-child(2) {
          font-size: 0.25rem;
          color: #ffffff;
        }
      }
      .card2 {
        width: 2.925rem;
        height: 1.325rem;
        box-sizing: border-box;
        padding: 0rem 0rem 0.1875rem 0rem;
        background: url('../../../assets/image/center-center.png') no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        >span:nth-child(2) {
          font-size: 0.25rem;
          color: #ffffff;
        }
      }
      .card3 {
        width: 2.8375rem;
        height: 1.325rem;
        box-sizing: border-box;
        padding: 0rem 0.5rem 0.1875rem 0rem;
        background: url('../../../assets/image/center-right.png') no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        >span:nth-child(2) {
          font-size: 0.25rem;
          color: #ffffff;
        }
      }
    }
  }
</style>