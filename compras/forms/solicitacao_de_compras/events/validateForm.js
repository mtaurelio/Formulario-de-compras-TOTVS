function validateForm(form) {
  let mensagem = "";
  if (form.getValue("nome") == "") {
    mensagem += "Campo nome precisa ser preenchido!";
  }
  if (form.getValue("ramal") == "") {
    mensagem += "Campo ramal precisa ser preenchido!";
  }
  if (form.getValue("setor") == "") {
    mensagem += "Campo setor precisa ser preenchido!";
  }
  if (form.getValue("email") == "") {
    mensagem += "Campo email precisa ser preenchido!";
  }
  if (form.getValue("produto") == "") {
    mensagem += "Campo produto do ponto precisa ser preenchido!";
  }
  if (form.getValue("quantidade") == "") {
    mensagem += "Campo quantidade precisa ser preenchido!";
  }

  // if (responsavel.length == 0) {
  //   mensagem += "Campo Usuário não foi preenchido";
  // }
  if (mensagem != "") {
    throw mensagem;
  }
}
