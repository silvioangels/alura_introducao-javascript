var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var paciente = obtemPacienteDoFormulario(form);

  var pacientetr = montaTr(paciente);

  var erros = validaPaciente(paciente);

  limparMensagemErros();

  if(erros.length > 0){
    exibeMensagemErros(erros);
    return;
  }

  var tabela = document.querySelector("#paciente-pacientes");
  tabela.appendChild(pacientetr);

  form.reset();

});

function obtemPacienteDoFormulario(form){

  var paciente = {
    nome:    form.nome.value,
    peso:    form.peso.value,
    altura:  form.altura.value,
    gordura: form.gordura.value,
    imc:     calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;

}

function montaTr(paciente){

  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){

  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;

}

function validaPaciente(paciente){

      var erros = [];

      if(paciente.nome.length == 0){
        erros.push("O Nome não pode ser em branco");
      }

      if(paciente.peso.length == 0){
        erros.push("O Peso não pode ser em branco");
      }

      if(paciente.altura.length == 0){
        erros.push("A Altura não pode ser em branco");
      }

      if(paciente.gordura.length == 0){
        erros.push("A Gordura não pode ser em branco");
      }

      if(!validaPeso(paciente.peso)){
        erros.push("O Peso é invalido");
      }

      if(!validaAltura(paciente.altura)){
        erros.push("A Altura é invalido");
      }

      return erros;
}

function exibeMensagemErros(erros){

  var ul = document.querySelector("#mensagens-erro");
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });

}

function limparMensagemErros(){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
}
