const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.list-nav');
const ubey = document.querySelector('.ubey');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    ubey.classList.toggle('active')
});

function scrollKeBawah(){
    const targetSection = document.getElementById('about');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

function tohome(){
    const targetSection = document.getElementById('home');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}
function tokontak(){
    const targetSection = document.getElementById('kontak');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}