const btn21 = document.getElementById('btn21');
btn21.addEventListener('click', () => {
    const cont = document.getElementById('contenedor');
    cont.innerHTML = '';
    for (let i = 1; i <= 3; i++) {
        const p = document.createElement('p');
        p.textContent = 'Párrafo ' + i;
        cont.appendChild(p);
    }
    const ps = cont.querySelectorAll('p');
    if (ps.length >= 2) {
        cont.removeChild(ps[1]);
    }
});
