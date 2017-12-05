var botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

 botaoBuscarPacientes.addEventListener("click",function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load",function(){

      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente){
          adicionaPacienteNaTabela(paciente);
      });

    });

    xhr.send();


 });
