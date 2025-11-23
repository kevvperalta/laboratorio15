const btn17 = document.getElementById('btn17');
btn17.addEventListener('click', () => {
    const cont = document.getElementById('contenedor-parrafos');
    const ps = Array.from(cont.querySelectorAll('p'));
    ps.sort((a, b) => {
        const ta = a.textContent.trim().toLowerCase();
        const tb = b.textContent.trim().toLowerCase();
        if (ta < tb) return -1;
        if (ta > tb) return 1;
        return 0;
    });
    ps.forEach(p => cont.appendChild(p));
});
