import echarts from 'echarts'

function homeLeft1 (xAxisData, seriesData) {
    let option = {
        xAxis: {
          data: xAxisData,
          axisLabel: {
            textStyle: {
              color: '#fff'
            },
            fontSize: 13
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
            label: {
              show: true,
              position: 'top'
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
        //全局的字体样式
        textStyle:{
          color: '#FFFFFF'
        },
    };
    return option
}

function homeLeft2 (xAxisData, seriesData) {
  let option = {
    // x轴相关设置
      xAxis: {
        data: xAxisData,
        //刻度标签
        axisLabel: {
          interval: 0,
          fontSize: 13,
          //刻度标签换行
          formatter: function (value) {
            let name = value.split('')
            let dataLen = name.length
            if (dataLen > 8) {
              return name.slice(0,4).join('') + '\n' + name.slice(4,8).join('') + '\n' + name.slice(8,dataLen).join('')
            }else {
              return name.slice(0,dataLen/2).join('') + '\n' + name.slice(dataLen/2,dataLen).join('')
            }
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
    // 提示框组件相关设置
      tooltip:{
        trigger:'axis',
        axisPointer:{
          type:'shadow'
        }
      },
    // y轴相关设置
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
      // 系列样式相关设置
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
          label: {
            show: true,
            position: 'top'
          },
          data: seriesData
        }
      ],
      // 图表大小，位置相关设置
      grid: {
        left: '1%',
        right: '1%',
        bottom: '5%',
        top: '10%',
        containLabel: true
      },
      //全局的字体样式
      textStyle:{
        color: '#FFFFFF'
      },
  };
  return option
}

function homeLeft3 (xAxisData, seriesData) {
  let option = {
    // x轴相关设置
      xAxis: {
        data: xAxisData,
        //刻度标签
        axisLabel: {
          interval: 0,
          show: false,
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
    // 提示框组件相关设置
      tooltip:{
        trigger:'axis',
        axisPointer:{
          type:'shadow'
        }
      },
    // y轴相关设置
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
      // 系列样式相关设置
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
          label: {
            show: true,
            rotate: 0,
            align: 'left',
            verticalAlign: 'middle',
            position: 'right',
            distance: 0,
            offset: [-25,-58],
            // 设置刻度标签与数据值
            formatter: function (params) {
              let value = params.value
              let valueStr = (''+value).split('')
              let name = params.name.split('')
              let dataLen = name.length
              let newName = ''
              let kouge = ''
              // 确定相隔几个空格
              for (let j=0; j<valueStr.length + 1; j++) {
                kouge = kouge + '  '
              }
              for(let i=0; i<dataLen; i++) {
                if (i === 1) {
                  newName = newName + value + '  ' + name[i] + "\n";
                }else {                   
                  newName = newName + kouge+ name[i] + "\n";
                }
              }
              return  newName
            },
            fontSize: 13,
            color: '#ffffff'
          },
          data: seriesData
        }
      ],
      // 图表大小，位置相关设置
      grid: {
        left: '1%',
        right: '1%',
        bottom: '3%',
        top: '25%',
        containLabel: true
      },
      //全局的字体样式
      textStyle:{
        color: '#FFFFFF'
      },
  };
  return option
}

function homeRight1 (xAxisData, seriesData) {
  let option = {
      xAxis: {
        data: xAxisData,
        axisLabel: {
          textStyle: {
            color: '#fff'
          },
          interval: 0,
          fontSize: 13,
          align: 'center',
          formatter: function (value) {
            let name = value.split('')
            let dataLen = name.length
            let leftName = name.slice(0,Math.round(dataLen/2))
            let rightName = name.slice(Math.round(dataLen/2),dataLen)
            let leftIndex = 0
            let rightIndex = 0
            for(let i=0; i<dataLen; i++) {
              if (i % 2 === 0) {
                name[i] = leftName[leftIndex]
                leftIndex ++
              }else {
                name[i] = rightName[rightIndex]
                rightIndex ++
              }
            }
            for(let j=0; j<dataLen; j++) {
              if(j % 2 !== 0) {
                name[j] = name[j] + '\n'
              }
            }
            // 为了居中显示，使用空格在最后占位
            name[dataLen-1] = name[dataLen-1] + '    '
            return name.join('')
          },
          rotate: 0
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
          label: {
            show: true,
            position: 'top'
          },
          data: seriesData
        }
      ],
      grid: {
        left: '1%',
        right: '1%',
        bottom: '0%',
        top: '10%',
        containLabel: true
      },
      //全局的字体样式
      textStyle:{
        color: '#FFFFFF'
      },
  };
  return option
}

function homeRight2 (xAxisData, seriesData, start=0, end=0) {
  let option = {
      xAxis: {
        data: xAxisData,
        axisLabel: {
          textStyle: {
            color: '#fff'
          },
          interval: 0,
          fontSize: 13,
          formatter: function (value) {
            let name = value.split('')
            let dataLen = name.length
            let leftName = name.slice(0,Math.round(dataLen/2))
            let rightName = name.slice(Math.round(dataLen/2),dataLen)
            return leftName.join('') + '\n' + rightName.join('')
          },
          rotate: 0
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
      dataZoom: {
        type: 'slider',
        show: false,
        xAxisIndex: 0,
        startValue: start,
        endValue: 4 + end,
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
          label: {
            show: true,
            position: 'top'
          },
          data: seriesData
        }
      ],
      grid: {
        left: '1%',
        right: '1%',
        bottom: '0%',
        top: '10%',
        containLabel: true
      },
      //全局的字体样式
      textStyle:{
        color: '#FFFFFF'
      },
  };
  return option
}

function homeRight3 (xAxisData, seriesData) {
  let option = {

      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        data: xAxisData,
        axisLabel: {
          textStyle: {
            color: '#fff'
          },
          fontSize: 13
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      tooltip:{
        trigger:'axis',
        axisPointer:{
          type:'shadow'
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
            barBorderRadius: [5, 5, 5, 5]
          },
          label: {
            show: true,
            position: 'right'
          },
          data: seriesData
        }
      ],
      grid: {
        left: '1%',
        right: '8%',
        bottom: '-5%',
        top: '5%',
        containLabel: true
      },
      //全局的字体样式
      textStyle:{
        color: '#FFFFFF'
      },
  };
  return option
}

export default {
  homeLeft1, homeLeft2, homeLeft3, homeRight1, homeRight2, homeRight3
}