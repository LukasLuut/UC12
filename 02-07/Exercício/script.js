//Declaração de variáveis 
const nav = document.getElementById('nav')
const logo = document.getElementById('logo')


//Lógica
logo.addEventListener('click', (event)=>{
    nav.classList.toggle('hide-nav')
})

