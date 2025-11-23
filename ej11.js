const btn11 = document.getElementById('btn11');
btn11.addEventListener('click', () => {
    const seccion = document.getElementById('seccion-existente');
    const ul = document.createElement('ul');
    for (let i = 1; i <= 5; i++) {
        const li = document.createElement('li');
        li.textContent = 'Elemento ' + i;
        ul.appendChild(li);
    }
    seccion.appendChild(ul);
});
