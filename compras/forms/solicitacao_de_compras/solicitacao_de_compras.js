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
