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
          position: 'outer-center'
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
          text: 'Assignments',
          position: 'outer-center'
        }
      }
    }
  });

  var chart3 = c3.generate({
    bindto: '#chart3',
    data: {
      json: [
        {student_name: 'Luke Skywalker', grade: 70, increase: 10},
        {student_name: 'Kylo Ren', grade: 50, decrease: 10},
        {student_name: 'Mace Windu', grade: 100},
        {student_name: 'Obi Wan Kenobi', grade: 80, increase: 5},
        {student_name: 'Anakin Skywalker', grade: 15, decrease: 5},
        {student_name: 'Qui-Gon Ginn', grade: 90}
      ],
      keys: {
        x: 'student_name',
        value: ['grade', 'increase', 'decrease']
      },
      type: 'bar',
      order: 'asc',
      groups: [
        ['grade', 'increase', 'decrease']
      ],
      colors: {
        grade: '#999999',
        increase: 'green',
        decrease: 'red'
      }
    },
    grid: {
      y: {
        lines: [{value:68, text: 'Passing Grade'}]
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
          text: 'Students',
          position: 'outer-center'
        }
      }
    }
  });

  var chart4 = c3.generate({
    bindto: '#chart4',
    data: {
      json: [
        { 'On time': 250, 'Late': 40, 'Missing': 10 }
      ],
      keys: {
        value: ['On time', 'Late', 'Missing']
      },
      type: 'donut',
      colors: {
        'Late': 'red',
        'Missing': 'black'
      }
    },
  });
});
