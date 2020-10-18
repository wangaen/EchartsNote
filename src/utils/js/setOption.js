import echarts from 'echarts'

function EasyBar (xAxisData, seriesData) {
    let option = {
        xAxis: {
          data: xAxisData,
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle:{
                color: '#FFFFFF'
            }
          }
        },
        tooltip:{
          trigger:'axis',
          axisPointer:{
            type:'shadow'
          }
        },
        yAxis: {
          axisLabel: {
            textStyle: {
              color: '#FFFFFF'
            }
          },
          axisTick:{
            show:false
          },
          axisLine:{
            lineStyle:{
              color: '#FFFFFF'
            }
          },
          splitLine:{
            show:true,
            lineStyle:{
              color: 'rgba(256,256,256,0.2)'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barMaxWidth:10,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: '#81DD5F'},
                    {offset: .33, color: '#83DE5F'},
                    {offset: .66, color: '#BEF25C'},
                    {offset: 1, color: '#D5EF2D'}
                ]
              ),
              barBorderRadius: [5, 5, 0, 0]
            },
            data: seriesData
          }
        ],
        grid: {
          left: '1%',
          right: '1%',
          bottom: '5%',
          top: '10%',
          containLabel: true
        },
        textStyle:{
          color: '#FFFFFF'
        },
    };
    return option
}

export default {EasyBar}