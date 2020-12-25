$.ajax({
    url: "https://sossimon.pythonanywhere.com/profiteintr%C3%A4ge",
    type: "GET", /* or type:"GET" or type:"PUT" */
    dataType: "json",
    success: function(result){
        console.log(result);
    }
});
Highcharts.getJSON(
    'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json',
    function (data) {

        Highcharts.chart('container', {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'USD to EUR exchange rate over time'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                    'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'USD to EUR',
                data: [[1607040000000, 0.06], [1607126400000, 0.13], [1607212800000, 0.12], [1607299200000, 0.28], [1607385600000, 0.6], [1607472000000, 0.52], [1607558400000, 0.09], [1607644800000, 0.16], [1607731200000, 0.55], [1607817600000, 0.04], [1607904000000, 0.17], [1607990400000, 0.01], [1608076800000, 0.01], [1608163200000, 0.4], [1608249600000, -0.18], [1608336000000, 0.63], [1608422400000, 0.27], [1608508800000, 1.25], [1608595200000, 0.4], [1608681600000, 0.51], [1608768000000, 0.8]]
            }]
        });
    }
);