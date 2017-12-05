var botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

 botaoBuscarPacientes.addEventListener("click",function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load",function(){
      console.log(xhr.responseText);
    });

    xhr.send();


 });
