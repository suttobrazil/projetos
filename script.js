let valorExibido = '';

function inserirPraExibir(valor) {
  valorExibido += valor;
  document.getElementById('inserir').value = valorExibido;
}

function limparExibicao() {
  valorExibido = '';
  document.getElementById('inserir').value = valorExibido;
}

function calcular() {
  try {
    valorExibido = eval(valorExibido);
    document.getElementById('inserir').value = valorExibido;
  } catch (error) {
    document.getElementById('inserir').value = 'Erro';
  }
}
