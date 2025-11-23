const btn14 = document.getElementById('btn14');
btn14.addEventListener('click', () => {
    const cont = document.getElementById('contenido');
    while (cont.firstChild) {
        cont.removeChild(cont.firstChild);
    }
});
