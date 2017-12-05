var botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

 botaoBuscarPacientes.addEventListener("click",function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load",function(){

    var erroAjax = document.querySelector("#erro-ajax");
    erroAjax.classList.add("invisivel");

      if(xhr.status == 200){

        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente){
          adicionaPacienteNaTabela(paciente);
        });

      }else {

        erroAjax.classList.remove("invisivel");

      }


    });

    xhr.send();


 });
