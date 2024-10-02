// window.alert("Isso mesmo");

const href = location.href;

if (href === "http://127.0.0.1:5500/dom-01/index.html") {
  //   alert("é igual");
} else {
  //   alert("n é igual");
}

const title = document.querySelector("h1");

function teste() {
  console.log("Clicou em ", title.innerText);
}

title.addEventListener("click", teste);

// Retorne o url da página atual utilizando o objeto window
const href2 = function () {
  console.log(window.location.href);
};
href2();

// Seleciona o primeiro elemento da página que
// possua a classe ativo

const ativo = document.querySelector(".ativo");
console.log(ativo.classList);

// Retorne a linguagem do navegador
const body = navigator.language;
console.log(body);

// Retorne a largura da janela
const largura = document.querySelector("body");
console.log(largura.offsetWidth);
