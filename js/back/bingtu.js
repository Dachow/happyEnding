  
  /**http://www.jq22.com/demo/jquery-tjt-150628192104/ */
  // 路径配置

        require.config({

            paths: {

                'echarts': 'echarts',

                'echarts/chart/pie': 'echarts'

            }

        });



        // 使用

        require(

            [

                'echarts',

                'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载

            ],

            function(ec) {

                // 基于准备好的dom，初始化echarts图表

                var myChart = ec.init(document.getElementById('main'));

                var option = {

                    title: {

                        text: '借阅分类',

                        subtext: '',

                        x: 'center'

                    },

                    tooltip: {

                        trigger: 'item',

                        formatter: "{a} <br/>{b} : {c} ({d}%)"

                    },

                    legend: {

                        orient: 'vertical',

                        x: 'left',

                        data: ['工业技术', '语言、文字', '自然科学', '历史、地理', '数理科学']

                    },

                    toolbox: {

                        show: true,

                        feature: {

                            mark: {
                                show: false
                            },

                            dataView: {
                                show: true,
                                readOnly: false
                            },

                            restore: {
                                show: true
                            },

                            saveAsImage: {
                                show: true
                            }

                        }

                    },

                    calculable: true,

                    series: [

                        {

                            name: '借阅分类',

                            type: 'pie',

                            radius: '55%',

                            center: ['50%', '60%'],

                            data: [

                                {
                                    value: 34,
                                    name: '工业技术'
                                },

                                {
                                    value: 32,
                                    name: '语言、文字'
                                },

                                {
                                    value: 20,
                                    name: '自然科学'
                                },

                                {
                                    value: 11,
                                    name: '历史、地理'
                                },

                                {
                                    value: 52,
                                    name: '数理科学'
                                }

                            ]

                        }

                    ]

                };

                myChart.setOption(option);

            }

        );