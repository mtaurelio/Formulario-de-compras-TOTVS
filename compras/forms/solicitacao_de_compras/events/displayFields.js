function displayFields(form, customHTML) {
  var usuarioCorrente = getValue("WKUser"); // Obtém o usuário logado
  var atividadeCorrente = getValue("WKNumState"); // Obtém a atividade atual do workflow

  // Definição dos usuários responsáveis
  var usuarioSolicitante = "academy.aluno"; // Login do solicitante
  var usuarioAprovador = "academy.aurelio.matheus"; // Login do gestor/aprovador

  // Bloqueia os campos de solicitação se o usuário não for o solicitante
  if (usuarioCorrente != usuarioSolicitante) {
    form.setEnabled("nome", false);
    form.setEnabled("setor", false);
    form.setEnabled("ramal", false);
    form.setEnabled("email", false);
    form.setEnabled("produto", false);
    form.setEnabled("quantidade", false);
    form.setEnabled("info", false);
  }

  // Bloqueia o campo de aprovação e desativa os botões se o usuário não for o gestor
  if (usuarioCorrente != usuarioAprovador) {
    form.setEnabled("status", false);

    // Desabilita os botões via JavaScript no HTML
    customHTML.append("<script>");
    customHTML.append(
      "document.getElementById('btnAprovado').disabled = true;"
    );
    customHTML.append(
      "document.getElementById('btnReprovado').disabled = true;"
    );
    customHTML.append("</script>");
  }
}
