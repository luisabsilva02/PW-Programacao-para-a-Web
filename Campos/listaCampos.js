window.onload = carregarCampos;

function carregarCampos() {

  if (getIdUtilizadorAtivo() == null) {

  } else {
    let clientes = JSON.parse(localStorage.getItem("clientes"));
    cliente = clientes.find(c => c.id == getIdUtilizadorAtivo())

    let navBarDadosPessoais = document.getElementById("dadosUtilizador")
    navBarDadosPessoais.style.display = "block"
    let minhasReservas = document.getElementById("minhasReservas")
    minhasReservas.style.display = "block"
    let paginaInicial = document.getElementById("paginaInicial")
    paginaInicial.style.display = "none"
    let imagemUtilizador1 = document.getElementById("imagemUtilizador1")
    let imagemUtilizador2 = document.getElementById("imagemUtilizador2")
    let nomeUtilizador = document.getElementById("nomeUtilizador")

    imagemUtilizador1.src = cliente.foto;
    imagemUtilizador2.src = cliente.foto;
    nomeUtilizador.innerText = cliente.nome;

  }

  let recintosDiv = document.getElementById("recintos");
  let recintosBD = JSON.parse(localStorage.getItem("recintos"));

  for (let i = 0; i < recintosBD.length; i += 3) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    row.style.justifyContent = "center";

    for (let j = i; j < i + 3 && j < recintosBD.length; j++) {
      let card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("class", "card mb-4");
      card.style.maxWidth = '300px';
      card.style.padding = "0%";
      card.style.marginTop = "20px";
      card.style.marginLeft = "60px";

      // create image element
      var image = document.createElement("img");
      image.setAttribute("src", recintosBD[j].image);
      image.setAttribute("class", "card-img-top img-fluid rounded-top-custom");
      image.style.maxHeight = '200px';
      image.style.minHeight = "200px";

      var body = document.createElement("div");
      body.setAttribute("class", "card-body");

      var tipoCampo = document.createElement("h6");
      tipoCampo.textContent = recintosBD[j].tipoCampo;
      tipoCampo.setAttribute("class", "tipoCampo");

      var tipoPiso = document.createElement("h6");
      tipoPiso.textContent = recintosBD[j].tipoPiso;
      tipoPiso.setAttribute("class", "tipoPiso");



      // create price element
      var preco = document.createElement("h2");
      preco.textContent = recintosBD[j].preco + "€/hora";
      preco.setAttribute("class", "preco");

      // make the stars
      let divStarts = document.createElement("div");
      divStarts.setAttribute("class", "rating");

      let star1 = document.createElement("i");
      let star2 = document.createElement("i");
      let star3 = document.createElement("i");
      let star4 = document.createElement("i");
      let star5 = document.createElement("i");

      if (recintosBD[j].reviews != "") {
       
        switch (calcularClassificacaoGeral(recintosBD[j].reviews).toString()) {
          case '1':
            star1.setAttribute("class", "fa fa-star");
            star2.setAttribute("class", "fa fa-star-o");
            star3.setAttribute("class", "fa fa-star-o");
            star4.setAttribute("class", "fa fa-star-o");
            star5.setAttribute("class", "fa fa-star-o");
            break;
          case '1.5':
            star1.setAttribute("class", "fa fa-star");
            star2.setAttribute("class", "fa fa-star-half");
            star3.setAttribute("class", "fa fa-star-o");
            star4.setAttribute("class", "fa fa-star-o");
            star5.setAttribute("class", "fa fa-star-o");
            break;
          case '2':
            star1.setAttribute("class", "fa fa-star");
            star2.setAttribute("class", "fa fa-star");
            star3.setAttribute("class", "fa fa-star-o");
            star4.setAttribute("class", "fa fa-star-o");
            star5.setAttribute("class", "fa fa-star-o");
            break;
          case '2.5':
            star1.setAttribute("class", "fa fa-star");
            star2.setAttribute("class", "fa fa-star");
            star3.setAttribute("fa fa-star-half");
            star4.setAttribute("class", "fa fa-star-o");
            star5.setAttribute("class", "fa fa-star-o");
            break;
          case '3':
            star1.setAttribute("class", "fa fa-star");
            star2.setAttribute("class", "fa fa-star");
            star3.setAttribute("class", "fa fa-star");
            star4.setAttribute("class", "fa fa-star-o");
            star5.setAttribute("class", "fa fa-star-o");
            break;
            case '3.5':
              star1.setAttribute("class", "fa fa-star");
              star2.setAttribute("class", "fa fa-star");
              star3.setAttribute("class", "fa fa-star");
              star4.setAttribute("class", "fa fa-star-half");
              star5.setAttribute("class", "fa fa-star-o");
              break;
          case '4':
            star1.setAttribute("class", "fa fa-star");
            star2.setAttribute("class", "fa fa-star");
            star3.setAttribute("class", "fa fa-star");
            star4.setAttribute("class", "fa fa-star");
            star5.setAttribute("class", "fa fa-star-o");
            break;
            case '4.5':
              star1.setAttribute("class", "fa fa-star");
              star2.setAttribute("class", "fa fa-star");
              star3.setAttribute("class", "fa fa-star");
              star4.setAttribute("class", "fa fa-star");
              star5.setAttribute("class", "fa fa-star-half");
              break;
          case '5':
            star1.setAttribute("class", "fa fa-star");
            star2.setAttribute("class", "fa fa-star");
            star3.setAttribute("class", "fa fa-star");
            star4.setAttribute("class", "fa fa-star");
            star5.setAttribute("class", "fa fa-star");
            break;
        }
        divStarts.appendChild(star1);
        divStarts.appendChild(star2);
        divStarts.appendChild(star3);
        divStarts.appendChild(star4);
        divStarts.appendChild(star5);
      } else {
        let semClassificacao = document.createElement("i");
        semClassificacao.innerHTML = "Sem Avaliações"
        divStarts.appendChild(semClassificacao)
      }


      // create description
      var descricao = document.createElement("h6");
      descricao.textContent = recintosBD[j].descricao;
      descricao.setAttribute("class", "descricao");

      var localizacao = document.createElement("h4");
      localizacao.textContent = getLocalizacaoComplexo(recintosBD[j].complexo)
      localizacao.setAttribute("class", "localizacao");

      var br = document.createElement("br");

      var button = document.createElement("button");
      button.setAttribute("class", "botaoListaCampos");
      button.setAttribute("type", "button");
      button.setAttribute('id', "button" + recintosBD[j].id); // cada botão vai ter o id do campo associado
      button.textContent = "Reservar";

      // quando clicarmos, isto vai para uma nova página
      button.addEventListener("click", function () {
        const id = this.id.slice(6); // pega apenas o número do id, removendo "button"
        window.location.href = "../Minhas Reservas/fazerReserva.html?id=" + id; // abre a página na mesma cena
      });

      card.appendChild(image);
      body.appendChild(preco); // adiciona o elemento preco ao body
      body.appendChild(divStarts);
      body.appendChild(descricao);
      body.appendChild(localizacao);
      body.appendChild(tipoPiso);
      body.appendChild(tipoCampo);
      body.appendChild(br);
      body.appendChild(button);
      card.appendChild(body);

      row.appendChild(card);
    }

    recintosDiv.appendChild(row);
    document.getElementById("recintos").appendChild(row);
  }

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const cidade = urlParams.get('cidade');
    document.getElementById("campo_pesquisa").value = cidade;
    searchRecintos()

  } catch {

  }

  function getLocalizacaoComplexo(idComplexo) {

    let complexos = JSON.parse(localStorage.getItem("complexos"))
    let complexo = complexos.find(c => c.id == idComplexo)

    return complexo.localizacao;
  }

}


let selectedJogoFilters = [];
let selectedPisoFilters = [];
let selectedLocFilters = [];
let selectedCampoFilters = [];
let selectedStarsFilters = [];

$(document).ready(function () {


  $('.pesquisaravaliacao .list').click(function () {
    const value = $(this).attr('data-filter');

    if ($(this).hasClass('active')) {
      const index = selectedStarsFilters.indexOf(value);
      if (index !== -1) {
        selectedStarsFilters.splice(index, 1);
      }
    } else {
      selectedStarsFilters.push(value);
    }

    $(this).toggleClass('active');
  });

  $('.tipopiso .list').click(function () {
    const value = $(this).attr('data-filter');

    if ($(this).hasClass('active')) {
      const index = selectedPisoFilters.indexOf(value);
      if (index !== -1) {
        selectedPisoFilters.splice(index, 1);
      }
    } else {
      selectedPisoFilters.push(value);
    }

    $(this).toggleClass('active');
  });

  $('.tipojogo .list').click(function () {
    const value = $(this).attr('data-filter');

    if ($(this).hasClass('active')) {
      const index = selectedJogoFilters.indexOf(value);
      if (index !== -1) {
        selectedJogoFilters.splice(index, 1);
      }
    } else {
      selectedJogoFilters.push(value);
    }

    $(this).toggleClass('active');
  });


  $('.loc .list').click(function () {
    const value = $(this).attr('data-filter');

    if ($(this).hasClass('active')) {
      const index = selectedLocFilters.indexOf(value);
      if (index !== -1) {
        selectedLocFilters.splice(index, 1);
      }
    } else {
      selectedLocFilters.push(value);
    }

    $(this).toggleClass('active');
  });

  $('.tipocampo .list').click(function () {
    const value = $(this).attr('data-filter');

    if ($(this).hasClass('active')) {
      const index = selectedCampoFilters.indexOf(value);
      if (index !== -1) {
        selectedCampoFilters.splice(index, 1);
      }
    } else {
      selectedCampoFilters.push(value);
    }

    $(this).toggleClass('active');
  });

  $('#filtrar-btn').click(function () {
    filtrarCards();
  });

});

function filtrarCards() {
  const filteredCards = [];
  const window = document.querySelector('#window_filtro');
  window.style.display = 'none';

  $('.card').each(function () {
    const localizacao = $(this).find('.localizacao').text();
    const tipoPiso = $(this).find('.tipoPiso').text();
    const tipoCampo = $(this).find('.tipoCampo').text();
    const tipoJogo = $(this).find('.descricao').text();
    const estrelas = $(this).find('.rating i.fa.fa-star').length;

    const locMatch = selectedLocFilters.length === 0 || selectedLocFilters.some(loc => localizacao.toLowerCase().includes(loc.toLowerCase()));
    const pisoMatch = selectedPisoFilters.length === 0 || selectedPisoFilters.some(piso => tipoPiso.toLowerCase().includes(piso.toLowerCase()));
    const campoMatch = selectedCampoFilters.length === 0 || selectedCampoFilters.some(campo => tipoCampo.toLowerCase().includes(campo.toLowerCase()));
    const jogoMatch = selectedJogoFilters.length === 0 || selectedJogoFilters.some(jogo => tipoJogo.toLowerCase().includes(jogo.toLowerCase()));
    const estrelasMatch = selectedStarsFilters.length === 0 || selectedStarsFilters.includes(String(estrelas));

    if (locMatch && pisoMatch && campoMatch && jogoMatch && estrelasMatch) {
      filteredCards.push($(this));
      $(this).show('1000');
    } else {
      $(this).hide('1000');
    }
  });

  if (selectedLocFilters.length === 0 && selectedPisoFilters.length === 0 && selectedCampoFilters.length === 0 && selectedJogoFilters.length === 0 && selectedStarsFilters.length === 0) {
    $('.card').show('1000');
    $('.list').removeClass('active');
  }

  const mensagem = $('#mensagem');

  if (filteredCards.length === 0) {
    mensagem.text("Não existem complexos. Tente mudar a pesquisa.");
    mensagem.show();
  } else {
    mensagem.hide();
  }
}



function LimparFiltro() {
  const checkboxes = document.querySelectorAll('#window_filtro input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  selectedLocFilters.length = 0;
  selectedCampoFilters.length = 0;
  selectedJogoFilters.length = 0;
  selectedPisoFilters.length = 0;
  selectedStarsFilters.length = 0;

  $('.list').removeClass('active');
}

$('#aplicar-btn').click(function () {
  LimparFiltro();
  filtrarCards();
});

function searchRecintos() {
  const input = document.getElementById("campo_pesquisa").value.toLowerCase();

  const filteredCards = [];

  $('.card').each(function () {
    const valueLocalizacao = $(this).find('.localizacao').text().toLowerCase();
    const valueDescricao = $(this).find('.descricao').text().toLowerCase();
    const valueTipoCampo = $(this).find('.tipoCampo').text().toLowerCase();
    const valueTipoPiso = $(this).find('.tipoPiso').text().toLowerCase();

    if (valueLocalizacao.includes(input) || valueDescricao.includes(input) || valueTipoCampo.includes(input) || valueTipoPiso.includes(input)) {
      filteredCards.push($(this));
      $(this).show('1000');
    } else {
      $(this).hide('1000');
    }
  });

  const mensagem = $('#mensagem');

  if (filteredCards.length === 0) {
    mensagem.text("Não existem complexos. Tente mudar a pesquisa.");
    mensagem.show();
  } else {
    mensagem.hide();
  }
}

//barra de pesquisa
$(document).ready(function () {

  document.getElementById("campo_pesquisa").addEventListener("input", function () {
    searchRecintos();

  });

});




function toggleWindow(button) {
  var window = button.nextElementSibling;

  if (window.style.display === "none") {
    // Verifica se a outra janela está aberta e fecha-a antes de abrir a janela atual

    window.style.display = "block";
    window.style.top = button.offsetTop + button.offsetHeight + "px";
    window.style.left = button.offsetLeft + button.offsetWidth - window.offsetWidth + "px";
  } else {
    window.style.display = "none";
  }
}

function LimparPesquisaFiltro() {
  document.getElementById("campo_pesquisa").value = "";
  const checkboxes = document.querySelectorAll('#window_filtro input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  const window = document.querySelector('#window_filtro');
  window.style.display = 'none';

  selectedFilters = []; // Clear the selected filters array

  $('.list').removeClass('active'); // Remove active class from all filter buttons

  $('.localizacao').parent().parent().show('1000'); // Show all cards
}



function getIdUtilizadorAtivo() {
  try {
    let utilizadorAtivo = JSON.parse(localStorage.getItem("utilizadorAtivo"));
    return utilizadorAtivo.id;
  } catch {
    return null;
  }


}
function calcularClassificacaoGeral(reviews) {
  let acumuladorClassificaco = 0;
  let contadorClassificacao = 0;
  let reviewsLocalStorage = JSON.parse(localStorage.getItem("reviews"));

  reviewsLocalStorage.forEach(element1 => {

    reviews.forEach(element2 => {
      if (element1.id == element2) {
        acumuladorClassificaco += parseInt(element1.classificacao);
        contadorClassificacao++;
      }
    });
  });

  let clasificacaoGeral = acumuladorClassificaco / contadorClassificacao;
  return Math.round(clasificacaoGeral * 2) / 2;
}