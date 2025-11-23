const btn15 = document.getElementById('btn15');
btn15.addEventListener('click', () => {
    const primer = document.querySelector('article');
    if (primer) {
        const clon = primer.cloneNode(true);
        const main = document.getElementById('principal');
        main.appendChild(clon);
    }
});
