let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
  (palavra001 = {
    nome: "IRLANDA",
    categoria: "LUGARES",
  }),
  (palavra002 = {
    nome: "EQUADOR",
    categoria: "LUGARES",
  }),
  (palavra003 = {
    nome: "CHILE",
    categoria: "LUGARES",
  }),
  (palavra004 = {
    nome: "INDONESIA",
    categoria: "LUGARES",
  }),
  (palavra005 = {
    nome: "MALDIVAS",
    categoria: "LUGARES",
  }),
  (palavra006 = {
    nome: "INGLATERRA",
    categoria: "LUGARES",
  }),
  (palavra007 = {
    nome: "GROELANDIA",
    categoria: "LUGARES",
  }),
  (palavra008 = {
    nome: "ADUSTINA",
    categoria: "LUGARES",
  }),
  (palavra009 = {
    nome: "INDONESIA",
    categoria: "LUGARES",
  }),
  (palavra010 = {
    nome: "BRASIL",
    categoria: "LUGARES",
  }),
  (palavra011 = {
    nome: "BICICLETA",
    categoria: "TRASNPORTE",
  }),
  (palavra012 = {
    nome: "NAVIO",
    categoria: "TRASNPORTE",
  }),
  (palavra013 = {
    nome: "LANCHA",
    categoria: "TRASNPORTE",
  }),
  (palavra014 = {
    nome: "TELEFERICO",
    categoria: "TRASNPORTE",
  }),
  (palavra015 = {
    nome: "MOTOCICLETA",
    categoria: "TRASNPORTE",
  }),
  (palavra016 = {
    nome: "BARCO",
    categoria: "TRASNPORTE",
  }),
  (palavra017 = {
    nome: "AERONAVE",
    categoria: "TRASNPORTE",
  }),
  (palavra018 = {
    nome: "TREM",
    categoria: "TRASNPORTE",
  }),
  (palavra019 = {
    nome: "CATAQUE",
    categoria: "TRASNPORTE",
  }),
  (palavra020 = {
    nome: "FUNICULAR",
    categoria: "TRASNPORTE",
  }),
  (palavra021 = {
    nome: "TAMBORETE",
    categoria: "OBJETOS",
  }),
  (palavra022 = {
    nome: "LAMPADA",
    categoria: "OBJETOS",
  }),
  (palavra023 = {
    nome: "CADEIRA",
    categoria: "OBJETOS",
  }),
  (palavra024 = {
    nome: "MALETA",
    categoria: "OBJETOS",
  }),
  (palavra025 = {
    nome: "TRAVESSEIRO",
    categoria: "OBJETOS",
  }),
  (palavra026 = {
    nome: "RAQUETE",
    categoria: "OBJETOS",
  }),
  (palavra027 = {
    nome: "LAMPADA",
    categoria: "OBJETOS",
  }),
  (palavra028 = {
    nome: "RELOGIO",
    categoria: "OBJETOS",
  }),
  (palavra029 = {
    nome: "MICROONDAS",
    categoria: "OBJETOS",
  }),
  (palavra030 = {
    nome: "COMPUTADOR",
    categoria: "OBJETOS",
  }),
  (palavra031 = {
    nome: "PASTEL",
    categoria: "ALIMENTOS",
  }),
  (palavra032 = {
    nome: "MACARAO",
    categoria: "ALIMENTOS",
  }),
  (palavra033 = {
    nome: "CARNE",
    categoria: "ALIMENTOS",
  }),
  (palavra034 = {
    nome: "ABOBORA",
    categoria: "ALIMENTOS",
  }),
  (palavra035 = {
    nome: "MELANCIA",
    categoria: "ALIMENTOS",
  }),
  (palavra036 = {
    nome: "FEIJOADA",
    categoria: "ALIMENTOS",
  }),
  (palavra037 = {
    nome: "HAMBURGUER",
    categoria: "ALIMENTOS",
  }),
  (palavra038 = {
    nome: "LASANHA",
    categoria: "ALIMENTOS",
  }),
  (palavra039 = {
    nome: "SORVETE",
    categoria: "ALIMENTOS",
  }),
  (palavra040 = {
    nome: "ARROZ",
    categoria: "ALIMENTOS",
  }),
  (palavra041 = {
    nome: "CACHORRO",
    categoria: "ANIMAIS",
  }),
  (palavra042 = {
    nome: "PAVAO",
    categoria: "ANIMAIS",
  }),
  (palavra043 = {
    nome: "HIPOPOTAMO",
    categoria: "ANIMAIS",
  }),
  (palavra044 = {
    nome: "MACACO",
    categoria: "ANIMAIS",
  }),
  (palavra045 = {
    nome: "LEOPARDO",
    categoria: "ANIMAIS",
  }),
  (palavra046 = {
    nome: "COBRA",
    categoria: "ANIMAIS",
  }),
  (palavra047 = {
    nome: "JACARE",
    categoria: "ANIMAIS",
  }),
  (palavra048 = {
    nome: "GIRAFA",
    categoria: "ANIMAIS",
  }),
  (palavra049 = {
    nome: "CORUJA",
    categoria: "ANIMAIS",
  }),
  (palavra050 = {
    nome: "PORCO",
    categoria: "ANIMAIS",
  }),
];
criarPalavraSecreta();
function criarPalavraSecreta() {
  const indexPalavra = parseInt(Math.random() * palavras.length);

  palavraSecretaSorteada = palavras[indexPalavra].nome;
  palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();
function montarPalavraNaTela() {
  const categoria = document.getElementById("categoria");
  categoria.innerHTML = palavraSecretaCategoria;

  const palavraTela = document.getElementById("palavra-secreta");
  palavraTela.innerHTML = "";

  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      listaDinamica[i] = "&nbsp;";
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        "</div>";
    } else {
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        "</div>";
    }
  }
}

function verificaLetraEscolhida(letra) {
  document.getElementById("tecla-" + letra).disabled = true;
  if (tentativas > 0) {
    mudarStyleLetra("tecla-" + letra);
    comparalistas(letra);
    montarPalavraNaTela();
  }
}

function mudarStyleLetra(tecla) {
  document.getElementById(tecla).style.background = "#C71585";
  document.getElementById(tecla).style.color = "#ffffff";
}

function comparalistas(letra) {
  const pos = palavraSecretaSorteada.indexOf(letra);
  if (pos < 0) {
    tentativas--;
    carregaImagemForca();

    if (tentativas == 0) {
      abreModal(
        "OPS!",
        "Não foi dessa vez ... A palavra secreta era <br>" +
          palavraSecretaSorteada
      );
    }
  } else {
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        listaDinamica[i] = letra;
      }
    }
  }

  let vitoria = true;
  for (i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false;
    }
  }

  if (vitoria == true) {
    abreModal("PARABÉNS!", "Você venceu...");
    tentativas = 0;
  }
}
function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.getElementById("imagem").style.background =
        "url('./img/forca01.png')";
      break;
    case 4:
      document.getElementById("imagem").style.background =
        "url('./img/forca02.png')";
      break;
    case 3:
      document.getElementById("imagem").style.background =
        "url('./img/forca03.png')";
      break;
    case 2:
      document.getElementById("imagem").style.background =
        "url('./img/forca04.png')";
      break;
    case 1:
      document.getElementById("imagem").style.background =
        "url('./img/forca05.png')";
      break;
    case 0:
      document.getElementById("imagem").style.background =
        "url('./img/forca06.png')";
      break;
    default:
      document.getElementById("imagem").style.background =
        "url('./img/forca.png')";
      break;
  }
}
function abreModal(titulo, mensagem) {
  let modalTitulo = document.getElementById("exampleModalLabel");
  modalTitulo.innerText = titulo;
  let modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = mensagem;

  $("#myModal").modal({
    show: true,
  });
}
let bntReiniciar = document.querySelector("#btnReiniciar");
bntReiniciar.addEventListener("click", function () {
  location.reload();
});
