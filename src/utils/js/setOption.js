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

function homeLeft21 (xAxisData, seriesData) {
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
                  {offset: 0, color: '#FF46D7'},
                  {offset: 1, color: '#FF8DB5'}
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

function homeLeft22 (xAxisData, seriesData, start=-1, end=-1) {
  // 定义dataZoomData对象，为点击滚动时备用
  let dataZoomData = {
    type: 'slider',
    show: false,
    xAxisIndex: 0,
    startValue: start,
    endValue: 6 + end,
  }
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
      // 传入 start 是启动滚动效果
      dataZoom: start === -1 ? null : dataZoomData,
      // 提示框组件相关设置
      tooltip:{
        trigger:'item',
        axisPointer:{
          type:'shadow'
        },
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
                  {offset: 0, color: '#FF6C00'},
                  {offset: 1, color: '#FCD400'}
              ]
            ),
            barBorderRadius: [5, 5, 0, 0]
          },
          label: {
            show: true,
            rotate: 0,
            align: 'left',
            verticalAlign: 'bottom',
            position: 'bottom',
            distance: 0,
            offset: [17,-8],
            // 设置刻度标签与数据值
            formatter: function (params) {
              return params.name.split('').join('\n')
            },
            fontSize: 13,
            color: '#ffffff'
          },
          data: seriesData
        },
        {
          type: 'bar',
          barMaxWidth:10,
          barGap: '-100%',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#FF6C00'},
                {offset: 1, color: '#FCD400'}
              ]
            ),
            barBorderRadius: [5, 5, 0, 0]
          },
          label: {
            show: true,
            position: 'top',
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

function homeLeft23 (xAxisData, seriesData) {
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
                  {offset: 0, color: '#3FFFE2'},
                  {offset: 1, color: '#64FFC4'}
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

function homeLeft32 (xAxisData, seriesData, start=0, end=0) {
  let yAxisSecond = seriesData.slice(start , 7 + end)
  let maxData = JSON.parse(JSON.stringify(seriesData)).sort((a,b) => b-a)[0]
  let shadowData = []
  for (let i=0; i<seriesData.length; i++) {
    shadowData.push(maxData)
  }
  let option = {

      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: [
        { 
          data: xAxisData,
          inverse: true,
          axisLabel: {
            textStyle: {
              color: '#fff'
            },
            interval: 0,
            fontSize: 14
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        {
          data: yAxisSecond,
          inverse: true,
          axisLabel: {
            textStyle: {
              color: '#fff'
            },
            interval: 0,
            fontSize: 14
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
      ],
      dataZoom: {
        type: 'slider',
        show: false,
        yAxisIndex: 0,
        startValue: start,
        endValue: 6 + end,
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
          barMaxWidth:12,
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
          data: seriesData,
          z:20
        },
        {
          type: 'bar',
          barMaxWidth:12,
          barGap: '-100%',
          itemStyle: {
            barBorderRadius: [5, 5, 5, 5],
            color: 'rgba(256,256,256,0.2)'
          },
          data: shadowData,
          z: 10
        }
      ],
      grid: {
        left: '1%',
        right: '1%',
        bottom: '-5%',
        top: '2%',
        containLabel: true
      },
      //全局的字体样式
      textStyle:{
        color: '#FFFFFF'
      },
  };
  return option
}

function homeRight11 (xAxisData, seriesData1, seriesData2) {
  let option = {
      legend: {
        data: ['熟悉' , '精通'],
        top: '-1%',
        itemGap: 70,
        icon: 'circle',
        itemWidth: 20,
        itemHeight: 20,
        textStyle: {
          color: '#FFF'
        }
      },
      xAxis: {
        data: xAxisData,
        axisLabel: {
          textStyle: {
            color: '#fff'
          },
          interval: 0,
          fontSize: 13,
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
        },
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
          name: '熟悉',
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
            barBorderRadius: [5,5,0,0]
          },
          label: {
             offset:[-8,0], 
             show: true, 
             position: 'top'
          },
          data: seriesData1
        },
        { 
          name: '精通',
          type: 'bar',
          barMaxWidth:10,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                  {offset: 0, color: '#3AEEE5'},
                  {offset: 1, color: '#34F0B5'}
              ]
            ),
            barBorderRadius: [5, 5, 0, 0]
          },
          label: {
             offset:[8,0], 
             show: true, 
             position: 'top' 
          },
          data: seriesData2
        }
      ],
      grid: {
        left: '1%',
        right: '1%',
        bottom: '0%',
        top: '20%',
        containLabel: true
      },
      //全局的字体样式
      textStyle:{
        color: '#FFFFFF'
      },
  };
  return option
}

function homeRight12 (xAxisData, seriesData1, seriesData2,myChart) {
  let option = {
      legend: {
        data: ['一般' , '熟悉' , '精通'],
        top: '-1%',
        itemGap: 70,
        icon: 'circle',
        itemWidth: 20,
        itemHeight: 20,
        textStyle: {
          color: '#FFF'
        }
      },
      xAxis: {
        data: xAxisData,
        axisLabel: {
          textStyle: {
            color: '#fff'
          },
          interval: 0,
          fontSize: 13,
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
          name: '一般',
          type: 'bar',
          barMaxWidth:10,
          stack: '总量',
          label: {
            show: false,
            position: 'top',
          },
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#FF6C00'},
                {offset: 1, color: '#FCD400'}
            ]
            ),
            barBorderRadius: [0, 0, 0, 0]
          },
          data: seriesData1
        },
        { 
          name: '熟悉',
          type: 'bar',
          barMaxWidth:10,
          label: {
            show: false,
            position: 'top',
          },
          stack: '总量',
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
            barBorderRadius: [0, 0, 0, 0]
          },
          data: seriesData1
        },
        { 
          name: '精通',
          type: 'bar',
          barMaxWidth:10,
          stack: '总量',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                  {offset: 0, color: '#3AEEE5'},
                  {offset: 1, color: '#34F0B5'}
              ]
            ),
            barBorderRadius: [5, 5, 0, 0]
          },
          label: {
            show: true,
            position: 'top',
          },
          data: seriesData2
        }
      ],
      grid: {
        left: '1%',
        right: '1%',
        bottom: '2%',
        top: '20%',
        containLabel: true
      },
      //全局的字体样式
      textStyle:{
        color: '#FFFFFF'
      },
  };  

//求出堆叠后的总数
  let series = option['series']
  function sumData(params) {
    let sumValue = 0
    // 每一组堆叠的数据相加
    for (let i=0; i<series.length; i++) {
      sumValue += series[i].data[params.dataIndex]
    }
    //返回新的每一组堆叠的总数据
    return sumValue
  }
  // 改变最后一个series的label,在最后显示
  series[series.length - 1]['label']['formatter'] = sumData

  //添加 点击图例事件， 从而改变总数
  myChart.on( 'legendselectchanged', function(obj) {
    let selected = obj.selected //点击图例后，保存所有图例的状态
    let showLegend = [] //保存未关闭的图例的所有data
    for (let k in selected) { //遍历
      if(selected[k]) { //那个图例未关闭
        for (let i=0; i<series.length; i++) {
          if (series[i]['name'] === k) {
            showLegend.push(series[i]['data'])
          }
        }
      }
    }

    var fun1 = function (params) {
      let newSumValue = 0
      // 每一组堆叠的数据相加
      for (let i=0; i<showLegend.length; i++) {
        newSumValue += showLegend[i][params.dataIndex]
      }
      //返回新的每一组堆叠的总数据
      return newSumValue
    }
    // 全部关闭显示label
    for (let i=0; i<series.length; i++) {
      series[i]['label']['show'] = false
    }
    // 从最后一个series往期找，直到找到一个与未关闭的图例名字相同（就是找最后一个未关闭的图例）
    for (let i=series.length - 1; i>=0; i--) {
      var name = series[i]["name"];
      if (obj["selected"][name]) {
        series[i]["label"]["formatter"] = fun1
        series[i]["label"]["show"] = true
        series[i]["itemStyle"]["barBorderRadius"] = [5,5,0,0]
        // 防止多次点击图例后柱子堆叠时柱子中间出现圆角
        for (let j=0; j<i; j++) {
          series[j]["itemStyle"]["barBorderRadius"] = [0,0,0,0]
        }
        break;
      }
    }
    myChart.setOption(option);
  })

  return option
}

function homeRight13 (xAxisData, seriesData1, seriesData2) {
  let option = {
      legend: {
        data: ['男' , '女'],
        top: '-1%',
        itemGap: 70,
        icon: 'circle',
        itemWidth: 20,
        itemHeight: 20,
        textStyle: {
          color: '#FFF'
        }
      },
      xAxis: {
        data: xAxisData,
        axisLabel: {
          textStyle: {
            color: '#fff'
          },
          interval: 0,
          fontSize: 13,
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
        },
        formatter: function(params) {
          let htmlStr = '';
          for(let i=0; i<params.length; i++){
            let param = params[i];
            let xName = param.name;//x轴的名称
            let seriesName = param.seriesName;//图例名称
            let value = Math.abs(param.value);//y轴值
            let color = param.color['colorStops'][0].color;//图例颜色
            
            if(i===0){
              htmlStr += xName + '<br/>';//x轴的名称
            }
            //为了保证和原来的效果一样，这里自己实现了一个点的效果
            htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:'+color+';"></span>';
            //圆点后面显示的文本
            htmlStr += seriesName + '：' + value + '<br/>';
          }
          return htmlStr;
        }
      },
      yAxis: {
        axisLabel: {
          textStyle: {
            color: '#FFFFFF'
          },
          formatter: function(params) {
            return Math.abs(params)
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
          name: '男',
          type: 'bar',
          stack: '总量',
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
            barBorderRadius: [5,5,0,0]
          },
          label: {
             offset:[-8,0], 
             show: true, 
             position: 'top'
          },
          data: seriesData1
        },
        { 
          name: '女',
          type: 'bar',
          stack: '总量',
          barMaxWidth:10,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                  {offset: 0, color: '#3AEEE5'},
                  {offset: 1, color: '#34F0B5'}
              ]
            ),
            barBorderRadius: [0, 0, 5, 5]
          },
          label: {
             offset:[8,0], 
             show: true, 
             position: 'bottom',
            formatter: function(params) {
              return Math.abs(params.value)
            }
          },
          data: seriesData2
        }
      ],
      grid: {
        left: '1%',
        right: '1%',
        bottom: '0%',
        top: '20%',
        containLabel: true
      },
      //全局的字体样式
      textStyle:{
        color: '#FFFFFF'
      },
  };
  return option
}

function homeRight21 (xAxisData, seriesData1, seriesData2) {
  let option = {
      legend: {
        data: ['已具备技能' , '实际使用'],
        top: '-1%',
        itemGap: 70,
        icon: 'circle',
        itemWidth: 20,
        itemHeight: 20,
        textStyle: {
          color: '#FFF'
        }
      },
      xAxis: {
        data: xAxisData,
        axisLabel: {
          textStyle: {
            color: '#fff'
          },
          interval: 0,
          fontSize: 13,
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
        },
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
          name: '已具备技能',
          type: 'bar',
          barMaxWidth:10,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#FF6C00'},
                {offset: 1, color: '#FCD400'}
              ]
            ),
            barBorderRadius: [5,5,0,0]
          },
          data: seriesData1
        },
        { 
          name: '实际使用',
          type: 'line',
          symbolSize: 8,
          itemStyle: {
            color: '#FF46D7',
            borderColor: "#000",
          },
          data: seriesData2
        }
      ],
      grid: {
        left: '1%',
        right: '1%',
        bottom: '0%',
        top: '20%',
        containLabel: true
      },
      //全局的字体样式
      textStyle:{
        color: '#FFFFFF'
      },
  };
  return option
}

function homeRight31 () {
  let option = {
    color: ['#d333e1'],
    tooltip: {},
    xAxis3D: {
        name: 'X轴',
        type: 'category',
        data: ['1', '2','3', '4','5', '6'],
        axisLine:{
            lineStyle:{
                color:'#888',
                width:2
            }
        },
    },
    yAxis3D: {
        name: 'Y轴',
        type: 'category',
        data: [''],
        axisLine:{
            lineStyle:{
                color:'#888',
                width:2
            }
        },
    },
    zAxis3D: {
        name: 'Z轴',
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'#888',
                width:2
            }
        },
    },
    grid3D: {
        boxWidth: 200,
        boxDepth: 40,
        axisPointer: {
            show: false
        },
        light: {
            main: {
                intensity: 1.2
            },
            ambient: {
                intensity: 0.3
            }
        },
        viewControl: {
            autoRotate: false,
            alpha: 15, //控制场景平移旋转
            beta: 5,
        }
    },
    series: [
        {
            type: 'bar3D',
            name:'1',
            barSize: 15,
            data: [
                [0, 0, 1200],
                [1, 0, 1560],
                [2, 0, 1890],
                [3, 0, 2400],
                [4, 0, 6000],
                [5, 0, 5000],
            ],
            shading: 'lambert',
            emphasis: {
                label: {
                    show: true
                }
            }
        }
    ]
  };
  return option
}

export default {
  homeLeft1, homeLeft21, homeLeft22, homeLeft23, homeLeft32, homeRight11, homeRight12, homeRight13,
  homeRight21,homeRight31
}