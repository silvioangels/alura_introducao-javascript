var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
  var alvoEvento = event.target; // TR
  var paiDoAlvo = alvoEvento.parentNode; //TL

  paiDoAlvo.remove();
});

// pacientes.forEach(function(paciente){
//   paciente.addEventListener("dblclick",function(){
//     this.remove();
//   })
// });
