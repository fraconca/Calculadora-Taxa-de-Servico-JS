// Import stylesheets
import './style.css';

// Constantes + Selecionar Elementos
const nroMesa = document.getElementById('nroMesa');
nroMesa.addEventListener('change', exibeNroDaMesa);

const valorTotal = document.getElementById('valorTotal');
valorTotal.addEventListener('change', exibeValorTotal);

const btnCalcular = document.getElementById('resultadoCalculo');
btnCalcular.addEventListener('click', exibeFormCalculo);

// Função Seleciona Número da Mesa
function exibeNroDaMesa() {
  console.log(`Mesa selecionada: ${nroMesa.value}.`);
  let nroMesaSelecionada = nroMesa.value;
  nroMesaSelecionada = document.getElementById('mesaSelecionada').innerHTML =
    nroMesaSelecionada;
}

// Função Calcular Taxa de Serviço
function exibeValorTotal() {
  console.log(`Conta da Mesa é de: R$ ${valorTotal.value}.`);
  let totalCalculado = valorTotal.value;
  totalCalculado = document.getElementById('totalTaxaServico').innerHTML =
    totalCalculado;
  exibeFormCalculo();
}

// Função Exibir Calculo
function exibeFormCalculo() {
  document.getElementById('totalTaxaServico').className = visivel;
}
