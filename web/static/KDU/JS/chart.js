// var chartData = [
//     {
//         date: '2012-01',
//         distance: 227,
//         townName: 'New York',
//         townName2: 'New York',
//         townSize: 25,
//         latitude: 40.71,
//         duration: 408,
//     }
// ];

//연도별 데이터
var chartData = [];
$.ajax({
    url: 'static/KDU/data/visitors_data.csv',
    success: function (data) {
        var data = data.split('\r\n');
        var check = data[1].split('-')[0];
        var YearPackage = [];

        for (let i = 1; i < data.length - 1; i++) {
            var d = data[i].split(',');
            var year = d[0].split('-')[0];

            if (check != year) {
                chartData.push(YearPackage);
                YearPackage = [];
                check = year;
            }

            YearPackage.push({
                date: 20 + d[0],
                visitNum: Math.round(Number(d[2]) / 50000),
            });
        }

        if (YearPackage.length > 0) {
            chartData.push(YearPackage);
        }

        chartLoading(chartData[4]);
    },
});

//월별 데이터
var MonthData = {};
$.ajax({
    url: 'static/KDU/data/visitors_Daily_data.csv',
    success: function (data) {
        var data = data.split('\r\n');
        var check = data[1].substr(0, 6);
        var MonthPackage = [];

        for (let i = 1; i < data.length - 1; i++) {
            var d = data[i].split(',');
            var year = d[0].substr(0, 6);

            if (check != year) {
                MonthData[check] = MonthPackage;
                MonthPackage = [];
                check = year;
            }

            MonthPackage.push({
                date: d[0].substr(4, 2) + '-' + d[0].substr(6),
                visitNum: Math.round(Number(d[2]) / 5),
            });
        }

        if (MonthPackage.length > 0) {
            MonthData[check] = MonthPackage;
        }
    },
});

function chartLoading(chartData) {
    AmCharts.makeChart('chartdiv', {
        type: 'serial',
        theme: 'light',
        dataDateFormat: 'YYYY-MM',
        dataProvider: chartData,

        addClassNames: true,
        startDuration: 1,
        color: '#000000',
        marginLeft: 0,

        categoryField: 'date',
        categoryAxis: {
            parseDates: true,
            minPeriod: 'MM',
            autoGridCount: false,
            gridCount: 50,
            gridAlpha: 0.1,
            gridColor: '#000000',
            axisColor: '#555555',
            dateFormats: [
                {
                    period: 'MM',
                    format: 'MMM',
                },
                {
                    period: 'YYYY',
                    format: 'YYYY',
                },
            ],
        },

        valueAxes: [
            {
                id: 'a1',
                title: '',
                gridAlpha: 0,
                axisAlpha: 0,
            },
        ],

        graphs: [
            {
                id: 'g1',
                valueField: 'visitNum',
                title: '방문자 수 : ',
                type: 'column',
                fillAlphas: 0.9,
                valueAxis: 'a1',
                balloonText: '[[value]] 만명',
                legendValueText: '[[value]] 만명',
                legendPeriodValueText: '[[value.sum]] 만명 (전체)',
                lineColor: '#f99f99',
                alphaField: 'alpha',
            },
            {
                id: 'g2',
                valueField: 'visitNum',
                title: '눌러서 토글하세요',
                type: 'line',
                // valueAxis: 'a2',
                lineColor: '#f6695f',
                balloonText: '',
                lineThickness: 2,
                legendValueText: ' ',
                bullet: 'square',
                bulletBorderColor: '#f99f99',
                bulletBorderThickness: 1,
                bulletBorderAlpha: 1,
                dashLengthField: 'dashLength',
                animationPlayed: true,
            },
        ],

        chartCursor: {
            zoomable: false,
            cursorAlpha: 0,
            valueBalloonsEnabled: false,
            categoryBalloonDateFormat: 'MMM월, YYYY년',
        },

        legend: {
            bulletType: 'round',
            equalWidths: false,
            valueWidth: 120,
            useGraphSettings: true,
            color: '#000000',
        },
    });
}

function MonthchartLoading(MonthData) {
    AmCharts.makeChart('chartdiv', {
        type: 'serial',
        theme: 'light',
        dataDateFormat: 'MM-DD',
        dataProvider: MonthData,

        addClassNames: true,
        startDuration: 1,
        color: '#000000',
        marginLeft: 0,

        categoryField: 'date',
        categoryAxis: {
            parseDates: true,
            minPeriod: 'DD',
            autoGridCount: false,
            gridCount: 50,
            gridAlpha: 0.1,
            gridColor: '#000000',
            axisColor: '#555555',
            dateFormats: [
                {
                    period: 'DD', 
                    format: 'DD'
                },
                {
                    period: 'MM',
                    format: 'MMM',
                }
            ],
        },

        valueAxes: [
            {
                id: 'a1',
                title: '',
                gridAlpha: 0,
                axisAlpha: 0,
            },
        ],

        graphs: [
            {
                id: 'g1',
                valueField: 'visitNum',
                title: '방문자 수 : ',
                type: 'column',
                fillAlphas: 0.9,
                valueAxis: 'a1',
                balloonText: '[[value]] 명',
                legendValueText: '[[value]] 명',
                legendPeriodValueText: '[[value.sum]] 명 (전체)',
                lineColor: '#f99f99',
                alphaField: 'alpha',
            },
            {
                id: 'g2',
                valueField: 'visitNum',
                title: '눌러서 토글하세요',
                type: 'line',
                // valueAxis: 'a2',
                lineColor: '#f6695f',
                balloonText: '',
                lineThickness: 2,
                legendValueText: ' ',
                bullet: 'square',
                bulletBorderColor: '#f99f99',
                bulletBorderThickness: 1,
                bulletBorderAlpha: 1,
                dashLengthField: 'dashLength',
                animationPlayed: true,
            },
        ],

        chartCursor: {
            zoomable: false,
            cursorAlpha: 0,
            valueBalloonsEnabled: false,
            categoryBalloonDateFormat: 'DD일, MMM월',
        },

        legend: {
            bulletType: 'round',
            equalWidths: false,
            valueWidth: 120,
            useGraphSettings: true,
            color: '#000000',
        },
    });
}