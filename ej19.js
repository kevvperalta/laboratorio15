const btn19 = document.getElementById('btn19');
btn19.addEventListener('click', () => {
    const divs = document.querySelectorAll('div');
    const conteo = divs.length;
    const p = document.createElement('p');
    p.textContent = 'Número de divs: ' + conteo;
    document.body.appendChild(p);
});
