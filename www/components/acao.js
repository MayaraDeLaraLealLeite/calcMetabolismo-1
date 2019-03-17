// This is a JavaScript file

var valorAltura = 0;
var valorPeso = 0;
var valorIdade = 0;
var sexo = 0;

var total = 0;

var valorAtividade = 0;

// funções do botao de informaçoes
var btnInfo;
var btnfechar;
var mostrarDivInfo;
var fecharDivInfo;

window.onload = function()
{
  divInformacao = document.getElementById("divInformacao");

  var btnInfo = document.getElementById("btnInfo");
  btnInfo.onclick = mostrarDivInfo;
  var btnfechar = document.getElementById("btnfechar");
  btnfechar.onclick = fecharDivInfo;

  divInformacao.classList.add("escondido");
  btnfechar.classList.add("escondido");
}
function mostrarDivInfo()
{
   divInformacao.classList.remove("escondido");
}
function fecharDivinfo()
{
   divInformacao.classList.add("escondido");
}



//Botão para selecionar o sexo, se for mulher o sexo = 1 e se for homem, é sexo = 2
$(document).on("click", "#btnSexo", function(){
  $('.btnSexo').css({opacity:"1"});
  sexo = 1;
  $('.btnSexo2').css({opacity:"0.3"});
})

$(document).on("click", "#btnSexo2", function(){
  $('.btnSexo2').css({opacity:"1"});
  sexo = 2;
  $('.btnSexo').css({opacity:"0.3"});
})

//Pegando valor de uma option do select
$(document).on("click", "#atividade", function(){
    valorAtividade = $("#atividade").val();
})

//Aqui é a função que vai ocorrer quando o usuario clicar no botão calcular
$(document).on("click", "#calcular", function(){
  valorAltura = $("#inputAltura").val();
  valorPeso = $("#inputPeso").val();
  valorIdade = $("#inputIdade").val();

  //Aqui é o erro que ira aparecer se algum dos campos estiverem vazios
  if(valorAltura == 0 || valorPeso == 0 || valorIdade == 0 || sexo == 0 || valorAtividade == 0)
  {
    $("#displayResultado").val("Existem campos incompletos");
  }

  else if (valorAltura != 0 && valorPeso != 0 && valorIdade != 0)
  {
    if (sexo == 1)
    {
      total = valorAtividade * (655 + (9.6 * valorPeso) + (1.8 * valorAltura) - (4.7* valorIdade));
    }

    else if (sexo == 2)
    {
      total = valorAtividade * (66 + (13.7 * valorPeso) + (5 * valorAltura) - (6.8 * valorIdade));
    }

    $("#displayResultado").val(total.toFixed(2).replace("." , ","));

  }
 
})


