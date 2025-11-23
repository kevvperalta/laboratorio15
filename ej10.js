const primerP = document.querySelector("p");
const nuevoH3 = document.createElement("h3");

nuevoH3.textContent = "nuevo h3 insertado antes del primer párrafo";

primerP.parentNode.insertBefore(nuevoH3, primerP);
