var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);

titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso   = paciente.querySelector(".info-peso");
var peso     = tdPeso.textContent;

var tdAltura   = paciente.querySelector(".info-altura");
var altura     = tdAltura.textContent;

console.log(paciente);

console.log(tdPeso);
console.log(peso);

console.log(tdAltura);
console.log(altura);

var imc = peso / (altura * altura);
console.log(imc);

var tdImc   = paciente.querySelector(".info-imc");
tdImc.textContent = imc;
