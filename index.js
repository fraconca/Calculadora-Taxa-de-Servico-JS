// Import stylesheets
import './style.css';

// Constantes + Selecionar Elementos
const nroMesa = document.getElementById('nroMesa');
nroMesa.addEventListener('change', exibeNroDaMesa);

const valorTotal = document.getElementById('valorTotal');
valorTotal.addEventListener('change', exibeValorTotal);

// Função Sleeciiona Número da Mesa
function exibeNroDaMesa() {
  console.log(`Mesa: ${nroMesa.value}`);
  let nroMesaSelecionada = nroMesa.value;
  nroMesaSelecionada = document.getElementById('mesaSelecionada').innerHTML =
    nroMesaSelecionada;
}
// Função Sleeciiona Número da Mesa
function exibeValorTotal() {
  console.log(`Total da mesa: R$ ${valorTotal.value}`);
}
