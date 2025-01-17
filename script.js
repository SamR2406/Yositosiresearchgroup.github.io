
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const backToTopButton = document.createElement('button');
backToTopButton.innerText = '⬆️';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '1rem';
backToTopButton.style.right = '1rem';
backToTopButton.style.padding = '0.5rem';
backToTopButton.style.display = 'none';
backToTopButton.style.backgroundColor = '#555';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.cursor = 'pointer';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


