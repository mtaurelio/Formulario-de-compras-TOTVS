function setStatus(status) {
  document.getElementById("status").value = status;

  // Remove estilos ativos de ambos os botões
  document.getElementById("btnAprovado").classList.remove("active");
  document.getElementById("btnReprovado").classList.remove("active");

  // Adiciona a classe "active" ao botão clicado
  if (status === "aprovado") {
    document.getElementById("btnAprovado").classList.add("active");
  } else {
    document.getElementById("btnReprovado").classList.add("active");
  }
}

// CALCULO DA SOLICITAÇÃO
document.addEventListener("DOMContentLoaded", function () {
  const produtoSelect = document.getElementById("produto");
  const quantidadeInput = document.getElementById("quantidade");
  const totalInput = document.getElementById("total");

  // Lista de preços dos produtos
  const precos = {
    "001": 150.0,
    "002": 120.0,
    "003": 850.0,
    "004": 4500.0,
    "005": 900.0,
    "006": 300.0,
    "007": 400.0,
    "008": 1.0,
    "009": 0.9,
    "010": 30.0,
  };

  function calcularTotal() {
    const produtoSelecionado = produtoSelect.value;
    const quantidade = parseInt(quantidadeInput.value) || 0;

    if (produtoSelecionado && precos[produtoSelecionado]) {
      const total = precos[produtoSelecionado] * quantidade;
      totalInput.value = total.toFixed(2);
    } else {
      totalInput.value = "";
    }
  }

  // Atualizar total quando mudar o produto ou a quantidade
  produtoSelect.addEventListener("change", calcularTotal);
  quantidadeInput.addEventListener("input", calcularTotal);
});
