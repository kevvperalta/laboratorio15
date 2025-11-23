const btn13 = document.getElementById('btn13');
btn13.addEventListener('click', () => {
    const paras = document.querySelectorAll('div p');
    const ultimo = paras[paras.length - 1];
    if (ultimo) {
        ultimo.remove();
    }
});
