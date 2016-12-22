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
