// Import stylesheets
import './style.css';

// Constantes + Selecionar Elementos
const nroMesa = document.getElementById('nroMesa');
nroMesa.addEventListener('change', exibeNroDaMesa);

const valorTotal = document.getElementById('valorTotal');
valorTotal.addEventListener('change', exibeValorTotal);

const btnCalcular = document.getElementById('btn-acao');
btnCalcular.addEventListener('click', exibeFormCalculo);

const divOculto = document.getElementById('resultadoCalculo');
divOculto.className = 'oculto';


// Função Seleciona Número da Mesa
function exibeNroDaMesa() {
  console.log(`Mesa selecionada: ${nroMesa.value}.`);
  let nroMesaSelecionada = nroMesa.value;
  document.getElementById('mesaSelecionada').innerHTML = nroMesaSelecionada;
}

// Função Calcular Taxa de Serviço
function exibeValorTotal() {
  console.log(`Conta da Mesa é de: R$ ${valorTotal.value}.`);
  let totalCalculado = (valorTotal.value);
  document.getElementById('totalDaMesa').innerHTML = totalCalculado;
  document.getElementById('totalTaxaServCalc').innerHTML = (totalCalculado * 0.10).toFixed(2);

  let num = 5.56789;
let n = num.toFixed(10);

}

// Função Exibir Calculo
function exibeFormCalculo() {
  divOculto.className = 'visivel';
}
