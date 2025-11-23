const btn12 = document.getElementById('btn12');
btn12.addEventListener('click', () => {
    const p = document.getElementById('p-reemplazar');
    const div = document.createElement('div');
    div.textContent = 'Párrafo reemplazado';
    p.parentNode.replaceChild(div, p);
});
