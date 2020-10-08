// $(document).ready(function(){
//     alert("Olá mundo!!");
// });

$(document).ready(function(){

   $('#btn-enviar').click(function(){
    var nome = $('#nome').val();
        if(nome.lenght < 0){
            alert("Digite seu nome completo");
        }
    alert(nome);
   });
   

// document.getElementById('nome').nodeValue();
});

$(document).ready(function(){

    $('#btn-enviar').click(function(){
     var nome = $('#nome').val();
         if(nome.trim() != "" && nome.lenght != ""){
             alert(nome+ " seu nome tem"+nome.lenght + " letras");
         }
     alert(nome);
    });// Fim do Botão Enviar

    var Aluno = "Roberto Dias";
    var idade = 22;
    var Salario = 2999.90;
    var Estudante = true;

    var auxiliar = parseInt(Aluno);

    alert("A variável Aluno é do tipo "+ typeof auxiliar);
    
 
 // document.getElementById('nome').nodeValue();
 });