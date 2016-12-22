$(document).ready(function () {
  var lineGraph = Highcharts.chart('line-graph', {
    title: {
      text: 'Grade Trends for the last month'
    },
    xAxis: {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    },
    yAxis: {
      title: {
        text: 'Grade (%)'
      }
    },
    series: [{
      name: 'Luke Skywalker',
      data: [100, 97, 89, 91]
    },
    {
      name: 'Anakin Skywalker',
      data: [80, 82, 81, 79]
    },
    {
      name: 'Obi Wan Kenobi',
      data: [90, 88, 89, 92]
    }]
  });
  
  var columnChart = Highcharts.chart('column-chart', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Grades for Assignment'
    },
    xAxis: {
      categories: ['Prueba 1', 'Prueba 2', 'Examen 1', 'Prueba 3', 'Prueba 4', 'Examen 2']
    },
    yAxis: {
      title: {
        text: 'Grade (%)'
      }
    },
    series: [{
      name: 'Luke Skywalker',
      data: [100, 70, 84, 62, 79, 87]
    }]
  });

  var stackedColumnChart = Highcharts.chart('stacked-column-chart', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Change in Grades over the Last Week'
        },
        xAxis: {
            categories: ['Luke Skywalker', 'Kylo Ren', 'Mace Windu', 'Obi Wan Kenobi', 'Anakin Skywalker', 'Qui-Gon Ginn']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Grade (%)'
            },
            reversedStacks: false,
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                tooltip: {
                  valueSuffix: '%'
                }
            }
        },
        series: [{
          name: 'Grade',
          data: [70, 50, 100, 80, 15, 90],
          color: '#666'
        },{
          name: 'Increase',
          data: [10, 0, 0, 5, 0, 0],
          color: 'green'
        },{
          name: 'Decrease',
          data: [0, 10, 0, 0, 5, 0],
          color: 'red'
        }]
    });

  var barChart = Highcharts.chart('bar-chart', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Grades for Assignment'
    },
    xAxis: {
      categories: ['Prueba 1', 'Prueba 2', 'Examen 1', 'Prueba 3', 'Prueba 4', 'Examen 2']
    },
    yAxis: {
      title: {
        text: 'Grade (%)'
      }
    },
    series: [{
      name: 'Luke Skywalker',
      data: [100, 70, 84, 62, 79, 87]
    }]
  });
});
