function defineStructure() {}
function onSync(lastSyncDate) {}
function createDataset(fields, constraints, sortFields) {
  var dataset = DatasetBuilder.newDataset();

  // Definir as colunas
  dataset.addColumn("codigo");
  dataset.addColumn("descricao");
  dataset.addColumn("preco");

  // Adicionar os produtos
  dataset.addRow(["001", "Teclado Logitech", "150.00"]);
  dataset.addRow(["002", "Mouse Logitech", "120.00"]);
  dataset.addRow(["003", "Monitor 24''", "850.00"]);
  dataset.addRow(["004", "Notebook Dell", "4500.00"]);
  dataset.addRow(["005", "Cadeira escritório", "900.00"]);
  dataset.addRow(["006", "Fone Headset", "300.00"]);
  dataset.addRow(["007", "SSD 1TB", "400.00"]);
  dataset.addRow(["008", "Caneta Bic", "1.00"]);
  dataset.addRow(["009", "Lápis B2", "0.90"]);
  dataset.addRow(["010", "Porta Lápis", "30.00"]);

  return dataset;
}
function onMobileSync(user) {}
