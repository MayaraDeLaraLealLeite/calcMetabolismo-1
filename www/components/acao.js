// Variaveis utilizadas
var valorAltura = 0;
var valorPeso = 0;
var valorIdade = 0;
var sexo = 0;
var total = 0;
var valorAtividade = 0;

// funções do botao de informaçoes
$(document).ready(function(){
    $("#divInformacao").hide(200);

    $("#btnInfo").click(function(){
        $("#divInformacao").toggle(500);
    });
});

//Botão para selecionar o sexo, se for mulher o sexo = 1 e se for homem, é sexo = 2
$(document).on("click", "#btnSexo", function(){
  $('#mulher').css({opacity:"1"});
  sexo = 1;
  $('#homem').css({opacity:"0.25"});
})

$(document).on("click", "#btnSexo2", function(){
  $('#homem').css({opacity:"1"});
  sexo = 2;
  $('#mulher').css({opacity:"0.25"});
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

    $("#displayResultado").val(total.toFixed(2).replace("." , ",") + " É sua 'TMB'");

  }
})
