function generateRandomData() {
    const data = [];
    for (let i = 0; i < 6; i++) {
      data.push(Math.floor(Math.random() * 100)); // gerar um número aleatório entre 0 e 100
    }
    return data;
  }

const ctx = document.getElementById('line-chart').getContext('2d');
const ctx2 = document.getElementById('line-chart-2').getContext('2d');

const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Vendas',
      data: generateRandomData(),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Vendas por mês'
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const chart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Lucro Bruto',
      data: generateRandomData(),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      stack: 'lucro'
    }, {
      label: 'Despesas',
      data: generateRandomData(),
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
      stack: 'lucro'
    }, {
      label: 'Consumo',
      data: generateRandomData(),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      stack: 'lucro'
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Lucro por mês'
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

setInterval(() => {
    chart.data.datasets[0].data = generateRandomData();
    chart.update();
  }, 9000);

  