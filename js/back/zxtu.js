/**http://www.jq22.com/demo/jquery-tubiao20151015/ */

var chart;
$(document).ready(function() {
//折线图示例
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'containerzx',          //放置图表的容器
            plotBackgroundColor: null,
            plotBorderWidth: null,
            defaultSeriesType: 'line'   
        },
        title: {
            text: '每年分月借阅统计'
        },
        subtitle: {
            text: '2012-16年'
        },
        xAxis: {//X轴数据
            categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            labels: {
                rotation: 0, //字体倾斜
                align: 'right',
                style: { font: 'normal 13px' }
            }
        },
        yAxis: {//Y轴显示文字
            title: {
                text: '数量/本'
            }
        },
        tooltip: {
            enabled: true,
            formatter: function() {
                return this.series.name + '年<br/>' + '<b>' + this.x + '月：</b>' + Highcharts.numberFormat(this.y, 1)+'本';
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: true//是否显示title
            }
        },
        series: [{
            name: '12-13',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 5, 3, 5, 6]
        }, {
            name: '13-14',
            data: [5, 2, 1, 6, 7, 3, 8, 0, 3, 4, 8, 3]
        }, {
            name: '14-15',
            data: [3, 2, 0, 3, 5, 8, 5, 0, 3, 7, 3, 6]
        }, {
            name: '15-16',
            data: [4, 5, 2, 7, 9, 3, 0, 0, 0, 0, 0, 0]
		}]
    });
});