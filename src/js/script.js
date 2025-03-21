let hamburguer = document.querySelector('.hamburguer');

let navList = document.querySelector('.navList')

hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('ativado')
    navList.classList.toggle('mostrar')
})