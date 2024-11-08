// window.alert("Oi");

// const href = location.href;

// const lang = navigator.language;

// const screen = window.screen.width;

// if (screen === 1920) {
//   document.body.style.backgroundColor = "#111";
// }

const titulo = document.querySelector("h1");
const tituloClasse = titulo.classList; // retorna as classes do titulo

titulo.addEventListener("click", () => {
  titulo.classList.add("cor");
});
