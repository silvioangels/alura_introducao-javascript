var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];

  var tdPeso   = paciente.querySelector(".info-peso");
  var peso     = tdPeso.textContent;

  var tdAltura   = paciente.querySelector(".info-altura");
  var altura     = tdAltura.textContent;

  var tdImc   = paciente.querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhValido = true;

  if(peso < 0 || peso > 1000){
    pesoEhValido = false;
    console.log("Peso Inválido!!");
    tdImc.textContent = "Peso Inválido!!";
    paciente.classList.add("paciente-invalido");
  }

  if(altura < 0 || altura > 3.00){
    alturaEhValido = false;
    console.log("Altura Inválida!!");
    tdImc.textContent = "Altura Inválida!!";
    paciente.classList.add("paciente-invalido");
  }

  if(pesoEhValido && alturaEhValido){
    var imc = peso / (altura * altura);
    console.log(imc);

    tdImc.textContent = imc.toFixed(2);
  }

}
