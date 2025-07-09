//Declaração de variáveis 
const nav = document.getElementById('nav')
const logo = document.getElementById('logo')
const header = document.querySelector('header')
const box= document.querySelector('.box')


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

/*Adicionar animação quando o elemento aparece na tela com Observer*/

const observer = new IntersectionObserver((entries, observer)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }

    })

})

observer.observe(box);