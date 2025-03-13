// Observação: O fluig só aceita datasets que contenham no minimo DOIS CAMPOS para funcionar, ou seja, tive que acrescentar um ID para cada setor para o funcionamento dele

function defineStructure() {}

function onSync(lastSyncDate) {}

function createDataset(fields, constraints, sortFields) {
  var datasetSetor = DatasetBuilder.newDataset();

  // Definir as colunas
  datasetSetor.addColumn("cc");
  datasetSetor.addColumn("setor");

  // Adicionar os setores
  datasetSetor.addRow(["100", "Administrativo"]);
  datasetSetor.addRow(["101", "Financeiro"]);
  datasetSetor.addRow(["102", "Recursos Humanos"]);
  datasetSetor.addRow(["103", "Faturamento"]);
  datasetSetor.addRow(["104", "TI"]);
  datasetSetor.addRow(["105", "Comercial"]);
  datasetSetor.addRow(["106", "Marketing"]);
  datasetSetor.addRow(["107", "Logística"]);

  return datasetSetor;
}

function onMobileSync(user) {}
