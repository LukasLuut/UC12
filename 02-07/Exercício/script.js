//Declaração de variáveis 
const nav = document.getElementById('nav')
const logo = document.getElementById('logo')
const header = document.querySelector('header')


//Lógica
logo.addEventListener('click', (event) => {
    nav.classList.toggle('hide-nav')
})

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('change')
    } else {
        header.classList.remove('change')
    }
})

