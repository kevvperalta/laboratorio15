const colores = ["#ffd4d4", "#d4ffd8", "#d4e0ff", "#fff6c9"];
const divs = document.querySelectorAll("div");

divs.forEach((div, i) => {
  div.style.backgroundColor = colores[i % colores.length];
});
