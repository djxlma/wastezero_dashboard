async function fetchAlimentos() {
  try {
    const response = await fetch("http://localhost:3000/api/alimentos"); // Endpoint do seu servidor
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // Verifique se recebemos dados
    if (data.length > 0) {
      const ultimoAlimento = data[0]; // Pega o primeiro (último) alimento
      const peso = ultimoAlimento.peso_liquido; // Peso líquido

      // Atualiza o card com o peso
      document.getElementById("peso-card").innerText = `${peso} kg`;

      // Atualiza o card com o nome do último alimento
      document.getElementById("ultimo-alimento-card").innerText =
        ultimoAlimento.nome_alimento;
    } else {
      // Se não houver dados
      document.getElementById("peso-card").innerText = `0 kg`;
      document.getElementById(
        "ultimo-alimento-card"
      ).innerText = `Nenhum alimento cadastrado`;
    }
  } catch (error) {
    console.error("Error fetching alimentos:", error);
    // Atualiza os cards em caso de erro
    document.getElementById("peso-card").innerText = `Erro ao carregar peso`;
    document.getElementById(
      "ultimo-alimento-card"
    ).innerText = `Erro ao carregar alimento`;
  }
}

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", fetchAlimentos);
