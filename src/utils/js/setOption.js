function bar1 () {
  return {
    tooltip: {
        trigger: 'axis',
        borderWidth: 5,
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(58, 238, 229, 1)'
            }
        },
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        axisLabel: {
            show: true,
            color: '#FFFFFF'
        },
        boundaryGap: true,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'FFFFFF'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#FFFFFF'
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 1)'
            }
        }

    },
    grid: {
        left: '2%',
        bottom: '3%',
        right: '4%',
        containLabel: true
    },
    series: [{
        type: 'bar',
        barWidth: 12,
        data: [120, 200, 150, 80, 70, 110, 130],
    }]
}
}

export default {bar1}