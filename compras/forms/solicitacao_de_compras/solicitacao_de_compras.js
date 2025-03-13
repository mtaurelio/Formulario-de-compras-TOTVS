function setStatus(status) {
  document.getElementById("status").value = status;
  document.getElementById("btnAprovado").classList.remove("active");
  document.getElementById("btnReprovado").classList.remove("active");
  if (status === "aprovado") {
    document.getElementById("btnAprovado").classList.add("active");
  } else {
    document.getElementById("btnReprovado").classList.add("active");
  }
}

// CALCULO DA SOLICITAÇÃO
document.addEventListener("DOMContentLoaded", function () {
  const quantidadeInput = document.getElementById("quantidade");
  const totalInput = document.getElementById("total");
  let produtoSelecionado = "";

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
    const quantidade = parseInt(quantidadeInput.value) || 0;
    if (produtoSelecionado && precos[produtoSelecionado]) {
      totalInput.value = (precos[produtoSelecionado] * quantidade).toFixed(2);
    } else {
      totalInput.value = "";
    }
  }

  window.setSelectedZoomItem = function (selectedItem) {
    if (selectedItem.inputId === "produtoZoom") {
      produtoSelecionado = selectedItem.codigo;
      calcularTotal();
    }
  };

  quantidadeInput.addEventListener("input", calcularTotal);
});
