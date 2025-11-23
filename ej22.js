const btn22 = document.getElementById('btn22');
btn22.addEventListener('click', () => {
    const sec = document.getElementById('sec22');
    const h2nuevo = document.createElement('h2');
    h2nuevo.textContent = 'titulo nuevo';
    const p = document.createElement('p');
    p.textContent = 'descripción generada';
    const ul = document.createElement('ul');
    for (let i = 1; i <= 3; i++) {
        const li = document.createElement('li');
        li.textContent = 'elemento' + i;
        ul.appendChild(li);
    }
    sec.appendChild(h2nuevo);
    sec.appendChild(p);
    sec.appendChild(ul);
    const h2original = sec.querySelector('h2');
    if (h2original && h2original !== h2nuevo) {
        h2original.remove();
    }
});
