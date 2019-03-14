// This is a JavaScript file

var valorAltura = 0;
var valorPeso = 0;
var valorIdade = 0;
var sexo = 0;
var total = 0;
var total2 = 0;
var atividade = 0;

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

//YVOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
//Aqui é uma tentativa de fazer o select funcionar, dando um valor em especifico pra cada uma opção
$(document).on("click", "#atividade", function(){
  $(document).on("select", "#op1", function(){
    atividade = $("#op1").val(1.2);
  })

  $(document).on("select", "#op2", function(){
    atividade = $("#op2").val(1.375);
  })

  $(document).on("select", "#op3", function(){
    atividade = $("#op3").val(1.55);
  })

  $(document).on("select", "#op4", function(){
    atividade = $("#op4").val(1.725);
  })

  $(document).on("select", "#op5", function(){
    atividade = $("#op5").val(1.9);
  })
})
//YVOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

//Aqui é a função que vai ocorrer quando o usuario clicar no botão calcular
$(document).on("click", "#calcular", function(){
  valorAltura = $("#inputAltura").val().replace("," , ".");
  valorPeso = $("#inputPeso").val().replace("," , ".");
  valorIdade = $("#inputIdade").val().replace("," , ".");

  //Aqui é o erro que ira aparecer se algum dos campos estiverem vazios
  if(valorAltura == 0 || valorPeso == 0 || valorIdade == 0 || sexo == 0 || atividade == 0)
  {
    $("#displayResultado").val("Existem campos incompletos");
  }

  else if (valorAltura != 0 && valorPeso != 0 && valorIdade != 0)
  {
    if (sexo == 1)
    {
      total = [(13.7 * valorPeso) + (5 * valorAltura) - (6.8 * valorIdade)]
      total2 = atividade * (66 + total)
    }

    else if (sexo == 2)
    {
      total = atividade * [(9.6 * valorPeso) + (1.8 * valorAltura) - (4.7* valorIdade)];
      total2 = atividade * (655 + total);
    }

    $("#displayResultado").val(total2.toFixed(2).replace("." , ","));

  }

})