const graph = document.getElementById('graph-chart');

const chart = new Chart(graph, {
  type: 'line',
  data: {
    labels: ['5Nov', '6Nov', '7Nov', '8Nov', '9Nov', '10Nov','11Nov','12Nov','13Nov', '14Nov', '15Nov'],
    datasets: [{
      label: 'Bitcoin',
      data: [120, 600, 250, 260, 100, 400, 210, 300, 700, 150, 430],
      borderColor: '#1970D6',
      fill: false,
      tension: 0.30
    },{
      label: 'Ethereum',
      data: [210, 300, 500, 700, 600, 400, 450, 590, 500, 690, 400],
      borderColor: '#4D91A5',
      fill: false,
      tension: 0.30
    },
    {
      label: 'Litecoin',
      data: [0, 0, 0, 0, 110, 400, 450, 200, 170, 400, 500],
      borderColor: '#592795',
      fill: false,
      tension: 0.30
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  }
});

const menu = document.querySelector('.c-left')
const burger = document.querySelector('#burger')
burger.addEventListener('click', () => {
  menu.style.display = 'block'
})

const cross = document.querySelector('#cross')

cross.addEventListener('click', () => {
  menu.style.display = 'none'
})