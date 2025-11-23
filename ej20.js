const btn20 = document.getElementById('btn20');
btn20.addEventListener('click', () => {
    const ul = document.createElement('ul');
    for (let i = 0; i < 5; i++) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = 'Nivel interno';
        li.appendChild(span);
        ul.appendChild(li);
    }
    const salida = document.getElementById('salida20');
    salida.innerHTML = '';
    salida.appendChild(ul);
});
