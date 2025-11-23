const btn18 = document.getElementById('btn18');
btn18.addEventListener('click', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((sec, idx) => {
        sec.setAttribute('data-index', idx);
    });
});
