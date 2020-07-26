var inputValorHora = document.querySelector('#valor-hora');
var inputHorasProjeto = document.querySelector('#horas-projeto');
var resultado = document.querySelector('#resposta');

function calcular(){
  var valorHora = inputValorHora.valueAsNumber;
  var horasProjeto = inputHorasProjeto.valueAsNumber;
  var pagamento = valorHora * horasProjeto;
  var valorProjeto = pagamento.toFixed(2);

resultado.textContent = 'R$ ' + valorProjeto;
}
