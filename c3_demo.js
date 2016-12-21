$(document).ready(function() {
  var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['Luke Skywalker', 90, 87, 90, 94, 92, 89],
        ['Obi Wan Kenobi', 50, 50, 60, 40, 15, 25]
      ]
    },
    axis: {
      y: {
        label: {
          text: 'Grade (%)',
          position: 'outer-middle'
        }
      },
      x: {
        label: {
          text: 'Week Number',
          position: 'outer-middle'
        }
      }
    }
  });

  var chart2 = c3.generate({
    bindto: '#chart2',
    data: {
      json: [
        {assignment_name: 'Prueba 1', score: 50},
        {assignment_name: 'Prueba 2', score: 50},
        {assignment_name: 'Examen 1', score: 60},
        {assignment_name: 'Prueba 3', score: 40},
        {assignment_name: 'Prueba 4', score: 15},
        {assignment_name: 'Examen 2', score: 80}
      ],
      type: 'bar',
      keys: {
        x: 'assignment_name',
        value: ['assignment_name', 'score']
      }
    },
    axis: {
      y: {
        max: 100,
        min: 0,
        padding: {top: 0, bottom: 0},
        label: {
          text: 'Grade (%)',
          position: 'outer-middle'
        }
      },
      x: {
        type: 'category',
        label: {
          text: 'Asisgnments',
          position: 'outer-middle'
        }
      }
    }
  });
});
