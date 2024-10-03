// Função para buscar os dados do servidor
async function fetchData() {
  const response = await fetch("http://localhost:3000/alimentos");
  const data = await response.json();

  return data;
}

// Função para configurar e renderizar o gráfico
async function renderChart() {
  const data = await fetchData();

  const labels = data.map((item) => item.nome_alimento);
  const receitas = data.map((item) => item.receita);
  const custos = data.map((item) => item.custo_kg);
  const prejuizos = data.map((item) => item.prejuizo);

  const ctx1 = document.getElementById("line-chart").getContext("2d");
  const ctx2 = document.getElementById("line-chart-2").getContext("2d");

  new Chart(ctx1, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Receita",
          data: receitas,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  new Chart(ctx2, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Custos",
          data: custos,
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          fill: true,
        },
        {
          label: "Prejuízo",
          data: prejuizos,
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Chamar a função para renderizar os gráficos
renderChart();
